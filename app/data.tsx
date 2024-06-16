import { Ampersand, Github, Instagram, Linkedin, Twitter } from 'lucide-react';

export const links = [
  {
    name: 'Twitter',
    icon: <Twitter strokeWidth={1.2} className="h-8 w-8" />,
    href: 'https://x.com/',
  },
  {
    name: 'Instagram',
    icon: <Instagram strokeWidth={1.2} className="h-8 w-8" />,
    href: 'https://instagram.com/',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin strokeWidth={1.2} className="h-8 w-8" />,
    href: 'https://linkedin.com/',
  },
  {
    name: 'GitHub',
    icon: <Github strokeWidth={1.2} className="h-8 w-8" />,
    href: 'https://github.com/',
  },
  {
    name: 'Website',
    icon: <Ampersand strokeWidth={1.2} className="h-8 w-8" />,
    href: 'https://mitblr.club',
  },
];
