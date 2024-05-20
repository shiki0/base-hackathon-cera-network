import { getFarcasterUserAddress } from '@coinbase/onchainkit/farcaster';
import { FrameRequest, getFrameHtmlResponse, getFrameMessage } from '@coinbase/onchainkit/frame';
import type { FrameTransactionResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
async function getResponse(req: NextRequest): Promise<NextResponse> {
  // Step 2. Build your Frame logic
  const userAddress = "";//await getFarcasterUserAddress(fid, options); 

  return new NextResponse(
    // Step 3. Use getFrameHtmlResponse to create a Frame response
    getFrameHtmlResponse({
      buttons: [
        {
          label: `CERE`,
        },
      ],
      image: `https://base-hackathon-cera-network.vercel.app/cerec.png`,
      postUrl: 'https://www.cere.network/',
    }),
  );
}
 
export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}
