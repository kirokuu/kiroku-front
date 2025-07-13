import { twMerge } from "tailwind-merge";
/**
 * 구분선(Separator) 컴포넌트
 *
 * - 가로/세로 구분선, 텍스트("또는" 등) 포함 가능
 * - 소셜 로그인, 폼, 섹션 등 다양한 곳에서 사용
 *
 * @example
 * <Separator />
 * <Separator>또는</Separator>
 * <Separator orientation="vertical" className="h-8" />
 *
 * @param orientation - "horizontal"(기본) 또는 "vertical"
 * @param className - Tailwind 등 추가 스타일
 * @param children - 구분선 중앙에 표시할 텍스트/컴포넌트
 */

interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
  children?: React.ReactNode;
}

export const Separator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  className = "",
  children,
}) => {
  if (!children) {
    return (
      <div
        className={twMerge(
          orientation === "horizontal"
            ? "w-full h-px bg-gray-200"
            : "h-full w-px bg-gray-200",
          className
        )}
        role="separator"
        aria-orientation={orientation}
      />
    );
  }
  return (
    <div
      className={twMerge(
        "flex items-center w-full",
        orientation === "vertical" && "flex-col h-full",
        className
      )}
      role="separator"
      aria-orientation={orientation}
    >
      <div
        className={twMerge(
          orientation === "horizontal"
            ? "flex-grow h-px bg-gray-200"
            : "w-px flex-grow bg-gray-200"
        )}
      />
      <span className="mx-3 text-sm text-gray-400">{children}</span>
      <div
        className={twMerge(
          orientation === "horizontal"
            ? "flex-grow h-px bg-gray-200"
            : "w-px flex-grow bg-gray-200"
        )}
      />
    </div>
  );
};
