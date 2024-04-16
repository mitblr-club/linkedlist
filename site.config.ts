import { Ampersand, Github, Instagram, Linkedin, X } from "lucide-react";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	title: 'CodeX\'s LinkedList',
	description: 'All of CodeX\'s links, in one place',
	links: [
		{
			name: 'Twitter',
			icon: X,
			href: 'https://twitter.com/codex_mitblr',
		},
		{
			name: 'Instagram',
			icon: Instagram,
			href: 'https://instagram.com/codex.mitblr',
		},
		{
			name: 'LinkedIn',
			icon: Linkedin,
			href: 'https://linkedin.com/company/codex-mitblr',
		},
		{
			name: 'GitHub',
			icon: Github,
			href: 'https://github.com/codex-mitblr',
		},
		{
			name: 'Website',
			icon: Ampersand,
			href: 'https://codex.mitblr.club',
		},
	],
}