import React from "react";
import { twMerge } from "tailwind-merge";
/**
 * 공통 Input 컴포넌트
 *
 * - label, error, id 등 접근성/에러처리 지원
 * - React Hook Form 등과 연동에 최적화
 * - className으로 스타일 확장 가능
 *
 * @example
 * <Input id="email" label="이메일" placeholder="이메일" error={errors.email?.message} {...register("email")} />
 *
 * @param label - 시각적/스크린리더용 라벨(기본은 sr-only)
 * @param id - input과 label 연결, aria-describedby에도 사용
 * @param error - 에러 메시지(있으면 aria-invalid, 에러 텍스트 표시)
 * @param className - Tailwind 등 추가 스타일
 * @param ...props - input의 모든 표준 속성 지원
 */
/**
 * 공통 Input 컴포넌트
 *
 * @see InputProps
 */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  error?: string;
}
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", label, id, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label htmlFor={id} className="sr-only">
            {label}
          </label>
        )}
        <input
          id={id}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={twMerge(
            "text-black w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          {...props}
          ref={ref}
        />
        {error && (
          <p id={`${id}-error`} className="text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
