import { NextResponse } from 'next/server';

import transactions from '@/@config/services/transactions.json'

export async function GET() {
  return NextResponse.json(transactions, {
    headers: {
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=59',
    },
  });
}
