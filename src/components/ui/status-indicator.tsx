import { cn } from "@/lib/utils";

interface StatusIndicatorProps {
  status: "success" | "warning" | "danger" | "neutral";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function StatusIndicator({ status, size = "md", className }: StatusIndicatorProps) {
  const sizeClasses = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4"
  };

  const statusClasses = {
    success: "bg-success",
    warning: "bg-warning",
    danger: "bg-destructive",
    neutral: "bg-muted-foreground"
  };

  return (
    <div
      className={cn(
        "rounded-full animate-pulse",
        sizeClasses[size],
        statusClasses[status],
        className
      )}
    />
  );
}