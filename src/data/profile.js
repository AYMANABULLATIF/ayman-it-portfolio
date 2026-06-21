export const personal = {
  name: 'Ayman Abdullatif',
  location: 'Chiba, Japan',
  email: 'it.eng.ayman@gmail.com',
  phone: '+81 70-2272-4707',
  linkedin:
    'https://www.linkedin.com/in/ayman-abdullatif-271ba7309?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  github: 'https://github.com/AYMANABULLATIF',
  certificate:
    'https://drive.google.com/file/d/1_a1C9IxYbk2Amu5E5Vz9eMps4CQeexGd/view',
  resumePath: '/resume-ayman-abdullatif.pdf',
};

export const copy = {
  en: {
    nav: ['About', 'Projects', 'Skills', 'Experience', 'Contact'],
    heroTitle: 'Entry-Level IT Support / Helpdesk Candidate in Japan',
    heroTagline:
      'IT Engineering graduate in Chiba building practical ticket triage, knowledge base, user support, asset, incident, and audit-log tools for bilingual support environments.',
    heroBullets: [
      'Based in Japan',
      'English fluent',
      'Japanese daily conversation',
      'Helpdesk and desktop support focused',
      'Windows/Linux troubleshooting foundation',
    ],
    viewProjects: 'View Projects',
    viewGithub: 'View GitHub',
    contactMe: 'Contact Me',
    downloadResume: 'Download Resume',
    aboutTitle: 'About',
    aboutSubtitle: '自己紹介',
    about:
      'I am an Information Technology Engineering graduate based in Chiba, Japan. I have experience in IT support, Windows/Linux troubleshooting, system monitoring, databases, and structured technical work environments. I have also worked in Japanese industrial and production workplaces, which helped me build strong habits in safety, accuracy, teamwork, reporting, and following procedures. I am now focused on transitioning into IT Support, Helpdesk, Desktop Support, or Junior IT Operations roles in Japan.',
    projectsTitle: 'Featured Projects',
    projectsSubtitle: '実務に近いITサポートプロジェクト',
    whyTitle: 'Why These Projects Matter',
    whySubtitle: 'ヘルプデスク実務への理解',
    skillsTitle: 'Skills',
    skillsSubtitle: 'ITサポートに必要な基礎力',
    experienceTitle: 'Experience',
    experienceSubtitle: '技術業務と現場経験',
    educationTitle: 'Education',
    educationSubtitle: '学歴',
    certificationsTitle: 'Certifications',
    certificationsSubtitle: '安全教育・資格',
    contactTitle: 'Contact',
    contactSubtitle: '連絡先',
    liveDemo: 'Live Demo',
    sourceCode: 'GitHub',
    technologies: 'Technologies',
    openTo: 'Open to',
    footer:
      'Built for IT Support, Helpdesk, Desktop Support, and Junior IT Operations applications in Japan.',
  },
  ja: {
    nav: ['概要', 'プロジェクト', 'スキル', '職務経験', '連絡先'],
    heroTitle: '日本でITサポート / ヘルプデスク職を目指しています',
    heroTagline:
      'IT Engineering卒業後、バイリンガル環境向けの実践的なヘルプデスク・IT運用ツールを制作しています。',
    heroBullets: [
      '日本在住',
      '英語: 流暢',
      '日本語: 日常会話',
      'ITサポート / ヘルプデスク志望',
      '現場での技術経験',
    ],
    viewProjects: 'プロジェクトを見る',
    viewGithub: 'GitHubを見る',
    contactMe: '連絡する',
    downloadResume: '履歴書PDF',
    aboutTitle: 'About',
    aboutSubtitle: '自己紹介',
    about:
      '千葉県在住のInformation Technology Engineering卒業生です。ITサポート、Windows/Linuxトラブルシューティング、システム監視、データベース、手順を重視する技術業務の経験があります。日本の産業・生産現場でも働き、安全、正確さ、チームワーク、報告、手順遵守の習慣を身につけました。現在は日本でITサポート、ヘルプデスク、デスクトップサポート、Junior IT Operations職への転職を目指しています。',
    projectsTitle: 'Featured Projects',
    projectsSubtitle: '実務に近いITサポートプロジェクト',
    whyTitle: 'Why These Projects Matter',
    whySubtitle: 'ヘルプデスク実務への理解',
    skillsTitle: 'Skills',
    skillsSubtitle: 'ITサポートに必要な基礎力',
    experienceTitle: 'Experience',
    experienceSubtitle: '技術業務と現場経験',
    educationTitle: 'Education',
    educationSubtitle: '学歴',
    certificationsTitle: 'Certifications',
    certificationsSubtitle: '安全教育・資格',
    contactTitle: 'Contact',
    contactSubtitle: '連絡先',
    liveDemo: 'デモ',
    sourceCode: 'GitHub',
    technologies: '使用技術',
    openTo: '希望職種',
    footer:
      '日本でのIT Support、Helpdesk、Desktop Support、Junior IT Operations応募向けに作成。',
  },
};

