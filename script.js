// Console message
console.log(`
╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║   Progetto sviluppato e creato da Alessandro Zacco           ║
║   Portfolio: https://alessandro.zacco.com                     ║
║   GitHub: https://github.com/zazzale                         ║
║                                                              ║
╚═══════════════════════════════════════════════════════════════╝
`);

// Stile personalizzato per il messaggio
console.log(
    '%cProgetto sviluppato e creato da Alessandro Zacco', 
    'color: #E9FF4B; background: #1A1A1A; font-size: 20px; padding: 10px; border-radius: 5px; font-weight: bold;'
);

// Contenuto dinamico del sito
const content = {
    skills: {
        devops: [
            // Infrastructure & Cloud
            { name: "AWS", level: 90, description: "Amazon Web Services - Cloud Infrastructure" },
            { name: "Azure", level: 85, description: "Microsoft Azure Cloud Platform" },
            { name: "GCP", level: 80, description: "Google Cloud Platform" },
            { name: "Terraform", level: 88, description: "Infrastructure as Code" },
            
            // Operating Systems
            { name: "Linux Ubuntu/Debian", level: 92, description: "Amministrazione sistemi Debian-based" },
            { name: "RHEL/CentOS", level: 88, description: "Gestione sistemi Red Hat" },
            { name: "SUSE Linux", level: 85, description: "Amministrazione SUSE" },
            { name: "Windows Server", level: 82, description: "Gestione Windows Server" },
            { name: "macOS", level: 85, description: "Sviluppo e amministrazione Apple" },

            // Editors & Shell
            { name: "VI/VIM", level: 90, description: "Editor avanzato per sistemi Unix" },
            { name: "Nano", level: 85, description: "Editor di testo per terminal" },
            { name: "Bash Scripting", level: 92, description: "Automazione shell Linux/Unix" },
            { name: "PowerShell", level: 85, description: "Scripting e automazione Windows" },
            
            // Version Control & CI/CD
            { name: "Git", level: 92, description: "Version Control System" },
            { name: "GitHub", level: 90, description: "Collaboration & CI/CD" },
            { name: "GitLab", level: 88, description: "DevOps Platform" },
            { name: "Jenkins", level: 90, description: "Automation Server" },
            
            // Containers & Orchestration
            { name: "Docker", level: 95, description: "Containerizzazione" },
            { name: "Kubernetes", level: 90, description: "Container Orchestration" },
            { name: "Podman", level: 85, description: "Container Management" },
            { name: "Docker Swarm", level: 82, description: "Container Orchestration" },

            // Networking & Security
            { name: "Load Balancing", level: 88, description: "HAProxy, NGINX Plus" },
            { name: "Reverse Proxy", level: 90, description: "NGINX, Traefik" },
            { name: "Forward Proxy", level: 85, description: "Squid, Apache" },
            { name: "Firewall", level: 88, description: "iptables, ufw, firewalld" },
            { name: "SSL/TLS", level: 85, description: "Certificati e sicurezza" },
            
            // Serverless & FaaS
            { name: "AWS Lambda", level: 85, description: "Serverless Computing" },
            { name: "Azure Functions", level: 82, description: "Event-driven computing" },
            { name: "Knative", level: 80, description: "Kubernetes Serverless" },
            
            // Configuration Management
            { name: "Ansible", level: 90, description: "Automation & Configuration" },
            { name: "Puppet", level: 85, description: "Configuration Management" },
            { name: "Chef", level: 82, description: "Infrastructure Automation" },
            
            // Web & Application Servers
            { name: "NGINX", level: 90, description: "Web Server & Reverse Proxy" },
            { name: "Apache", level: 85, description: "HTTP Server" },
            { name: "Tomcat", level: 82, description: "Java Application Server" },
            { name: "IIS", level: 75, description: "Windows Web Server" }
        ],
        development: [
            // Frontend Development
            { name: "HTML5", level: 90, description: "Markup semantico e accessibilità" },
            { name: "CSS3", level: 88, description: "Styling, Flexbox, Grid, Animations" },
            { name: "JavaScript", level: 85, description: "ES6+, DOM manipulation" },
            { name: "React", level: 80, description: "Frontend development" },
            
            // Backend Development
            { name: "Python", level: 85, description: "Scripting e automazione" },
            { name: "Node.js", level: 82, description: "Backend e microservizi" },
            { name: "Java", level: 75, description: "Enterprise development" },
            
            // Shell & Scripting
            { name: "Bash", level: 90, description: "Shell scripting e automazione" },
            { name: "PowerShell", level: 85, description: "Windows automation" },
            
            // Database
            { name: "MySQL", level: 82, description: "Database relazionale" },
            { name: "MongoDB", level: 80, description: "Database NoSQL" },
            { name: "PostgreSQL", level: 78, description: "Database relazionale avanzato" }
        ],
        testing: [
            // Functional Testing
            { name: "Selenium", level: 88, description: "Test automatizzati UI" },
            { name: "Cypress", level: 82, description: "E2E testing moderno" },
            { name: "Jmeter", level: 80, description: "Testing di Performance" },
            
            // Accessibility Testing
            { name: "WAVE", level: 85, description: "Web Accessibility Evaluation Tool" },
            { name: "Axe DevTools", level: 88, description: "Automated accessibility testing" },
            { name: "Chrome DevTools", level: 90, description: "Accessibility auditing e debugging" },
            { name: "WCAG Guidelines", level: 85, description: "Standard di accessibilità web" }
        ],
        monitoring: [
            // Infrastructure Monitoring
            { name: "Prometheus", level: 92, description: "Monitoring e alerting di sistema" },
            { name: "Grafana", level: 90, description: "Visualizzazione dati e dashboard" },
            { name: "Datadog", level: 88, description: "Monitoring cloud-native" },
            { name: "Dynatrace", level: 90, description: "Full-stack monitoring" },
            { name: "PRTG", level: 85, description: "Network monitoring" },

            // Application Monitoring (APM)
            { name: "OpenTelemetry", level: 88, description: "Osservabilità open source" },
            { name: "New Relic", level: 85, description: "APM e full-stack observability" },
            { name: "Datadog APM", level: 87, description: "Application Performance Monitoring" },
            { name: "Dynatrace APM", level: 90, description: "Application Intelligence" },

            // Logs Management
            { name: "Graylog", level: 85, description: "Log collection e analisi" },
            { name: "Splunk", level: 88, description: "Log analytics e SIEM" },
            { name: "ELK Stack", level: 86, description: "Elastic Stack per logging" }
        ]
    },
    experiences: [
        {
            company: "SORINTI.lab",
            logo: "https://www.sorint.com/wp-content/uploads/2021/07/SorintLab_spa_esecutivo_200dpi.png",
            role: "DevOps Expert Engineer",
            period: "apr 2024 - Presente",
            location: "Grassobbio, Lombardia, Italia · Da remoto",
            description: `
                • Implementazione e gestione di soluzioni APM con Dynatrace
                • Automazione dei processi di deployment e testing
                • Ottimizzazione delle performance applicative
            `,
            skills: ["DevOps", "Cloud", "Monitoring", "AWS", "Dynatrace"]
        },
        {
            company: "Lottomatica",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Lottomatica_Logo.svg/1024px-Lottomatica_Logo.svg.png",
            role: "Application Operations Specialist",
            period: "apr 2022 - apr 2024",
            location: "Roma · Ibrida",
            description: `
                • Gestione e monitoraggio di applicazioni critiche
                • Implementazione di soluzioni di monitoring
                • Ottimizzazione delle performance
                • Automazione dei processi operativi
                • Gestione degli incidenti e problem solving
            `,
            skills: ["DevOps", "Unix", "Monitoring", "Automation", "Troubleshooting"]
        },
        {
            company: "Philmark Group",
            logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGLFu6xdkT9zg/company-logo_100_100/company-logo_100_100/0/1686655924904/philmark_group_logo?e=2147483647&v=beta&t=VqqQpjDogL_iGXgN2zxT1fDV8Q9C_TjVDS_uGKRRUys",
            role: "IT Governance Consultant",
            period: "ott 2019 - mar 2022",
            location: "Roma · in presenza",
            description: `
                • Analizzare o elaborare dati o informazioni.
                • Eseguire controlli di gestione, pianificare e programmare il lavoro o le attività.
                • Redigere o presentare rapporti o documenti.
                                
            `,
            skills: ["DevOps", "Unix", "Monitoring", "Automation", "Troubleshooting"]
        },
        {
            company: "Best Engage",
            logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGexKH1FKeqiQ/company-logo_100_100/company-logo_100_100/0/1630546655788/best_engage_srl_logo?e=2147483647&v=beta&t=eU2ppTHPCYj1tmm1J4cak1gKVOWed63H3zpgf7nBGx4",
            role: "Senior Technology Analyst",
            period: "mag 2019 - ott 2019",
            location: "Roma · in presenza",
            description: `
                • Gestione e monitoraggio di applicazioni critiche
                • Implementazione di soluzioni di monitoring
                • Ottimizzazione delle performance
                • Automazione dei processi operativi
            `,
            skills: ["DevOps", "Unix", "Monitoring", "Automation", "Troubleshooting"]
        },
        {
            company: "Accenture",
            logo: "https://media.licdn.com/dms/image/v2/C4D0BAQFpgsWxYKqXHQ/company-logo_100_100/company-logo_100_100/0/1654013420039/accenture_italia_logo?e=2147483647&v=beta&t=9inLRKNjrEeDbcYOZ-x55x2AZtNNNFDzmyZPzNdQfyI",
            role: "Technology Analyst",
            period: "dic 2018 - mag 2019",
            location: "Roma · in presenza",
            description: `
                • Gestione e monitoraggio di applicazioni critiche
                • Implementazione di soluzioni di monitoring
                • Ottimizzazione delle performance
                • Automazione dei processi operativi
            `,
            skills: ["DevOps", "Unix", "Monitoring", "Automation", "Troubleshooting"]
        }
    ],
    projects: [
        {
            title: "Lettera Casuale - iOS App",
            description: "App iOS sviluppata con SwiftUI per giocare a 'Nomi, Cose, Città'. L'app genera lettere casuali senza ripetizioni e offre un'interfaccia utente intuitiva e moderna.",
            technologies: ["SwiftUI", "iOS", "iPadOS"],
            imageUrl: "https://res.cloudinary.com/dt28ce44n/image/upload/f_auto,q_auto/v1/my/lfdc3ukh5ceciesky0ho",
            link: "https://apps.apple.com/it/app/lettera-casuale/id6739968063"
        },
        {
            title: "Migrazione a Microservizi",
            description: "Questo progetto ha trasformato un'applicazione monolitica legacy in un'architettura moderna basata su microservizi, migliorando significativamente la scalabilità e la manutenibilità del sistema.",
            technologies: ["Kubernetes", "Docker", "Spring Boot", "MongoDB", "RabbitMQ" ],
            imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
        },
        {
            title:"Implementazione GitOps",
            description:"Questo progetto ha rivoluzionato l'approccio alla gestione dell'infrastruttura, implementando pratiche GitOps per garantire coerenza e tracciabilità in tutto il processo di deployment.",
            technologies: ["Kubernetes","Ansible","GitHub Actions"],
            imageUrl: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=1200&q=80",
        },
        {
            title:"Service Control Room",
            description:"Questo progetto ha portato alla creazione di una Service Control Room all'avanguardia, centralizzando il monitoraggio e la gestione di tutti i servizi IT dell'azienda in un unico hub cloud-based.",
            technologies: ["Prometheus","Grafana","MS Azure","Dynatrace"],
            imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        },
        {
            title:"QA Test Automation",
            description:"Questo progetto ha rivoluzionato l'approccio al Quality Assurance, implementando una suite completa di test automatizzati per garantire la massima qualità del software in ogni fase dello sviluppo.",
            technologies: ["Cypress","JavaScript","Jmeter"],
            imageUrl: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=1200&q=80",
        }
    ],
    certifications: [
        {
            name: "Advanced Splunk Synthetic Monitoring",
            issuer: "Splunk",
            date: "ott 2024",
            imageUrl: "https://res.cloudinary.com/dt28ce44n/image/upload/v1733159457/my/plcleuudjiftoixragm5.webp",
            link: ""
        },
        {
            name: "Introduction to Kubernetes (LFS158)",
            issuer: "The Linux Foundation",
            date: "ott 2024",
            imageUrl: "https://res.cloudinary.com/dt28ce44n/image/upload/v1733159459/my/t1kk6x4jguue1nzj5qvn.webp",
            link: "https://www.credly.com/badges/2c00e17d-338f-42ab-8d88-21f628a3f251"
        },
        {
            name: "IT Essentials Learn - Walkthrough",
            issuer: "Splunk",
            date: "ott 2024",
            imageUrl: "https://res.cloudinary.com/dt28ce44n/image/upload/v1733159460/my/wlem6poovmdqfepkny3n.webp",
        },
        {
            name: "Introduction to Splunk Infrastructure Monitoring",
            issuer: "Splunk",
            date: "ott 2024",
            imageUrl: "https://res.cloudinary.com/dt28ce44n/image/upload/v1733159459/my/ll7xhdiqjlouhsdwwsco.webp",
        },
        {
            name: "Introduction to Splunk Log Observer Connect",
            issuer: "Splunk",
            date: "ott 2024",
            imageUrl: "https://res.cloudinary.com/dt28ce44n/image/upload/v1733159460/my/dwtlstrofhpt25awosdw.webp",
        },
        {
            name: "Introduction to Splunk Observability Cloud",
            issuer: "Splunk",
            date: "ott 2024",
            imageUrl: "https://res.cloudinary.com/dt28ce44n/image/upload/v1733159460/my/zmbfrksgymge9rjciaio.webp",
        },
        {
            name: "LFC108: Cybersecurity Essentials",
            issuer: "The Linux Foundation",
            date: "ott 2024",
            imageUrl: "https://res.cloudinary.com/dt28ce44n/image/upload/v1733159457/my/ua7bdz5gpaqmbnavukoo.webp",
            link: "https://www.credly.com/badges/546cee14-c0bb-4b6c-ac9d-da9fd8a95a6f/linked_in_profile",
        },
        {
            name: "LFS101: Introduction to Linux",
            issuer: "The Linux Foundation",
            date: "ott 2024",
            imageUrl: "https://res.cloudinary.com/dt28ce44n/image/upload/v1733159459/my/czdlhtbps0ht9uunzzz8.webp",
            link: "https://www.credly.com/badges/72a8a592-97ec-4b23-99a8-499d5cd00835/linked_in_profile",
        },
        {
            name: "LFS157: Introduction to Serverless on Kubernetes",
            issuer: "The Linux Foundation",
            date: "ott 2024",
            imageUrl: "https://res.cloudinary.com/dt28ce44n/image/upload/v1733159459/my/zhhhol75letwrlfx3ngk.webp",
            link: "https://www.credly.com/badges/5791ddf6-ec72-42e4-ba76-514bc2a85fd7/linked_in_profile",
        },
        {
            name: "LFS167: Introduction to Jenkins",
            issuer: "The Linux Foundation",
            date: "ott 2024",
            imageUrl: "https://res.cloudinary.com/dt28ce44n/image/upload/v1733159458/my/wm3obkp4t4u9krwzc8ee.webp",
            link: "https://www.credly.com/badges/e6c4c318-fd75-45e3-9bea-70d62fd2b5eb/linked_in_profile",
        },
        {
            name: "Managing Splunk Observability Cloud Teams as Code",
            issuer: "Splunk",
            date: "ott 2024",
            imageUrl: "https://res.cloudinary.com/dt28ce44n/image/upload/v1733159461/my/qtbzmditazw3ez7fykge.webp",
        },
        {
            name: "Network Performance Monitoring with Splunk Network Explorer",
            issuer: "Splunk",
            date: "ott 2024",
            imageUrl: "https://res.cloudinary.com/dt28ce44n/image/upload/v1733159456/my/os9jmf9tds6zopt5s0gy.webp",
        },
        {
            name: "Responding to Incidents in Splunk On Call",
            issuer: "Splunk",
            date: "ott 2024",
            imageUrl: "https://res.cloudinary.com/dt28ce44n/image/upload/v1733159457/my/hi7giwkk9mei7pq1jdjf.webp",
        },
        {
            name: "Set up Splunk Cloud as IdP for Splunk Observability Cloud",
            issuer: "Splunk",
            date: "ott 2024",
            imageUrl: "https://res.cloudinary.com/dt28ce44n/image/upload/v1733159457/my/vpficlyas21wlzicxnpi.webp",
        },
        {
            name: "Google Analytics",
            issuer: "Google",
            date: "mag 2024",
            imageUrl: "https://res.cloudinary.com/dt28ce44n/image/upload/v1733159458/my/txgp0o4davimnyeisxar.webp",
        },
        {
            name: "LFS162: Introduction to DevOps and Site Reliability Engineering",
            issuer: "The Linux Foundation",
            date: "oct 2024",
            imageUrl: "https://res.cloudinary.com/dt28ce44n/image/upload/v1733159458/my/fv6vzxenipczwad5vboi.webp",
            link: "https://www.credly.com/badges/92f36108-9a47-43a7-852b-0d0aecf15be5",
        },        
    ]
};

