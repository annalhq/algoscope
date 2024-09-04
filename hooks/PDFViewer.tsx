"use client";
import React, { useRef } from "react";
import { usePDFJS } from "@/hooks/usePDFJS"; // Adjust the import path as necessary

const PDFViewer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  usePDFJS(async (pdfjs) => {
    try {
      const loadingTask = pdfjs.getDocument("https://jeffe.cs.illinois.edu/teaching/algorithms/book/08-sssp.pdf");
      const pdf = await loadingTask.promise;
      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 1.5 });

      const canvas = canvasRef.current;
      if (canvas) {
        const context = canvas.getContext("2d");
        if (context) {  // Check if context is not null
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          const renderContext = {
            canvasContext: context,
            viewport: viewport,
          };
          page.render(renderContext);
        }
      }
    } catch (error) {
      console.error("Failed to render PDF page:", error);
    }
  });

  return <canvas ref={canvasRef} />;
};

export default PDFViewer;
