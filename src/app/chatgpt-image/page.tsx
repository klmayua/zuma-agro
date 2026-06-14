"use client";

import Link from "next/link";

export default function ChatGPTImageViewer() {
  return (
    <div className="min-h-screen bg-background p-6 md:p-margin-desktop flex flex-col items-center">
      {/* Breadcrumbs / Header */}
      <div className="w-full max-w-container-max flex flex-col gap-2 mb-6 border-b border-outline-variant/60 pb-4">
        <div className="flex gap-2 text-[10px] uppercase tracking-wider text-secondary font-bold">
          <Link href="/">Home</Link>
          <span>/</span>
          <span className="text-on-surface-variant">Mock Flow Diagram</span>
        </div>
        <h1 className="font-serif text-2xl font-bold text-primary">
          ChatGPT Generated Flow Process
        </h1>
        <p className="text-xs text-on-surface-variant">
          Authoritative visual layout representation from Google Stitch.
        </p>
      </div>

      {/* Image Container */}
      <div className="w-full max-w-4xl bg-white border border-outline-variant rounded-lg p-6 shadow-sm flex justify-center items-center">
        <img
          src="/1834737764086904042.png"
          alt="ChatGPT Flow Process"
          className="max-w-full h-auto rounded-md border border-outline-variant/40 shadow-sm editorial-img"
        />
      </div>
    </div>
  );
}