// Manteniamo solo gli event listener essenziali
document.addEventListener('DOMContentLoaded', function() {
    // Popola le esperienze, progetti, certificazioni
    const experiencesGrid = document.querySelector('.experiences-grid');
    if (experiencesGrid) {
        experiencesGrid.innerHTML = content.experiences.slice(0, 2).map(exp => `
            <div class="experience-card">
                <img src="${exp.logo}" alt="${exp.company}" class="company-logo">
                <div class="experience-content">
                    <h3>${exp.role}</h3>
                    <div class="company-name">${exp.company}</div>
                    <div class="period">${exp.period}</div>
                    <div class="location">${exp.location}</div>
                    <div class="skills">
                        ${exp.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }

    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        projectsGrid.innerHTML = content.projects.map(project => `
            <div class="project-card">
                <img src="${project.imageUrl}" alt="${project.title}" class="project-image">
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="technologies">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    ${project.title === "Lettera Casuale - iOS App" && project.link ? 
                        `<a href="${project.link}" target="_blank" class="project-link">Vedi Progetto →</a>` : 
                        ''}
                </div>
            </div>
        `).join('');
    }

    const certificationsGrid = document.querySelector('.certifications-grid');
    if (certificationsGrid) {
        certificationsGrid.innerHTML = content.certifications.slice(0, 2).map(cert => `
            <div class="certification-card">
                <img src="${cert.imageUrl || 'path/to/placeholder.png'}" 
                     alt="${cert.name}" 
                     class="cert-image"
                     onerror="this.src='https://via.placeholder.com/180?text=No+Image'">
                <div class="certification-content">
                    <h3>${cert.name}</h3>
                    <div class="issuer">${cert.issuer}</div>
                    <div class="date">${cert.date}</div>
                    ${cert.link ? `<a href="${cert.link}" target="_blank" class="cert-link">Verifica Certificazione →</a>` : ''}
                </div>
            </div>
        `).join('');
    }

    // Gestione del pulsante "Torna su"
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Aggiorna l'anno nel footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Inizializzazione modali
    initModals();
    
    // Carica le preferenze dei cookie all'avvio
    loadCookiePreferences();

    // Mostra il popup GDPR se l'utente non ha ancora fatto una scelta
    const hasUserChoice = localStorage.getItem('analytics-cookies') !== null;
    if (!hasUserChoice) {
        // Mostra immediatamente il popup GDPR
        openGdprModal();
        
        // Aggiungi gli event listener
        const analyticsCookies = document.getElementById('analytics-cookies');
        const marketingCookies = document.getElementById('marketing-cookies');
        
        if (analyticsCookies) {
            analyticsCookies.addEventListener('change', saveCookiePreferences);
        }
        
        if (marketingCookies) {
            marketingCookies.addEventListener('change', saveCookiePreferences);
        }
    } else {
        // Se l'utente ha già accettato i cookie analitici, carica Google Analytics
        if (localStorage.getItem('analytics-cookies') === 'true') {
            const gtagLoader = document.createElement('script');
            gtagLoader.async = true;
            gtagLoader.src = 'https://www.googletagmanager.com/gtag/js?id=G-N5YVB6Z0KC';
            document.head.appendChild(gtagLoader);

            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N5YVB6Z0KC');
        }
    }
});

// Funzioni per i modali
function initModals() {
    document.querySelectorAll('.close-modal').forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) closeModal(modal.id);
        });
    });

    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const visibleModal = document.querySelector('.modal.show');
            if (visibleModal) {
                closeModal(visibleModal.id);
            }
        }
    });
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    
    modal.classList.remove('show');
    
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }, 400);
}

function openSkillsModal(category) {
    const modalTitle = document.getElementById('modal-title');
    const modalSkills = document.getElementById('modal-skills');
    if (!modalTitle || !modalSkills) return;
    
    const skills = content.skills[category];
    const titles = {
        devops: 'DevOps & Infrastructure Engineering',
        development: 'Development',
        testing: 'Testing & QA',
        monitoring: 'Monitoring & Observability'
    };
    
    modalTitle.textContent = titles[category];
    
    if (category === 'devops') {
        modalSkills.innerHTML = `
            <h3 class="skill-category">Infrastructure & Cloud</h3>
            ${skills.slice(0, 4).map(createSkillItem).join('')}
            
            <h3 class="skill-category">Operating Systems</h3>
            ${skills.slice(4, 9).map(createSkillItem).join('')}
            
            <h3 class="skill-category">Editors & Shell</h3>
            ${skills.slice(9, 13).map(createSkillItem).join('')}
            
            <h3 class="skill-category">Version Control & CI/CD</h3>
            ${skills.slice(13, 17).map(createSkillItem).join('')}
            
            <h3 class="skill-category">Containers & Orchestration</h3>
            ${skills.slice(17, 21).map(createSkillItem).join('')}
            
            <h3 class="skill-category">Networking & Security</h3>
            ${skills.slice(21, 26).map(createSkillItem).join('')}
            
            <h3 class="skill-category">Serverless & FaaS</h3>
            ${skills.slice(26, 29).map(createSkillItem).join('')}
            
            <h3 class="skill-category">Configuration Management</h3>
            ${skills.slice(29, 32).map(createSkillItem).join('')}
            
            <h3 class="skill-category">Web & Application Servers</h3>
            ${skills.slice(32).map(createSkillItem).join('')}
        `;
    } else if (category === 'development') {
        modalSkills.innerHTML = `
            <h3 class="skill-category">Frontend Development</h3>
            ${skills.slice(0, 4).map(createSkillItem).join('')}
            
            <h3 class="skill-category">Backend Development</h3>
            ${skills.slice(4, 7).map(createSkillItem).join('')}
            
            <h3 class="skill-category">Shell & Scripting</h3>
            ${skills.slice(7, 9).map(createSkillItem).join('')}
            
            <h3 class="skill-category">Database</h3>
            ${skills.slice(9).map(createSkillItem).join('')}
        `;
    } else if (category === 'testing') {
        modalSkills.innerHTML = `
            <h3 class="skill-category">Functional Testing</h3>
            ${skills.slice(0, 3).map(createSkillItem).join('')}
            
            <h3 class="skill-category">Accessibility Testing</h3>
            ${skills.slice(3).map(createSkillItem).join('')}
        `;
    } else if (category === 'monitoring') {
        modalSkills.innerHTML = `
            <h3 class="skill-category">Infrastructure Monitoring</h3>
            ${skills.slice(0, 5).map(createSkillItem).join('')}
            
            <h3 class="skill-category">Application Monitoring (APM)</h3>
            ${skills.slice(5, 9).map(createSkillItem).join('')}
            
            <h3 class="skill-category">Logs Management</h3>
            ${skills.slice(9).map(createSkillItem).join('')}
        `;
    } else {
        modalSkills.innerHTML = skills.map(createSkillItem).join('');
    }
    
    openModal('skills-modal');
}

// Funzione helper per creare l'HTML di una skill
function createSkillItem(skill, index) {
    return `
        <div class="skill-item" style="--index: ${index}">
            <div class="skill-info">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-level">${skill.level}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" style="--level: ${skill.level}%"></div>
            </div>
            <div class="skill-description">${skill.description}</div>
        </div>
    `;
}

function openExperiencesModal() {
    const modalExperiences = document.getElementById('modal-experiences');
    if (!modalExperiences) return;
    
    modalExperiences.innerHTML = content.experiences.map((exp, index) => `
        <div class="experience-item" style="--index: ${index}">
            <img src="${exp.logo}" alt="${exp.company}" class="company-logo">
            <div class="experience-content">
                <h3 class="role">${exp.role}</h3>
                <div class="company">${exp.company}</div>
                <div class="period">${exp.period}</div>
                <div class="location">${exp.location}</div>
                <div class="description">${exp.description}</div>
                <div class="skills">
                    ${exp.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    openModal('experiences-modal');
}

function openCertificationsModal() {
    const modalCertifications = document.getElementById('modal-certifications');
    if (!modalCertifications) return;
    
    modalCertifications.innerHTML = content.certifications.map((cert, index) => `
        <div class="certification-item" style="--index: ${index}">
            <img src="${cert.imageUrl || 'path/to/placeholder.png'}" 
                 alt="${cert.name}" 
                 class="cert-image"
                 onerror="this.src='https://via.placeholder.com/200?text=No+Image'">
            <div class="certification-content">
                <h3>${cert.name}</h3>
                <div class="issuer">${cert.issuer}</div>
                <div class="date">${cert.date}</div>
                ${cert.link ? `<a href="${cert.link}" target="_blank" class="cert-link">Verifica Certificazione →</a>` : ''}
            </div>
        </div>
    `).join('');
    
    openModal('certifications-modal');
}

// Funzione per il menu mobile
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuBtn = document.querySelector('.mobile-menu-btn i');
    
    navLinks.classList.toggle('show');
    
    // Cambia l'icona del menu
    if (navLinks.classList.contains('show')) {
        menuBtn.classList.remove('fa-bars');
        menuBtn.classList.add('fa-times');
    } else {
        menuBtn.classList.remove('fa-times');
        menuBtn.classList.add('fa-bars');
    }
}

// Chiudi il menu mobile quando si clicca su un link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        const menuBtn = document.querySelector('.mobile-menu-btn i');
        
        if (navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
            menuBtn.classList.remove('fa-times');
            menuBtn.classList.add('fa-bars');
        }
    });
});

