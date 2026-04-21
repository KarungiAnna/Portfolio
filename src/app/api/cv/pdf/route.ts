export const dynamic = 'force-dynamic';
export const revalidate = 0;

import React from 'react';
import { NextResponse } from 'next/server';
import { renderToStream } from '@react-pdf/renderer';
import { CVPDF } from '@/components/CVPDF/CVPDF';
import { getSummary, getAllExperiences, getAllEducation, getAllSkills, getAllStrengths, getAllCertifications, getAllReferees } from '@/db/queries';

export async function GET() {
  try {
    const [summary, experiences, education, skills, strengths, certifications, referees] = await Promise.all([
      getSummary(),
      getAllExperiences(),
      getAllEducation(),
      getAllSkills(),
      getAllStrengths(),
      getAllCertifications(),
      getAllReferees(),
    ]);

    const nodeStream = await renderToStream(
      React.createElement(CVPDF, {
        summary: summary?.content ?? null,
        experiences,
        education,
        skills,
        strengths,
        certifications,
        referees,
      }) as any
    );

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
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  } catch (error) {
    console.error('PDF Generation Error:', error);
    return new NextResponse('Internal Error dynamically generating PDF', { status: 500 });
  }
}
