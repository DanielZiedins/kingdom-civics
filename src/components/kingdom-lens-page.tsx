import { Suspense } from "react";
import { KingdomLensChat } from "@/components/kingdom-lens-chat";

function LensWithQuery({ compact, initialQuestion }: { compact?: boolean; initialQuestion?: string }) {
  return <KingdomLensChat compact={compact} initialQuestion={initialQuestion} />;
}

export function KingdomLensPage({ searchParams }: { searchParams?: { q?: string } }) {
  return (
    <Suspense fallback={<KingdomLensChat />}>
      <LensWithQuery initialQuestion={searchParams?.q} />
    </Suspense>
  );
}
