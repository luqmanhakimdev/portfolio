export type NavItem = {
	label: string;
	href: string;
};

export type ServiceIcon = 'cloud' | 'container' | 'automation' | 'observability' | 'security' | 'recovery';

export type Service = {
	id: string;
	title: string;
	description: string;
	icon: ServiceIcon;
};

export type TimelineItem = {
	id: string;
	title: string;
	company?: string;
	period: string;
	description?: string;
	highlights?: string[];
};

export type Skill = {
	id: string;
	name: string;
};

export type PetProject = {
	id: string;
	name: string;
	url: string;
	description: string;
};

export type Profile = {
	name: string;
	role: string;
	avatar: string;
	about: string[];
	links: { label: string; href: string; icon: 'github' | 'linkedin' }[];
};