export const quickFit = [
  {
    label: 'Target roles',
    value: 'IT Support, Helpdesk, Desktop Support, Junior IT Operations',
  },
  {
    label: 'Support strengths',
    value: 'Ticket triage, troubleshooting, documentation, user communication',
  },
  {
    label: 'Technical base',
    value: 'Windows/Linux, networking basics, monitoring, SQL, Python, Git',
  },
  {
    label: 'Workplace readiness',
    value: 'Japan-based experience, safety mindset, reporting, procedure follow-through',
  },
];

export const recruiterHighlights = [
  'IT Engineering graduate with practical support-focused projects',
  'Can work across English and daily Japanese workplace communication',
  'Comfortable with structured procedures, reporting, and careful documentation',
  'Looking for entry-level support work where learning, accuracy, and user service matter',
];

export const projects = [
  {
    title: 'AI Helpdesk Support Assistant',
    subtitle: 'Ticket Triage & Knowledge Base Search',
    recruiterValue: 'Shows Tier-1 intake thinking: classify the issue, search documentation, and suggest first steps clearly.',
    liveDemo: 'https://ai-itdesk-assistant.streamlit.app',
    github: 'https://github.com/AYMANABULLATIF/-AI-helpdesk-assistant',
    description:
      'A bilingual English/Japanese Streamlit app that simulates Tier-1 helpdesk ticket intake and knowledge base support for common user issues.',
    bullets: [
      'AI-assisted ticket classification by category, priority, sentiment, resolver team, and first troubleshooting steps',
      'Local IT knowledge base search for VPN, printer, email, account lockout, slow Windows PC, and network troubleshooting',
      'English/Japanese UI and response support',
      'Safe local fallback logic when no API key is configured',
    ],
    technologies: [
      'Python',
      'Streamlit',
      'Gemini API',
      'Markdown knowledge base',
      'python-dotenv',
      'Git/GitHub',
    ],
  },
  {
    title: 'IT Operations Center',
    subtitle: 'User, Asset, Incident & Audit Management Simulator',
    recruiterValue: 'Shows understanding of internal IT operations: users, devices, incidents, technician notes, and audit records.',
    liveDemo: 'https://it-operations-center-example.streamlit.app',
    github: 'https://github.com/AYMANABULLATIF/it-operations-center',
    description:
      'A bilingual internal IT operations portal that simulates helpdesk and desktop support workflows for a small company IT team.',
    bullets: [
      'User account support workflows: lookup, unlock simulation, password reset simulation, MFA reset, enable/disable account, and group membership changes',
      'Asset management: device assignment, return to storage, repair status, warranty tracking, and device history',
      'Incident tracking: ticket creation, priority/status updates, technician notes, and linking users/assets',
      'Audit logging for technician actions',
      'Optional Gemini checklist generation with local fallback',
    ],
    technologies: [
      'Python',
      'Streamlit',
      'SQLite',
      'Pandas',
      'Gemini API',
      'python-dotenv',
      'Git/GitHub',
    ],
  },
];

export const projectValue = [
  'Receiving and clarifying user issues',
  'Classifying priority and resolver team',
  'Searching support documentation',
  'Supporting account and device workflows',
  'Recording incidents and technician notes',
  'Maintaining audit logs',
  'Communicating clearly with users',
];

