import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { twMerge } from "tailwind-merge";

/**
 * 공통 Button 컴포넌트
 *
 * - variant, size 등 다양한 스타일 지원
 * - asChild로 Slot(링크 등)으로도 사용 가능
 * - 접근성, 포커스, 비활성화 등 기본 제공
 *
 * @example
 * <Button>기본 버튼</Button>
 * <Button variant="outline" size="sm">작은 아웃라인 버튼</Button>
 * <Button asChild><a href="/about">링크 버튼</a></Button>
 *
 * @param variant - "default" | "destructive" | "outline" | "ghost" | "link"
 * @param size - "default" | "sm" | "lg"
 * @param asChild - true면 Slot(예: a, Link 등)으로 감싸서 사용
 * @param className - Tailwind 등 추가 스타일
 * @param ...props - button의 모든 표준 속성 지원
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-brand-primary text-white hover:opacity-90",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline: "border border-slate-300 hover:bg-slate-100",
        ghost: "hover:bg-slate-100",
        link: "underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={twMerge(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
