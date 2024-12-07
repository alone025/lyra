import { Project } from '../types';

export const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with React and Node.js, featuring real-time inventory management and secure payment processing.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: 'https://example.com/ecommerce'
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    description: 'A secure mobile banking application developed for iOS and Android using React Native, featuring biometric authentication and real-time transactions.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
    link: 'https://example.com/banking'
  },
  {
    id: '3',
    title: 'AI-Powered Analytics Dashboard',
    description: 'An intelligent analytics dashboard that uses machine learning to provide predictive insights and data visualization for business metrics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    technologies: ['Python', 'TensorFlow', 'React', 'D3.js'],
    link: 'https://example.com/analytics'
  },
  {
    id: '4',
    title: 'Smart Home Automation System',
    description: 'IoT-based home automation system with mobile app control, supporting various smart devices and energy consumption monitoring.',
    image: 'https://images.unsplash.com/photo-1558002038-bb4237b54c7f?auto=format&fit=crop&w=800&q=80',
    technologies: ['IoT', 'React', 'Node.js', 'MQTT'],
    link: 'https://example.com/smarthome'
  },
  {
    id: '5',
    title: 'Enterprise Resource Planning System',
    description: 'Comprehensive ERP solution for manufacturing companies, featuring inventory management, HR, and financial reporting modules.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    technologies: ['Angular', '.NET Core', 'SQL Server', 'Redis'],
    link: 'https://example.com/erp'
  },
  {
    id: '6',
    title: 'Educational Learning Platform',
    description: 'Interactive e-learning platform with video courses, quizzes, and progress tracking for students and educators.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80',
    technologies: ['Vue.js', 'Django', 'PostgreSQL', 'WebRTC'],
    link: 'https://example.com/elearning'
  }
];