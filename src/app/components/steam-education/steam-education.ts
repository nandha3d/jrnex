import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-steam-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './steam-education.html',
  styleUrls: ['./steam-education.scss']
})
export class SteamEducation {

  labImages = [
    { src: 'assets/steam-lab-main.png', alt: 'JRNEX Technologies Model Lab - Main View' },
    { src: 'assets/steam-lab-closeup.png', alt: 'JRNEX Technologies Lab - Hands-on Learning' },
    { src: 'assets/robotics.avif', alt: 'JRNEX Robotics Equipment' },
  ];

  serviceCards = [
    {
      emoji: '🚀',
      image: 'assets/robotics.avif',
      title: 'Futuristic Workshops',
      summary: 'Interactive hands-on learning where students explore robotics, drones, IoT systems, and flight simulation.',
      fullContent: 'Experience the future of technology with JRNEX Technologies Futuristic Workshops — designed to inspire, engage, and transform students into innovators. Our workshops provide a highly interactive, hands-on learning experience where students explore cutting-edge technologies such as robotics, drones, IoT systems, fixed-wing aircraft, and flight simulation. These sessions go beyond traditional classroom learning, allowing students to build, experiment, and understand real-world applications of science and engineering.',
      highlights: [
        'Hands-on Robotics & AI Activities',
        'Drone Technology & Flight Demonstrations',
        'Fixed-Wing Aircraft Concepts',
        'IoT-Based Smart Projects',
        'Real-Time Flight Simulation Experience'
      ],
      tagline: 'JRNEX workshops are not just sessions — they are a gateway to future careers in technology and innovation.'
    },
    {
      emoji: '🤖',
      image: 'assets/steam-lab-closeup.png',
      title: 'STEM Exhibitions',
      summary: 'A platform where young minds showcase creativity, skills, and technological excellence through live demos.',
      fullContent: 'JRNEX Technologies proudly presents STEM Innovation Exhibitions — a platform where young minds showcase their creativity, skills, and technological excellence. Our exhibitions are designed to bring innovation to life, where students present projects in robotics, IoT, drones, automation, and AI. These events create an inspiring environment that encourages students to think beyond textbooks and demonstrate real-world solutions.',
      highlights: [
        'Student-Built Robotics & IoT Projects',
        'Live Drone & Aviation Demonstrations',
        'Innovation Showcases & Competitions',
        'Industry-Level Project Exposure',
        'Recognition & Certification Opportunities'
      ],
      tagline: 'JRNEX exhibitions turn students into creators, innovators, and future tech leaders.'
    },
    {
      emoji: '🛠️',
      image: 'assets/steam-lab-main.png',
      title: 'Project Assistance',
      summary: 'Complete support from concept to execution — helping students build real-world innovations across robotics and IoT.',
      fullContent: 'At JRNEX Technologies, we provide complete project assistance to help students turn their ideas into impactful, real-world innovations. From concept development to final execution, our expert team supports students in building projects across robotics, drones, IoT, embedded systems, and automation. We ensure every project is practical, industry-relevant, and innovation-driven.',
      highlights: [
        'Idea Development & Project Planning',
        'Hardware & Software Guidance',
        'Drone & Aviation-Based Projects',
        'IoT & Smart System Development',
        'Final Testing, Documentation & Presentation'
      ],
      tagline: 'We don\'t just help complete projects — we help build innovators.'
    },
    {
      emoji: '👨‍🏫',
      image: 'assets/hero-education.avif',
      title: 'Teachers Training',
      summary: 'Specialized programs empowering educators with modern STEAM teaching skills and practical methodologies.',
      fullContent: 'Empowering educators is key to building future-ready students. JRNEX Technologies offers specialized Teacher Training Programs to equip educators with the knowledge and skills required for modern STEAM education. Our training focuses on practical teaching methods, emerging technologies, and hands-on implementation strategies that can be directly applied in classrooms.',
      highlights: [
        'Robotics & Coding Fundamentals',
        'Drone Technology & Aviation Basics',
        'IoT & Smart Learning Systems',
        'Hands-On Teaching Methodologies',
        'Curriculum Integration & Lab Setup'
      ],
      tagline: 'With JRNEX, teachers become facilitators of innovation, not just instructors.'
    }
  ];

  activeCardIndex: number | null = null;

  get activeCard() {
    return this.activeCardIndex !== null ? this.serviceCards[this.activeCardIndex] : null;
  }

  openCard(index: number) {
    this.activeCardIndex = index;
    document.body.style.overflow = 'hidden';
  }

  closeCard() {
    this.activeCardIndex = null;
    document.body.style.overflow = '';
  }

  whyUsFeatures = [
    { icon: '⚛️', title: 'Interdisciplinary Framework', desc: 'We blend science, technology, engineering, arts, and mathematics into a cohesive curriculum designed to build dynamic problem-solving skills.' },
    { icon: '👥', title: 'Tailored Educational Journeys', desc: 'We adapt to each student\'s unique strengths and interests, empowering them to follow their passions and reach their full potential.' },
    { icon: '🖥️', title: 'Immersive Practical Application', desc: 'We emphasize experiential learning by immersing students in real-world projects, robotics building, and interactive, hands-on challenges.' },
    { icon: '🏅', title: 'Industry-Leading Mentorship', desc: 'Our team consists of seasoned educators and active industry professionals dedicated to delivering top-tier STEAM instruction.' }
  ];
}
