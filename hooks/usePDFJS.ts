"use client";
import { useEffect, useState } from "react";
import * as PDFJS from "pdfjs-dist/types/src/pdf";

export const usePDFJS = (
  onLoad: (pdfjs: typeof PDFJS) => Promise<void>,
  deps: (string | number | boolean | undefined | null)[] = []
) => {
  const [pdfjs, setPDFJS] = useState<typeof PDFJS | (() => typeof PDFJS) | null>(null);

  // load the library once on mount (the webpack import automatically sets-up the worker)
  useEffect(() => {
    import("pdfjs-dist/webpack")
      .then(setPDFJS)
      .catch((error) => console.error("Failed to load PDF.js library:", error));
  }, []);

  // execute the callback function whenever PDFJS loads (or a custom dependency-array updates)
  useEffect(() => {
    if (!pdfjs) return;
    (async () => {
      try {
        await onLoad(typeof pdfjs === 'function' ? pdfjs() : pdfjs);
      } catch (error) {
        console.error("Failed to load PDF document:", error);
      }
    })();
  }, [pdfjs, ...deps]);
};