import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "mt-2 flex min-h-32 w-full resize-none rounded-lg border border-ink-border bg-ink-800 px-4 py-3 text-paper-100 outline-none transition-colors placeholder:text-paper-500 focus-visible:border-mint-500/50 focus-visible:ring-2 focus-visible:ring-mint-500/20 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
