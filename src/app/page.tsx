"use client";

import { useState } from "react";
import { Startup } from "./_interfaces/startup";
import { Desktop } from "./_interfaces/desktop";

export default function Home() {
  const [startupActive, setStartupActive] = useState(true);
  return (
    <div className="w-full h-full">{startupActive ? <Startup open={startupActive} onClose={() => setStartupActive(false)} /> : <Desktop />}</div>

  );
}
