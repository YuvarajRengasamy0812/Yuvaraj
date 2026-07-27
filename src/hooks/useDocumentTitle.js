import { useEffect } from "react";

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
    const onVisibilityChange = () => {
      document.title = document.visibilityState === "visible" ? title : "Come Back To Portfolio";
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, [title]);
}