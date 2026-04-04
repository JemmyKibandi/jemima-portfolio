import { fetchRepo } from "@/lib/github";
import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const repo = await fetchRepo(slug);
  if (!repo) return NextResponse.json(null, { status: 404 });
  return NextResponse.json(repo);
}
