import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, date, guests, notes } = body;

    if (!name || !email || !phone || !date) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: wire up email delivery (Resend, SendGrid, etc.)
    console.log("Catering request received:", { name, email, phone, date, guests, notes });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
