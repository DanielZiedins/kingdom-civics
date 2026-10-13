"use client";

import { useEffect, useState } from "react";
import { getElectionHeading } from "@/lib/content/election";

const FALLBACK = "Hamilton’s last advance weekend is October 17–18. Bring ID.";

export function ElectionHeading() {
  const [heading, setHeading] = useState(FALLBACK);

  useEffect(() => {
    setHeading(getElectionHeading());
  }, []);

  return <h2 id="election-season-heading">{heading}</h2>;
}