export const skillGroups = [
  {
    title: 'Helpdesk & IT Support',
    subtitle: 'ヘルプデスク',
    items: [
      'Ticket triage',
      'Troubleshooting',
      'Escalation awareness',
      'User support',
      'First-response communication',
      'Documentation',
      'Knowledge base search',
    ],
  },
  {
    title: 'Operating Systems',
    subtitle: 'OS',
    items: [
      'Windows',
      'Linux',
      'Desktop setup',
      'Basic system administration',
    ],
  },
  {
    title: 'Networking',
    subtitle: 'ネットワーク',
    items: [
      'TCP/IP',
      'DHCP',
      'VPN concepts',
      'Firewall basics',
      'Routing/switching fundamentals',
      'Wireshark basics',
    ],
  },
  {
    title: 'Systems & Monitoring',
    subtitle: '監視',
    items: [
      'Zabbix',
      'Nagios',
      'System performance monitoring',
      'Technical investigation',
    ],
  },
  {
    title: 'Databases',
    subtitle: 'データベース',
    items: [
      'MySQL',
      'PostgreSQL',
      'SQLite',
      'Basic database maintenance',
      'Data handling',
    ],
  },
  {
    title: 'Programming & Tools',
    subtitle: 'ツール',
    items: [
      'Python',
      'PowerShell basics',
      'Bash basics',
      'JavaScript',
      'SQL',
      'Git',
      'GitHub',
      'Streamlit',
    ],
  },
  {
    title: 'Cloud & Platforms',
    subtitle: 'クラウド',
    items: ['AWS basics', 'Google Cloud basics', 'Docker basics'],
  },
  {
    title: 'Languages',
    subtitle: '言語',
    items: ['Arabic native', 'English fluent', 'Japanese daily conversation'],
  },
];

export const experience = [
  {
    company: 'Kotobuki Co., Ltd.',
    role: 'Electrical Technician',
    location: 'Japan',
    period: 'May 2026 - Present',
    relevance: 'Transferable to IT support: technical troubleshooting, safety, accuracy, reporting, Japanese workplace communication',
    bullets: [
      'Technical installation and maintenance work in industrial/construction environments',
      'Electrical wiring, cable routing, equipment setup, and on-site troubleshooting',
      'Daily communication with Japanese coworkers and supervisors',
      'Built habits in safety, accuracy, documentation, and step-by-step problem solving that transfer well to IT support work',
    ],
  },
  {
    company: 'Tamaki Co., Ltd.',
    role: 'Insulation Technician',
    location: 'Ichihara, Japan',
    period: 'Feb 2025 - May 2026',
    relevance: 'Transferable to IT operations: procedure-following, quality standards, team coordination, workplace discipline',
    bullets: [
      'Supported industrial maintenance and installation work around equipment, pipes, tanks, and boilers',
      'Followed strict procedures, quality standards, and safety rules',
      'Participated in daily workplace coordination and reporting in Japanese environments',
      'Developed reliability, operational discipline, and technical teamwork useful for support and operations environments',
    ],
  },
  {
    company: 'Krispy Kreme Japan',
    role: 'Production Support Staff',
    location: 'Japan',
    period: 'Mar 2024 - Jan 2025',
    relevance: 'Transferable to helpdesk: operational checks, troubleshooting mindset, process accuracy, multicultural communication',
    bullets: [
      'Supported production operations, equipment condition checks, process flow, and quality standards',
      'Assisted with basic operational troubleshooting',
      'Helped maintain inventory-related accuracy and followed internal procedures',
      'Worked in a multicultural and Japanese workplace environment with attention to communication and procedure',
    ],
  },
  {
    company: 'Bohlac Construction',
    role: 'IT Support Specialist',
    location: 'Syria',
    period: 'Apr 2022 - Apr 2024',
    relevance: 'Direct IT support experience: user support, Windows/Linux troubleshooting, monitoring, database and network basics',
    bullets: [
      'Provided on-site technical support for Windows and Linux environments',
      'Supported users with workstation, software, access, and connectivity issues',
      'Monitored system performance and supported stable operation of internal systems',
      'Assisted with MySQL maintenance, backup-related tasks, and basic performance checks',
      'Supported network/security tasks including firewall, VPN, and VLAN-related environments',
      'Documented technical problems and followed up on support issues',
    ],
  },
];

export const education = {
  degree: 'Bachelor of Science in Information Technology Engineering',
  focus: 'Software Engineering',
  school: 'WADI International University, Syria',
  year: '2024',
};

export const certifications = [
  'Certified Electrical Handling Worker Safety Training - Japan',
  'Oxygen Deficiency & Hydrogen Sulfide Hazard Worker Safety Training - Japan',
  'Full-Harness Fall Protection Safety Training - Japan',
  'Asbestos Special Education - Japan',
];
