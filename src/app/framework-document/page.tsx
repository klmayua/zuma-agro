"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FileText, Download, ArrowLeft } from "lucide-react";

export default function FrameworkDocumentViewer() {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/framework.md")
      .then((res) => res.text())
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load document:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#f2f4f0] p-4 md:p-8 flex flex-col items-center">
      {/* Document Control Header */}
      <div className="w-full max-w-4xl bg-white border border-outline-variant rounded-t-lg p-6 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-primary/10 rounded-lg text-primary">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-serif text-lg font-bold text-primary">
              Agro-Industrial Transformation Framework
            </h1>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold">
              Zuma Agro-Allied • Controlled Document v1.0
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <Link
            href="/"
            className="flex-1 md:flex-none flex items-center justify-center gap-1.5 border border-outline-variant px-4 py-2 rounded text-xs font-semibold hover:bg-[#f8faf6] text-on-surface transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </Link>
          <a
            href="/framework.md"
            download="Zuma_Agro_Allied_Framework.md"
            className="flex-1 md:flex-none flex items-center justify-center gap-1.5 bg-primary text-white px-4 py-2 rounded text-xs font-bold hover:bg-secondary transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            Download
          </a>
        </div>
      </div>

      {/* Document Body Sheet */}
      <div className="w-full max-w-4xl bg-white border-x border-b border-outline-variant rounded-b-lg shadow-sm p-6 md:p-12 min-h-[70vh]">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 gap-3 text-on-surface-variant">
            <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            <span className="text-xs font-semibold uppercase tracking-wider">Loading Strategy Blueprint...</span>
          </div>
        ) : (
          <article className="prose prose-sm prose-green max-w-none text-xs leading-relaxed text-on-surface whitespace-pre-wrap font-sans">
            {content}
          </article>
        )}
      </div>
    </div>
  );
}
