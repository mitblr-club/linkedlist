import { Button } from "@/components/ui/button";
import { siteConfig } from "@/site.config";
import {Twitter, Instagram, Linkedin, Github, Ampersand} from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    name: 'Twitter',
    icon: <Twitter strokeWidth={1.2} className='h-8 w-8' />,
    href: 'https://twitter.com/codex_mitblr',
  },
  {
    name: 'Instagram',
    icon: <Instagram strokeWidth={1.2} className='h-8 w-8' />,
    href: 'https://instagram.com/codex.mitblr',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin strokeWidth={1.2} className='h-8 w-8' />,
    href: 'https://linkedin.com/company/codex-mitblr',
  },
  {
    name: 'GitHub',
    icon: <Github strokeWidth={1.2} className='h-8 w-8' />,
    href: 'https://github.com/codex-mitblr',
  },
  {
    name: 'Website',
    icon: <Ampersand strokeWidth={1.2} className='h-8 w-8' />,
    href: 'https://codex.mitblr.club',
  },
]

export default function Home() {
  return <main className="flex flex-col gap-4 w-full items-center justify-center py-12">
    <div className="p-4">
      <Image alt='Logo' src='/brand_enlarged.png' width={120} height={120} priority className="rounded-full shadow-md"/>
    </div>
    <div className="flex flex-col w-full items-center text-center justify-center gap-2 p-4">
      <h2 className="text-3xl font-bold font-mono">{siteConfig.title}</h2>
      <p className="text-xl font-mono">{siteConfig.description}</p>
    </div>
    <div className="flex flex-col w-full items-center justify-center gap-4 p-4">
      {links.map((item, index) => (
          <Button asChild key={index} className="px-8 md:px-12 py-4 text-2xl font-mono">
            <Link href={item.href} target="_blank" className="flex flex-row justify-between min-w-full min-h-14 lg:min-w-[30rem] lg:min-h-[4rem] bg-transparent border-2 border-white rounded-none hover:bg-white hover:text-green-600">
              {item.icon} {item.name}
            </Link>
          </Button>
      ))}
    </div>
  </main>
}