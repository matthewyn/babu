import { prisma } from "@/prisma";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

const User = z.object({
  name: z.string().min(1, { message: "Nama wajib diisi" }),
  password: z.string().min(8, { message: "Password wajib berisi 8 karakter" }),
});

export async function POST(req: NextRequest) {
  const { phoneNumber, name, password } = await req.json();
  const result = User.safeParse({
    name,
    password,
  });
  if (!result.success) {
    return NextResponse.json({ errors: result.error.flatten().fieldErrors }, { status: 401 });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      phoneNumber,
      name,
      password: hashedPassword,
    },
  });
  return NextResponse.json({ errors: {}, user }, { status: 200 });
}
