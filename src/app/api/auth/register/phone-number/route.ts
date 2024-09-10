import { prisma } from "@/prisma";
import { z } from "zod";
import { NextRequest, NextResponse } from "next/server";

const User = z.object({
  phoneNumber: z
    .string()
    .trim()
    .regex(/^(\+62|62)?[\s-]?0?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/, { message: "Format nomor telfon tidak sesuai" }),
});

export async function POST(req: NextRequest) {
  const { phoneNumber } = await req.json();
  const result = User.safeParse({
    phoneNumber,
  });
  if (!result.success) {
    return NextResponse.json({ errors: result.error?.flatten().fieldErrors }, { status: 401 });
  }
  const user = await prisma.user.findUnique({
    where: {
      phoneNumber,
    },
  });
  if (user) {
    return NextResponse.json({ isExist: true, errors: {} }, { status: 200 });
  }
  return NextResponse.json({ errors: {} }, { status: 200 });
}
