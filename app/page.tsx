import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Magic',
      action: 'post',
      target: `${NEXT_PUBLIC_URL}/api/address`,
    },
    {
      action: 'link',
      label: 'Go Mint your access!',
      target: 'https://testnet.holograph.xyz/open-edition/joey-collins-requiem-by-joey-collins-uk',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/cere.png`,
    //src: `//s2.ezgif.com/tmp/ezgif-2-a8017bfa27.webp`,
    aspectRatio: '1:1',
  },
  input: {
    text: 'Tell me a story',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'cere.network',
  description: 'LFG',
  openGraph: {
    title: 'cere.network',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/park-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>www.cere.network</h1>
    </>
  );
}
