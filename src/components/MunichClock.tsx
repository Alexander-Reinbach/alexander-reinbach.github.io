"use client";

import { useEffect, useState } from "react";

const format = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Berlin",
  hour: "2-digit",
  minute: "2-digit",
});

// Local time in Munich. Renders empty on the server so the static export
// does not bake in the build time.
export function MunichClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => setTime(format.format(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);

  return <span suppressHydrationWarning>Munich {time}</span>;
}
