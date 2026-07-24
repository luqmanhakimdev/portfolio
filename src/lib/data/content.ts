import type { NavItem, PetProject, Profile, Service } from '$lib/types';

export const navItems: NavItem[] = [
	{ label: 'About', href: '/' },
	{ label: 'Articles', href: '/articles' }
];

export const profile: Profile = {
	name: 'Luqman Hakim',
	role: 'SRE/DevOps',
	avatar: '/images/avatar.gif',
	about: [
		"I'm an SRE/DevOps engineer focused on building reliable, secure, and observable platforms on AWS. I design infrastructure as code, run workloads on Kubernetes, and automate the delivery pipelines that keep teams shipping with confidence.",
		'From Terraform modules and EKS cluster architecture to Datadog APM, CIS-hardened hosts, and cross-AZ disaster recovery — I care about systems that stay available under pressure and recover within clear RTO/RPO targets.',
		'I love code — for fun, sometimes serious.'
	],
	links: [
		{
			label: 'LinkedIn',
			href: 'https://my.linkedin.com/in/luqman-hakim-0b71b0201',
			icon: 'linkedin'
		},
		{
			label: 'GitHub',
			href: 'https://github.com/luqmanhakimdev',
			icon: 'github'
		}
	]
};

export const services: Service[] = [
	{
		id: 'cloud-iac',
		title: 'Cloud & IaC',
		description:
			'AWS platforms with modular Terraform — EC2, S3, EFS, IAM, RDS, Lambda, and CloudWatch wired for scale and least privilege.',
		icon: 'cloud'
	},
	{
		id: 'containers',
		title: 'Containers & K8s',
		description:
			'Amazon EKS architecture, node group scaling, Docker packaging, and high-availability cluster design.',
		icon: 'container'
	},
	{
		id: 'automation',
		title: 'Automation',
		description:
			'Ansible for CIS compliance and OS patching, plus CI/CD with GitHub Actions and Jenkins.',
		icon: 'automation'
	},
	{
		id: 'observability',
		title: 'Observability',
		description:
			'Datadog APM & RCA, Grafana–Loki–Promtail logging, CloudWatch metrics, and early anomaly detection.',
		icon: 'observability'
	},
	{
		id: 'security',
		title: 'Security & Networking',
		description:
			'WAF hardening and CVE patching to keep platforms protected against known threats.',
		icon: 'security'
	},
	{
		id: 'dr-bcp',
		title: 'DR & Continuity',
		description:
			'Cross-AZ failover, RTO/RPO-aligned BCP, and automated backups with AWS Backup, MySQL dump, and MariaBackup.',
		icon: 'recovery'
	}
];

export const petProjects: PetProject[] = [
	{
		id: 'allforummah',
		name: 'All For Ummah',
		url: 'https://allforummah.com',
		description:
			'Official site for a Malaysian nasyid group — songs, performances, and the Sebuah Perjalanan journey.'
	}
];
