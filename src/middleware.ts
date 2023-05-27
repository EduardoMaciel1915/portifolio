import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hasLanguage = request.cookies.has('language');

  const acceptLanguages = request.headers.get('Accept-Language');

  const locationActual = acceptLanguages?.split(',')?.[0];

  const response = NextResponse.next();

  if (!hasLanguage) {
    switch (locationActual) {
      case 'en-US':
        response.cookies.set('language', 'en-US');
        break;
      case 'pt-BR':
        response.cookies.set('language', 'pt-BR');
        break;
      default:
        response.cookies.set('language', 'pt-BR');
        break;
    }
  }

  return response;
}