// Funzioni per la gestione dei cookie GDPR
function openGdprModal() {
    openModal('gdpr-modal');
    loadCookiePreferences();
    
    // Aggiungi gli event listener quando il modale viene aperto
    const analyticsCookies = document.getElementById('analytics-cookies');
    const marketingCookies = document.getElementById('marketing-cookies');
    
    if (analyticsCookies) {
        analyticsCookies.addEventListener('change', saveCookiePreferences);
    }
    
    if (marketingCookies) {
        marketingCookies.addEventListener('change', saveCookiePreferences);
    }
}

function loadCookiePreferences() {
    const analytics = localStorage.getItem('analytics-cookies') === 'true';
    const marketing = localStorage.getItem('marketing-cookies') === 'true';
    
    document.getElementById('analytics-cookies').checked = analytics;
    document.getElementById('marketing-cookies').checked = marketing;
}

function saveCookiePreferences() {
    const analytics = document.getElementById('analytics-cookies').checked;
    const marketing = document.getElementById('marketing-cookies').checked;
    
    localStorage.setItem('analytics-cookies', analytics);
    localStorage.setItem('marketing-cookies', marketing);
    
    // Gestione Google Analytics
    if (analytics) {
        // Carica Google Analytics se non è già presente
        if (!window.gtag) {
            const gtagScript = document.createElement('script');
            gtagScript.async = true;
            gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-N5YVB6Z0KC';
            document.head.appendChild(gtagScript);

            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N5YVB6Z0KC');
        }
    } else {
        // Rimuovi Google Analytics se i cookie analitici vengono disattivati
        const gtagScript = document.querySelector('script[src*="googletagmanager.com"]');
        if (gtagScript) {
            gtagScript.remove();
        }
        window.dataLayer = undefined;
        window.gtag = undefined;
    }
    
    closeModal('gdpr-modal');
}

