"use client";
import {
  DropdownMenu,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { LanguagesIcon } from "lucide-react";
import { AFGFlag, USFlag } from "@/lib/flag-icons";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

type Locale = "en" | "fa" | "ps";
const locales: {
  code: Locale;
  label: string;
  Flag: React.ComponentType<{ className?: string }>;
}[] = [
  { code: "en", label: "English", Flag: USFlag },
  { code: "fa", label: "فارسی", Flag: AFGFlag },
  { code: "ps", label: "پښتو", Flag: AFGFlag },
];

export default function LocaleSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (code: Locale) => {
    if (code === locale) return;

    router.replace({ pathname }, { locale: code });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="ghost" size="icon-lg" aria-label="Change language">
            <LanguagesIcon />
          </Button>
        }
      />
      <DropdownMenuContent>
        <DropdownMenuRadioGroup
          value={locale}
          onValueChange={(value) => switchLocale(value as Locale)}
        >
          {locales.map((l) => (
            <DropdownMenuRadioItem key={l.code} value={l.code}>
              <l.Flag className="me-2 size-4 rounded-full" />
              {l.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
