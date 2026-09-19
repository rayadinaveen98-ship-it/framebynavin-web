import { NextResponse } from "next/server";

const collaborationTypes = new Set([
  "Instagram collaboration",
  "YouTube integration",
  "Film or entertainment promotion",
  "Brand partnership",
  "Creative project",
  "Other",
]);

const budgetRanges = new Set([
  "Under ₹10K",
  "₹10K–25K",
  "₹25K–50K",
  "₹50K+",
  "Let's discuss",
]);

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 20_000) {
    return NextResponse.json({ ok: false, message: "The brief is too large." }, { status: 413 });
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid project brief." }, { status: 400 });
  }

  // Honeypot: legitimate visitors never fill this field.
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const brief = {
    name: clean(body.name, 80),
    email: clean(body.email, 160).toLowerCase(),
    company: clean(body.company, 140),
    type: clean(body.type, 80),
    budget: clean(body.budget, 40),
    timeline: clean(body.timeline, 100),
    deliverables: clean(body.deliverables, 300),
    message: clean(body.message, 4000),
  };

  const invalid =
    brief.name.length < 2 ||
    !validEmail(brief.email) ||
    brief.company.length < 2 ||
    !collaborationTypes.has(brief.type) ||
    !budgetRanges.has(brief.budget) ||
    brief.timeline.length < 2 ||
    brief.deliverables.length < 3 ||
    brief.message.length < 20;

  if (invalid) {
    return NextResponse.json(
      { ok: false, message: "Please complete every field with valid project details." },
      { status: 400 },
    );
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { ok: false, message: "Project intake delivery is not configured yet." },
      { status: 503 },
    );
  }

  const token = process.env.CONTACT_WEBHOOK_TOKEN;
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "User-Agent": "FrameByNavin-Web/1.0",
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({
        source: "framebynavin-web",
        submittedAt: new Date().toISOString(),
        ...brief,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Contact delivery failed", response.status);
      return NextResponse.json(
        { ok: false, message: "The brief could not be delivered right now. Please try again." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Contact delivery error", error instanceof Error ? error.message : "unknown error");
    return NextResponse.json(
      { ok: false, message: "The brief could not be delivered right now. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
