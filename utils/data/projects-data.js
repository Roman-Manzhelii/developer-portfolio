import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'AIclipse',
        description: "AI image detection platform built as a Kubernetes-based polyglot microservice system. My evidence focuses on platform architecture: service boundaries, gateway/auth flows, API access, CI/CD, monitoring, and security hardening.",
        tools: ['FastAPI', 'Flask', 'Next.js', 'ASP.NET Core', 'MongoDB', 'Redis', 'Kubernetes'],
        role: 'System architecture, platform engineering and SecDevOps',
        links: [
            { label: 'Code', href: 'https://github.com/AIclipse-Organisation/AIclipse', type: 'code' },
            { label: 'App proof', href: 'https://mahara.dkit.ie/view/view.php?t=8d63c3591f0f0d5a87f5', type: 'proof' },
            { label: 'Contribution proof', href: 'https://mahara.dkit.ie/view/view.php?t=b4ca4a49cc228cb29d14', type: 'proof' },
        ],
        image: crefin,
    },
    {
        id: 2,
        name: 'Safelor',
        description: "IoT PPE compliance system combining a Flask/MongoDB web app with Raspberry Pi scanning units. It uses camera analysis, PIR sensors, RFID, traffic-light feedback, voice prompts, PubNub messaging, and supervisor logs.",
        tools: ['Python', 'Flask', 'MongoDB', 'Raspberry Pi', 'PubNub', 'Computer Vision'],
        role: 'IoT application and hardware integration',
        links: [
            { label: 'Code', href: 'https://github.com/Roman-Manzhelii/Safelor', type: 'code' },
            { label: 'Proof', href: 'https://mahara.dkit.ie/view/view.php?t=vlGZ1JKxBejAOgznD5SM', type: 'proof' },
        ],
        image: crefin,
    },
    {
        id: 3,
        name: 'DataDefense',
        description: "Interactive React/Vite security education site about data breaches. It turns breach definitions, incident examples, GDPR duties, and an organization response playbook into a guided web experience.",
        tools: ['React', 'Vite', 'JavaScript', 'Sass', 'GSAP', 'Motion'],
        role: 'Frontend implementation and security-content structure',
        links: [
            { label: 'Code', href: 'https://github.com/Roman-Manzhelii/data-breach-threats', type: 'code' },
            { label: 'Proof', href: 'https://roman-manzhelii.github.io/data-breach-threats/', type: 'proof' },
        ],
        image: realEstate,
    },
];
