import { Input as InputPrimitive } from "@base-ui/react/input";
import { cn } from "@/lib/utils";

function Input({ className, ...props }: InputPrimitive.Props) {
  return (
    <InputPrimitive
      data-slot="input"
      className={cn(
        "mt-2 flex h-12 w-full rounded-lg border border-ink-border bg-ink-800 px-4 py-3 text-paper-100 outline-none transition-colors placeholder:text-paper-500 focus-visible:border-mint-500/50 focus-visible:ring-2 focus-visible:ring-mint-500/20 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
