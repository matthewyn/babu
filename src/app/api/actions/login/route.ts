import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { phoneNumber, password } = await req.json();
  const user = await prisma.user.findUnique({
    where: {
      phoneNumber,
    },
  });
  if (!user) {
    return NextResponse.json({ isExist: false, errors: { phoneNumber: ["Nomor telfon tidak terdaftar"] } }, { status: 401 });
  }
  return NextResponse.json({ isExist: true, errors: {} }, { status: 200 });
}
