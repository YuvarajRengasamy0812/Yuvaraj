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