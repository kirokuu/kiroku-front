// apps/web/src/shared/ui/TermsNotice.tsx
import Link from "next/link";

export function TermsNotice() {
  return (
    <>
      <p className="text-xs text-slate-500 text-center mt-4 font-medium leading-relaxed">
        계속 진행하면
        <Link
          href="/terms"
          className="inline-block px-1 underline underline-offset-2 hover:text-violet-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-400 transition-colors"
        >
          이용약관
        </Link>
        및
        <Link
          href="/privacy"
          className="inline-block px-1 underline underline-offset-2 hover:text-violet-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-400 transition-colors"
        >
          개인정보처리방침
        </Link>
        을 이해하고 동의하는 것으로 간주됩니다.
      </p>

      <div className="text-xs text-slate-400 text-left mt-6">
        © 2025 Kiroku Team
      </div>
    </>
  );
}
