"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const buttonStyles = (
  variant: "primary" | "secondary" | "outline" | "ghost" = "primary",
  size: "sm" | "md" | "lg" = "md",
  className?: string
) =>
  cn(
    "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
    {
      "bg-primary text-primary-foreground hover:bg-primary/90": variant === "primary",
      "bg-secondary text-secondary-foreground hover:bg-secondary/80": variant === "secondary",
      "border border-foreground/20 hover:bg-foreground/5": variant === "outline",
      "hover:bg-foreground/5": variant === "ghost",
    },
    {
      "h-8 px-3 text-sm rounded-md": size === "sm",
      "h-10 px-4 text-base rounded-lg": size === "md",
      "h-12 px-6 text-lg rounded-lg": size === "lg",
    },
    className
  );

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild, children, ...props }, ref) => {
    if (asChild) {
      // When asChild is true, children must be a single <a> element
      const child = children as React.ReactElement;
      return (
        <span
          className={buttonStyles(variant, size, className)}
          onClick={props.onClick}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
        >
          {child}
        </span>
      );
    }
    return (
      <button
        ref={ref}
        className={buttonStyles(variant, size, className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonStyles };
