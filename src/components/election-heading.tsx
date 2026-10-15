"use client";

import { useEffect, useState } from "react";
import { getElectionHeading } from "@/lib/content/election";

const FALLBACK = "City Hall special voting starts tomorrow. Advance polls are Saturday.";

export function ElectionHeading() {
  const [heading, setHeading] = useState(FALLBACK);

  useEffect(() => {
    setHeading(getElectionHeading());
  }, []);

  return <h2 id="election-season-heading">{heading}</h2>;
}
