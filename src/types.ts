import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type Education = {
	degree: string;
	school: string;
	location: string;
};

export type Experience = {
	title: string;
	company: string;
	dates: string;
	location: string;
	items: string[];
	href?: string;
};

export type Link = {
	label: string;
	href: string;
	icon?: IconDefinition;
};

export type Sample = {
	title: string;
	source: string;
	interactive?: string;
	image?: string;
};

export type TextCategory = Record<string, string[]>;
