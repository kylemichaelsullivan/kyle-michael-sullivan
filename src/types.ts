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
	icon?: 'github' | 'linkedin';
};

export type Sample = {
	title: string;
	source: string;
	interactive?: string;
	imagePng?: string;
	imageWebp?: string;
};

export type TextCategory = Record<string, string[]>;
