import filmflicker from "@/public/filmflicker.png";
import gamehub from "@/public/gamehub.png";
import gitops from "@/public/gitops.webp";
import shadcn from "@/public/shadcn.png";
import cicd from "@/public/cicd.png";
import boto3 from "@/public/at1.jpg";
import portfolio from "@/public/portfolio.png";
import kubernetes from "@/public/kubernetes.png";
import selenium from "@/public/selenium.jpg";
import htmlcss from "@/public/next.png";
import nodejs from "@/public/nodejs.webp";

export const projectList = [
  {
    id: 10,
    tag: "top",
    title: "QD Serverless database solution.",
    category: "fullstack",
    image: nodejs,
    description:
      "Platform for deploying Database servers made using kubeApi and express.js",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg"
    ],
    url: undefined,
    github: "https://github.com/JATINKUMAR1008/db-pfl.git",
    features: ["Responsive", "Serverless deployment", "Cluster management"],
    detailedDescription:
      "Developed a secure and efficient Full Stack application to deploy database servers, integrating front-end and back-end technologies.",
  },

  {
    id: 4,
    tag: "top",
    title: "CI CD Pipeline",
    category: "devops",
    image: cicd,
    description:
      "Automated release process using Jenkins and docker for a Web app on Azure AKS.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
    ],
    url: undefined,
    github: "https://github.com/JATINKUMAR1008/azure-aks.git",
    features: [
      "Automated deployment process",
      "Integration with Jenkins for continuous integration",
      "Usage of Docker for containerization",
      "Provisioned Using Terraform"
    ],
    detailedDescription:
      "This project implements a Continuous Integration and Continuous Deployment (CI/CD) pipeline using Jenkins and Docker for deploying web applications. It automates the deployment process and integrates with Jenkins for continuous integration.",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    category: "fullstack",
    image: portfolio,
    description:
      "Sleek personal portfolio website made with NextJs, ShadcnUI and Framer Motion.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    ],
    url: "https://ankitraj.vercel.app/",
    github: "https://github.com/JATINKUMAR1008/portfolio",
    features: [
      "Sleek and modern design",
      "Built with Next.js for server-side rendering",
      "Utilizes Tailwind CSS for responsive styling",
      "Animated transitions powered by Framer Motion",
    ],
    detailedDescription:
      "This project is a personal portfolio website showcasing the developer's skills and projects. It features a sleek and modern design implemented with Next.js, a React framework for server-side rendering.",
  },

  {
    id: 5,
    title: "GitOps CD Pipeline",
    category: "devops",
    tag: "top",
    image: gitops,
    description: "Implemented custom deployment strategy  using Argo CD.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/argocd/argocd-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg",
    ],
    url: undefined,
    github: "https://github.com/ankitrajxd/myapp-config.git",
    features: [
      "GitOps implementation for managing infrastructure",
      "Usage of Argo CD for continuous delivery",
      "Integration with Kubernetes for container orchestration",
    ],
    detailedDescription:
      "This project implements GitOps methodology for managing infrastructure, specifically for a web application. It utilizes Argo CD for continuous delivery and integrates with Kubernetes for container orchestration.",
  },
  {
    id: 6,
    title: "Infrastructure Automation with Terraform and Ansible",
    category: "devops",
    image: boto3,
    description: "Automated provisioning of the kubernetes cluster.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg",
    ],
    url: undefined,
    github: "https://github.com/JATINKUMAR1008/K8s-cluster-setup-Ansible.git",
    features: [
      "Automation of repetitive tasks in DigitalOcean cloud environment",
      "Usage of Terraform for infrastructure provisioning",
      "Usage of Ansible for configuration management",
      "Using kubeAdm for kubernetes cluster management",
    ],
    detailedDescription:
      "This project automates the provisioning of a Kubernetes cluster using kubeAdm and computes in a DigitalOcean cloud environment. It uses Terraform for infrastructure provisioning and Ansible for configuration management.",
  },
  {
    id: 8,
    title: "Microservice Deployment",
    category: "devops",
    image: kubernetes,
    description: "Deployed a E-commerce microservice app on kuberentes.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    ],
    url: undefined,
    github: "https://github.com/JATINKUMAR1008/Ecomerce_Microservices_Application",
    features: [
      "Automated Kubernetes cluster provisioning and management using Kubeadm",
      "Integration with DigitalOcean for scalable infrastructure deployment",
      "Improvement of operational efficiency in Kubernetes cluster management",
    ],
    detailedDescription:
      "This project automates the provisioning and management of Kubernetes clusters using Kubeadm. It integrates with DigitalOcean for scalable infrastructure deployment and enhances operational efficiency in Kubernetes cluster management.",
  },
  {
    id: 9,
    title: "Full Stack chat application",
    category: "fullstack",
    image: htmlcss,
    description: "Chat application made with redis pub/sub",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    ],
    url: undefined,
    github: "https://github.com/JATINKUMAR1008/Scalable-Chat-App.git",
    features: ["Developed in monorepo environment", "Real-time chat functionality", "Scalable and efficient", "Using Redis for pub/sub", "Using SQLite for database", "using prisma for ORM"],
    detailedDescription:
      "This chat application is a robust and scalable solution built using modern full-stack technologies. The frontend is developed with Next.js, offering a seamless user experience with fast rendering and dynamic content. The backend is powered by Express.js, providing a flexible and efficient server environment.The application employs Redis for Pub/Sub to enable real-time messaging between users, ensuring low-latency communication. SQLite is used as the database, providing a lightweight and self-contained storage solution, while Prisma acts as the ORM, offering type-safe database access and simplifying database management.The project is organized using Turborepo, enabling efficient monorepo management, ensuring modularity, and optimizing build and deployment processes. This architecture allows for easy scaling and maintainability, making it suitable for both small teams and large-scale production environments.",
  },
];