function acceptAllCookies() {
    document.getElementById('analytics-cookies').checked = true;
    document.getElementById('marketing-cookies').checked = true;
    saveCookiePreferences();
}

function rejectAllCookies() {
    document.getElementById('analytics-cookies').checked = false;
    document.getElementById('marketing-cookies').checked = false;
    saveCookiePreferences();
}

// Security Headers e CSP
const securityHeaders = {
    'Content-Security-Policy': 
        "default-src 'self' https://cdn.equalweb.com/; " +
        "script-src 'self' https://cdn.equalweb.com/ https://cdnjs.cloudflare.com/ 'unsafe-inline' " +
        "https://access.equalweb.com/ https://www.googletagmanager.com/ https://web.cmp.usercentrics.eu/; " +
        "style-src 'self' https://cdnjs.cloudflare.com/ 'unsafe-inline' https://access.equalweb.com/; " +
        "img-src 'self' https://res.cloudinary.com/ https://images.unsplash.com/ https://media.licdn.com/ " +
        "data: https: https://access.equalweb.com/ https://www.google-analytics.com/; " +
        "font-src 'self' https://cdnjs.cloudflare.com/ https://fonts.gstatic.com/ https://access.equalweb.com/; " +
        "connect-src 'self' https://api.equalweb.com/ https://access.equalweb.com/ " +
        "https://cdn.equalweb.com/ https://www.google-analytics.com/ https://analytics.google.com/; " +
        "frame-src 'self' https://access.equalweb.com/; " +
        "object-src 'none';",
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin'
};

