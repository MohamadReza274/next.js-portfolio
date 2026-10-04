"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function TypedRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const typed = useTranslations("hero");

  const ROLES = [
    typed("typedRole.0"),
    typed("typedRole.1"),
    typed("typedRole.2"),
  ];

  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = deleting ? 45 : 85;
    const pause = 1400;

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
      return;
    }

    const t = setTimeout(() => {
      setText((prev) =>
        deleting
          ? current.slice(0, prev.length - 1)
          : current.slice(0, prev.length + 1),
      );
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, roleIndex]);

  return (
    <span className="font-mono text-mint-400">
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-mint-400 ms-1 align-middle animate-blink" />
    </span>
  );
}
