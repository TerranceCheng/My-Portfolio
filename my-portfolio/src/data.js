import profileImg from './assets/profile.png'
import threatsight from './assets/threatsight.jpg'
import drowsiness1 from './assets/drowsiness1.jpg'
import drowsiness2 from './assets/drowsiness2.jpg'
import drowsiness3 from './assets/drowsiness3.jpg'
import geolocateImg1 from './assets/geolocate1.jpg'
import geolocateImg2 from './assets/geolocate2.jpg'
import geolocateImg3 from './assets/geolocate3.jpg'
import pakabuImg from './assets/pakabu.jpg'
import pakabu2 from './assets/pakabu2.jpg'
import pakabu3 from './assets/pakabu3.jpg'
import pakabu4 from './assets/pakabu4.jpg'
import pakabu5 from './assets/pakabu5.jpg'
import pakabu6 from './assets/pakabu6.jpg'
import coinsumming from './assets/coinsumming.jpg'

export const profile = {
  name: 'Terrance Cheng Yong Tat',
  firstName: 'Terrance',
  role: 'Fullstack Software Developer',
  company: 'Auto Count Sdn. Bhd.',
  location: 'Klang, Selangor',
  phone: '+6018-314 5575',
  email: 'yongtat.cheng@gmail.com',
  github: 'https://github.com/TerranceCheng',
  linkedin: 'https://www.linkedin.com/in/terrance516/',
  resume:
    'https://drive.google.com/file/d/1ociBClF6KPcitfrppZsBVBdPANRA69We/view?usp=sharing',

  intro:
    'I build and maintain POS systems, payment integrations, and delivery platform syncs, along with backend APIs and deployment. Most of my work involves handling edge cases, writing clean validation logic, and making sure database queries stay fast when traffic picks up.',

  about:
    'I have around two years of experience working on retail and F&B software used daily by shops across Malaysia and the Philippines. My main stack is <b>C#</b> and <b>.NET Core</b>, with <b>PostgreSQL</b> and <b>SQL Server</b> for data, and <b>Docker</b>, <b>Jenkins</b>, and <b>Huawei Cloud</b> for builds and deployment. When needed, I also write <b>Python</b> scripts for automation and work on frontend features in <b>React</b> or <b>React Native</b>.',

  aboutSide:
    'Outside of my main work, I build small apps occasionally to train myself on how to properly scope open-ended problems, plan the architecture before jumping into code, and making sure the software works as expected.',
  
  image: profileImg,
  languages: ['English, ', 'Malay, ', 'Chinese (Mandarin, Hokkien)'],
  motto: 'if (alive) { tryYourBest() }',
}

export const coreStack = [
  'C#',
  '.NET Core',
  'ASP.NET Core',
  'PostgreSQL',
  'SQL Server',
  'Docker',
  'Jenkins',
  'Huawei Cloud',
]

export const skillGroups = [
  {
    id: 'languages',
    title: 'Languages',
    items: ['C#', 'Python', 'JavaScript', 'T-SQL', 'XML'],
  },
  {
    id: 'backend',
    title: 'Backend',
    items: ['.NET Core', 'ASP.NET Core', 'WinForms', 'REST APIs', 'Webhooks', 'Node.js'],
  },
  {
    id: 'database',
    title: 'Databases',
    items: ['PostgreSQL', 'SQL Server', 'Query tuning'],
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    items: ['Docker', 'Jenkins', 'Huawei Cloud', 'Kubernetes', 'CI/CD'],
  },
  {
    id: 'frontend',
    title: 'Frontend & Mobile',
    items: ['React', 'React Native', 'HTML/CSS'],
  },
  {
    id: 'ml',
    title: 'Scripting & Automation',
    items: ['Python', 'File parsers', 'OpenCV', 'YOLOv8'],
  },
]

export const stats = [
  { value: '2+', label: 'years in software development' },
  { value: '3.96 / 3.87', label: 'CGPA (Diploma / Bachelor’s)' },
  { value: '8+', label: 'third-party integrations shipped' },
  { value: 'Top 30', label: 'International Battle of Hackers 2024' },
]

