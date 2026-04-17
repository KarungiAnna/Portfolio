export const dynamic = 'force-dynamic';
export const revalidate = 0;

import React from 'react';
import { NextResponse } from 'next/server';
import { renderToStream } from '@react-pdf/renderer';
import { CVPDF } from '@/components/CVPDF/CVPDF';
import { getAllExperiences } from '@/db/queries';

export async function GET() {
  try {
    const experiences = await getAllExperiences();
    
    // React-PDF renders to a Node.js Readable stream
    const nodeStream = await renderToStream(React.createElement(CVPDF, { experiences }) as any);
    
    // Polyfill conversion from Node Stream to Web ReadableStream for Next.js App Router
    const webStream = new ReadableStream({
      start(controller) {
        nodeStream.on('data', (chunk) => controller.enqueue(chunk));
        nodeStream.on('end', () => controller.close());
        nodeStream.on('error', (err) => controller.error(err));
      }
    });

    return new NextResponse(webStream, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="karungi-anna-cv.pdf"',
      },
    });
  } catch (error) {
    console.error('PDF Generation Error:', error);
    return new NextResponse('Internal Error dynamically generating PDF', { status: 500 });
  }
}
