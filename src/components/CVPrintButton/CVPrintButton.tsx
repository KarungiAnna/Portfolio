'use client';

export default function CVPrintButton({ className }: { className: string }) {
  return (
    <button 
      onClick={() => window.print()} 
      className={className}
      aria-label="Print or Save CV as PDF"
    >
      ⎙ Print / Save PDF
    </button>
  );
}
