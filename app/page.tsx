import { siteConfig } from '@/site.config';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { links } from './data';

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-center gap-4 py-12">
      <div className="p-4">
        <Image
          alt="Logo"
          src="/logo.png"
          width={120}
          height={120}
          priority
          className="rounded-full shadow-md"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-2 p-4 text-center">
        <h2 className="font-mono text-2xl font-bold md:text-3xl">
          {siteConfig.title}
        </h2>
        <p className="font-mono text-lg md:text-xl">{siteConfig.description}</p>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4 p-4">
        {links.map((item, index) => (
          <Button
            asChild
            key={index}
            className="px-8 py-4 font-mono text-xl md:px-12 md:text-2xl"
          >
            <Link
              href={item.href}
              target="_blank"
              className="flex min-h-14 min-w-full flex-row justify-between rounded-none border-2 border-white bg-transparent hover:bg-white hover:text-green-600 lg:min-h-[4rem] lg:min-w-[30rem]"
            >
              {item.icon} {item.name}
            </Link>
          </Button>
        ))}
      </div>
    </main>
  );
}