export const experience = [
  {
    id: 'autocount',
    role: 'Software Developer',
    company: 'Auto Count Sdn. Bhd.',
    period: 'Jan 2025 – Present',
    type: 'Full-time',
    summary:
      'Developing and maintaining POS and F&B retail software used by merchants in Malaysia and the Philippines.',
    items: [
      {
        title: 'POS & F&B retail systems',
        bullets: [
          'Maintain live AutoCount POS systems in WinForms and .NET Core, fixing bugs and adding requested features.',
          'Integrated payment gateways including Adaptis, RHBDNQR, NTT Data PayHereDirect, and CardBiz so cashiers can take payments directly at the counter.',
          'Added support for BINGKAS subsidy and MyKasih payment handling for participating retail stores.',
          'Built plugins that automatically send daily sales data to five major shopping malls in the Philippines, replacing manual report submissions.',
          'Improved overall stability by handling validations properly on the server and fine-tuning slow SQL queries.',
        ],
        tech: ['C#', '.NET (WinForms & .NET Core)', 'SQL Server', 'DevExpress'],
      },
      {
        title: 'Food delivery integrations',
        bullets: [
          'Handled the integration between our F&B system and food delivery platforms (Foodpanda and GrabFood).',
          'Built REST APIs to keep menus, prices, table statuses, and incoming delivery orders in sync with the POS.',
          'Set up webhooks with signature checks, automatic retries, and local storage to make sure orders never get dropped during lunch and dinner rushes.',
          'Optimised database queries in the order pipeline, cutting execution time by about 15% per 10,000 records.',
          'Packaged services into Docker containers and deployed them via Jenkins pipelines to Huawei Cloud.',
        ],
        tech: [
          'C#',
          'ASP.NET Core',
          'PostgreSQL',
          'Docker',
          'Kubernetes',
          'Jenkins',
          'Huawei Cloud',
          'RESTful API',
        ],
      },
      {
        title: 'OneSales QR Ordering',
        bullets: [
          'Maintain and enhance QR Ordering features according to business requirements requested by stakeholders.',
          'Handle daily troubleshooting with the support team to resolve restaurant operational issues during service hours.',
          'Enhanced the home page UI and added item filtering for menus.',
          'Reworked payment gateway responses so diners get a clear message when a payment fails instead of a silent error.',
        ],
        tech: [
          'React',
          'C#',
          'ASP.NET Core',
          'PostgreSQL',
          'RESTful API',
          'Docker',
          'Jenkins',
          'Huawei Cloud',
        ],
      },
      {
        title: 'eWaiter (React Native)',
        bullets: [
          'Maintained the React Native eWaiter app used by restaurant staff to take orders at tables.',
          'Reworked parts of the ordering flow to cut down the steps needed for common items and reduce ordering mistakes during busy hours.',
        ],
        tech: ['React Native', 'Node.js', 'JavaScript'],
      },
    ],
  },
  {
    id: 'blueocean',
    role: 'Software Engineer Intern',
    company: 'Blue Ocean IT Sdn. Bhd.',
    period: 'Jun 2024 – Aug 2024',
    type: 'Internship',
    summary:
      'Worked on an LHDN e-invoicing management system built for the October 2024 rollout.',
    items: [
      {
        title: 'LHDN e-invoice system',
        bullets: [
          'Wrote parsers to read CSV files in different formats and convert them into the required XML format for LHDN.',
          'Connected the system to the official LHDN API to submit and validate invoices automatically.',
          'Built 7 out of the 9 main user interface screens in C# .NET.',
          'Used iTextSharp to generate PDF invoices and added a simple dashboard to show document counts and status.',
          'Set up the connection between the C# frontend and a Python backend service that handled automated submissions.',
        ],
        tech: ['C#', '.NET', 'Python', 'iTextSharp', 'LHDN API', 'XML'],
      },
    ],
  },
]

