'use client';

import styles from './PrintButton.module.css';

export default function PrintButton() {
  return (
    <button
      className={styles.btn}
      onClick={() => window.print()}
      aria-label="Print or save CV as PDF"
    >
      ⎙ Download PDF
    </button>
  );
}
