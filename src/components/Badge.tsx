import { HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center rounded-full text-sm px-4 transition-all font-medium",
  {
    variants: {
      variant: {
        default: "bg-blue-500 text-white hover:bg-blue-400",
        outline:
          "bg-transparent hover:text-white text-blue-500 border border-blue-500 hover:border-blue-400 hover:bg-blue-400",
      },
      size: {
        default: "h-6 py-2",
        sm: "h-4 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof buttonVariants> {}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, size, variant, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

export { Badge, buttonVariants };