//////////////////////////////

export const skills = [
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    name: "NextJS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    name: "React",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    name: "TailwindCSS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    name: "JavaScript",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    name: "TypeScript",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    name: "Git",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
    name: "Kubernetes",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    name: "Linux",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
    name: "Jenkins",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
    name: "Terraform",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg",
    name: "Ansible",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    name: "Python",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    name: "Docker",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    name: "Java",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    name: "AWS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg",
    name: "Prometheus",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/argocd/argocd-original.svg",
    name: "ArgoCD",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
  },
];

////////////////
export const animes = [
  {
    title: "Mashle",
    image:
      "https://img.flawlessfiles.com/_r/300x400/100/55/54/555402a1a926576655f4e11fcb69fdb1/555402a1a926576655f4e11fcb69fdb1.jpg",
    description: "Magic is casually used by everyone.",
    url: "https://aniwatch.to/mashle-magic-and-muscles-season-2-18874?ref=search",
    tag: "Top",
    release_date: "2022",
  },
  {
    title: "Solo Leveling",
    image:
      "https://img.flawlessfiles.com/_r/300x400/100/b1/47/b147d331e311a5d5c8ee81269725fc92/b147d331e311a5d5c8ee81269725fc92.png",
    description: "Ordinary people received superhuman powers.",
    url: "https://aniwatch.to/solo-leveling-18718?ref=search",
    tag: "Top",
    release_date: "2023",
  },
  {
    title: "Jujutsu Kaisen",
    image:
      "https://img.flawlessfiles.com/_r/300x400/100/b5/1f/b51f863b05f30576cf9d85fa9b911bb5/b51f863b05f30576cf9d85fa9b911bb5.png",
    description: "Throughout Heaven and Earth, I Alone Am The Honored One",
    url: "https://aniwatch.to/jujutsu-kaisen-2nd-season-18413?ref=search",
    tag: "Trending",
    release_date: "2021",
  },
  {
    title: "Naruto",
    image:
      "https://img.flawlessfiles.com/_r/300x400/100/9c/bc/9cbcf87f54194742e7686119089478f8/9cbcf87f54194742e7686119089478f8.jpg",
    description: "I will become hokage one day!",
    url: "https://aniwatch.to/naruto-shippuden-355?ref=search",
    release_date: "2002",
    tag: "Popular",
  },
  {
    title: "Your Name",
    image:
      "https://img.flawlessfiles.com/_r/300x400/100/16/ee/16eec56baf8f3fcc6430607f58ce3d12/16eec56baf8f3fcc6430607f58ce3d12.jpg",
    description: "Story of a high School in tokyo.",
    url: "https://aniwatchtv.to/your-name-10?ref=search",
    release_date: "2016",
    tag: "Movie",
  },
];

///////
export const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jatin-kumar-395600229/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg",
  },
  {
    name: "Github",
    url: "https://github.com/JATINKUMAR1008",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    name: "Email",
    url: "mailto:jatinkumar1008@outlook.com",
    icon: "https://cdn-icons-png.flaticon.com/512/3621/3621435.png",
  },
];
