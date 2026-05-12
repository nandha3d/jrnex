import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  mission = "To empower industries with next-generation drone and robotic solutions that drive efficiency, safety, and sustainable growth through autonomous intelligence.";
  vision = "To be the global leader in full-spectrum aerial robotics and education — setting the standard for innovation in the autonomous technology landscape.";

  stats = [
    { value: '50+', label: 'Certified Pilots Trained' },
    { value: '6+', label: 'Industry Sectors' },
    { value: '10+', label: 'Drone Platforms' },
    { value: '5+', label: 'Years Experience' },
  ];

  milestones = [
    { year: '2020', title: 'The Spark', desc: 'JRNEX founded in Marthandam with a mission to democratize drone intelligence for Indian industries.' },
    { year: '2021', title: 'First Commercial Flight', desc: 'Completed our first large-scale agricultural survey, covering 500+ acres in a single deployment.' },
    { year: '2022', title: 'R&D Breakthrough', desc: 'Launched our proprietary AI-powered analytics engine for real-time crop health monitoring.' },
    { year: '2023', title: 'DGCA RPTO Approved', desc: 'Became an authorized Remote Pilot Training Organisation, training the next generation of drone pilots.' },
    { year: '2024', title: 'Industry Expansion', desc: 'Expanded into mining, industrial inspection, and 3D mapping — serving clients across Tamil Nadu and beyond.' },
    { year: '2025', title: 'Full-Spectrum Platform', desc: 'Launched integrated hardware-software platform combining custom drones, cloud analytics, and IoT sensors.' },
  ];

  values = [
    { title: 'Innovation', desc: 'We push the boundaries of what is possible with aerial technology, constantly iterating to stay ahead of the curve.' },
    { title: 'Integrity', desc: 'Safety and ethics are at the core of every flight and every line of code we write.' },
    { title: 'Impact', desc: 'We measure our success by the tangible value we create for our clients and communities.' },
    { title: 'Excellence', desc: 'From engineering to customer service, we pursue the highest standard in everything we do.' },
  ];

  reasons = [
    { icon: '🛩️', title: 'Custom Hardware', desc: 'Proprietary drone platforms designed for Indian terrain and climate conditions.' },
    { icon: '🧠', title: 'AI-First Approach', desc: 'Every solution is powered by machine learning models trained on millions of aerial data points.' },
    { icon: '🔒', title: 'DGCA Compliant', desc: 'Fully licensed and insured operations with certified remote pilots.' },
    { icon: '📊', title: 'End-to-End Solutions', desc: 'From flight planning to final analytics report — we handle the entire pipeline.' },
    { icon: '🌱', title: 'Sustainability Focus', desc: 'Our technology helps reduce chemical usage, optimize resources, and promote sustainable practices.' },
    { icon: '🎓', title: 'Training & Education', desc: 'India\'s leading RPTO offering comprehensive drone pilot certification programs.' },
  ];

  team = [
    { name: 'Dr. Arjun Mehta', role: 'CEO & Founder', bio: 'Aerospace engineer with 15+ years in UAV design.' },
    { name: 'Sarah Jenkins', role: 'CTO', bio: 'Expert in AI/ML and autonomous systems.' },
    { name: 'Vikram Singh', role: 'Head of Operations', bio: 'Former military drone pilot with extensive field experience.' },
  ];
}