// Funzione per proteggere gli input da XSS
function sanitizeInput(input) {
    return input.replace(/[<>]/g, '');
}

// Protezione contro il clickjacking
if (window.self !== window.top) {
    window.top.location = window.self.location;
}

// Funzione per verificare i token CSRF
function validateCSRFToken(token) {
    return token && token === sessionStorage.getItem('csrfToken');
}

// Generazione token CSRF
function generateCSRFToken() {
    const token = Math.random().toString(36).substring(2) + Date.now().toString(36);
    sessionStorage.setItem('csrfToken', token);
    return token;
}

// Monitoraggio degli errori
window.onerror = function(msg, url, lineNo, columnNo, error) {
    const errorLog = {
        message: msg,
        url: url,
        line: lineNo,
        column: columnNo,
        error: error ? error.stack : null,
        timestamp: new Date().toISOString()
    };
    console.error('Error logged:', errorLog);
    return false;
};

// Rate limiting per le chiamate API
class RateLimiter {
    constructor(limit, interval) {
        this.limit = limit;
        this.interval = interval;
        this.requests = [];
    }

    canMakeRequest() {
        const now = Date.now();
        this.requests = this.requests.filter(time => now - time < this.interval);
        if (this.requests.length < this.limit) {
            this.requests.push(now);
            return true;
        }
        return false;
    }
}

const apiRateLimiter = new RateLimiter(100, 60000); // 100 richieste al minuto 