import { getFarcasterUserAddress } from '@coinbase/onchainkit/farcaster';
import { FrameRequest, getFrameHtmlResponse, getFrameMessage } from '@coinbase/onchainkit/frame';
import type { FrameTransactionResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
async function getResponse(req: NextRequest): Promise<NextResponse> {
  // Step 2. Build your Frame logic
  const userAddress = await getFarcasterUserAddress(fid, options); 

  return new NextResponse(
    // Step 3. Use getFrameHtmlResponse to create a Frame response
    getFrameHtmlResponse({
      image: `//s2.ezgif.com/tmp/ezgif-2-a8017bfa27.webp`,
      postUrl: '#',
      input: {
        text: 'My address is '+userAddress,
      },
    }),
  );
}
 
export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}
