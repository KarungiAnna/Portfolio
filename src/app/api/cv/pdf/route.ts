import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'cv.pdf');
    const file = await readFile(filePath);
    return new NextResponse(file, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="karungi-anna-cv.pdf"',
      },
    });
  } catch (error) {
    return new NextResponse('PDF Not Found', { status: 404 });
  }
}
