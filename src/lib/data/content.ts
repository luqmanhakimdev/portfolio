import type { NavItem, PetProject, Profile, Service, Skill, TimelineItem } from '$lib/types';

export const navItems: NavItem[] = [
	{ label: 'About', href: '/' },
	{ label: 'Resume', href: '/resume' },
	{ label: 'Blog', href: '/blog' }
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

export const experience: TimelineItem[] = [
	{
		id: 'aeon-bank',
		title: 'Site Reliability Engineer',
		company: 'AEON Bank (M) Berhad',
		period: 'May 2025 — Present',
		highlights: [
			'Automated CIS Benchmark compliance across 30+ servers with Ansible.',
			'Designed mTLS for mobile-to-backend traffic on AWS to reduce MITM risk.',
			'Managed AWS infrastructure with modular Terraform — less manual provisioning.',
			'Led monthly security patching and GitHub / SonarQube upgrades for DevSecOps.',
			'Executed DR failover drills, including EKS scale-out and database deploy under RTO pressure.',
			'Owned vendor OS patching via GitHub Actions with automated backups for data integrity.'
		]
	},
	{
		id: 'servedeck',
		title: 'Site Reliability Engineer',
		company: 'ServeDeck Innovation Sdn Bhd',
		period: 'May 2022 — May 2025',
		highlights: [
			'Migrated production workloads to AWS EKS for higher availability and auto-recovery.',
			'Built and maintained Terraform stacks to provision and manage cloud infrastructure.',
			'Cut testing-environment cloud cost by ~20% with workload schedulers.',
			'Set up Grafana–Loki–Promtail logging to speed up bug investigation.',
			'Built early anomaly detection with AWS Lambda and Python for faster on-call response.',
			'Maintained CI/CD for Dev and QA to shorten sprint delivery cycles.',
			'Planned and ran AZ failover DR aligned to company RTO, RPO, and BCP.',
			'Integrated Datadog APM for code-level observability and faster RCA.'
		]
	},
	{
		id: 'mandrill',
		title: 'Software Developer',
		company: 'Mandrill Tech Sdn Bhd',
		period: 'Aug 2021 — Apr 2022',
		highlights: [
			'Built SQL monitoring to track successful and failed CRM data migrations.',
			'Developed an ANPR web app with Angular and Java Spring Boot.'
		]
	}
];

export const skills: Skill[] = [
	{ id: 'aws', name: 'AWS' },
	{ id: 'terraform', name: 'Terraform' },
	{ id: 'kubernetes', name: 'Kubernetes' },
	{ id: 'docker', name: 'Docker' },
	{ id: 'ansible', name: 'Ansible' },
	{ id: 'github-actions', name: 'GitHub Actions' },
	{ id: 'jenkins', name: 'Jenkins' },
	{ id: 'datadog', name: 'Datadog' },
	{ id: 'linux', name: 'Linux' },
	{ id: 'python', name: 'Python' },
	{ id: 'bash', name: 'Bash' },
	{ id: 'golang', name: 'Golang' },
	{ id: 'spring-boot', name: 'Java Spring Boot' },
	{ id: 'angular', name: 'Angular' },
	{ id: 'laravel', name: 'Laravel' }
];
