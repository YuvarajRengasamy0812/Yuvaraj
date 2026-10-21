import { useEffect, useState } from "react";

export function useDateTime() {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const update = () => {
      setDateTime(
        new Intl.DateTimeFormat("en-IN", {
          weekday: "short",
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }).format(new Date())
      );
    };

    update();
    const interval = window.setInterval(update, 1000 * 30);
    return () => window.clearInterval(interval);
  }, []);

  return dateTime;
}

const readClock = (now) => {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-IN", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
      .formatToParts(now)
      .map(({ type, value }) => [type, value])
  );

  return {
    iso: now.toISOString(),
    hours: parts.hour,
    minutes: parts.minute,
    period: (parts.dayPeriod || "").toUpperCase(),
    weekday: parts.weekday,
    day: parts.day,
    month: parts.month,
    full: new Intl.DateTimeFormat("en-IN", { dateStyle: "full", timeStyle: "short" }).format(now),
  };
};

// Split-out clock for the header chip; re-renders only when the minute changes.
export function useClock() {
  const [clock, setClock] = useState(null);

  useEffect(() => {
    let timeout;
    const tick = () => {
      const now = new Date();
      setClock(readClock(now));
      timeout = window.setTimeout(tick, 60000 - (now.getSeconds() * 1000 + now.getMilliseconds()) + 50);
    };

    tick();
    return () => window.clearTimeout(timeout);
  }, []);

  return clock;
}
