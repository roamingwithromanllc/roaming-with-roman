"use client";

import type { AnchorHTMLAttributes } from "react";
import { trackBookNowClick } from "@/lib/analytics";

type Props = AnchorHTMLAttributes<HTMLAnchorElement>;

export default function BookNowLink({ onClick, ...props }: Props) {
  return (
    <a
      {...props}
      onClick={(e) => {
        trackBookNowClick();
        onClick?.(e);
      }}
    />
  );
}