export const projects = [
  {
    id: 'threatsight',
    title: 'ThreatSight',
    subtitle: 'Weapon detection system',
    category: 'Desktop Application',
    featured: true,
    description:
      'A desktop app that monitors live camera feeds to detect handguns, rifles, knives, grenades, and missiles, reaching an average precision of 82%. It logs detected events with user IDs and sends alerts through email (SendGrid) and desktop notifications.',
    tech: ['Python', 'YOLOv8', 'OpenCV', 'PyQt5', 'SendGrid', 'SQLite3'],
    images: [threatsight],
    video: 'https://www.youtube.com/watch?v=-FrFwJMx2z4',
    links: { github: '', demo: '' },
  },
  {
    id: 'drowsiness',
    title: 'Drowsiness Detection',
    subtitle: 'Computer vision model',
    category: 'Computer Vision',
    description:
      'A YOLOv8 model trained on 6,770 images over 50 epochs to detect driver drowsiness and fatigue, reaching about 98% test accuracy.',
    tech: ['Python', 'YOLOv8', 'OpenCV'],
    images: [drowsiness1, drowsiness2, drowsiness3],
    video: '',
    links: { github: '', demo: '' },
  },
  {
    id: 'coinsum',
    title: 'Coin Summing System',
    subtitle: 'Coin counting desktop tool',
    category: 'Image Recognition',
    description:
      'Allow user to upload a photo of mixed coins (Old/New), detects each coin type using computer vision, and calculates the total amount.',
    tech: ['Python', 'OpenCV', 'Tkinter', 'NumPy'],
    images: [coinsumming],
    video: 'https://www.youtube.com/watch?v=vTYvboyP9uw',
    links: { github: '', demo: '' },
  },
  {
    id: 'geolocate',
    title: 'GeoLocate',
    subtitle: 'Geography learning app',
    category: 'Mobile Application',
    description:
      'A mobile app where users can select countries to look up facts, take geography quizzes, and save countries to their favourites list.',
    tech: ['Dart', 'Flutter', 'REST APIs'],
    images: [geolocateImg1, geolocateImg2, geolocateImg3],
    video: 'https://www.youtube.com/watch?v=8PFMBWktkp0',
    links: { github: '', demo: '' },
  },
  {
    id: 'pakabu',
    title: 'Pak Abu Burger Stall',
    subtitle: 'Small vendor POS app',
    category: 'Mobile Application',
    description:
      'An Android app built for food stall owners to ring up orders, calculate totals and change, save transactions locally, and view daily sales summaries.',
    tech: ['Java', 'Android Studio', 'SQLite'],
    images: [pakabuImg, pakabu2, pakabu3, pakabu4, pakabu5, pakabu6],
    video: '',
    links: { github: '', demo: '' },
  }
]

export const education = [
  {
    id: 'bachelor',
    degree: 'Bachelor in Information Technology (Hons), Software Engineering',
    school: 'SEGi University, Kota Damansara',
    period: 'Feb 2023 – Dec 2024',
    highlights: ['CGPA 3.87', "Dean's List - Aug 2023", "Dean's List - May 2024", "Dean's List - Aug 2024", 'Project leader of volunteer programme to Turtle Conservation and Information Centre Melaka on Jul 2023'],
  },
  {
    id: 'diploma',
    degree: 'Diploma in Information Technology',
    school: 'SEGi College Subang Jaya',
    period: 'Apr 2020 – Dec 2022',
    highlights: ['CGPA 3.96', "Dean's List - Dec 2021", "Dean's List - May 2022", "Graduated with High Distinction"],
  },
]

export const awards = [
  {
    title: 'Top 30, International Battle of Hackers (IBOH) 2024',
    detail: 'Ranked among universities nationwide.',
  },
  {
    title: 'Valedictorian, 22nd Convocation Ceremony',
    detail: 'SEGi College Subang Jaya.',
  },
  {
    title: 'Best Student, 2023 Batch',
    detail: 'Awarded in the 22nd graduating class.',
  },
]
