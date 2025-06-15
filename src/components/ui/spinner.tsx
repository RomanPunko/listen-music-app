"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

const spinnerClasses = "w-16 h-16 border-4 border-t-4 border-gray-200 border-t-gray-600 rounded-full animate-spin";

const LoadingSpinner = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => (
  <div ref={ref} className={cn(spinnerClasses, props.className)} {...props} />
));
LoadingSpinner.displayName = "LoadingSpinner";
export { LoadingSpinner };
