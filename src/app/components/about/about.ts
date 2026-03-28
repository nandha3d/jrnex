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
  mission = "To democratize aerial intelligence and empower industries across India with cutting-edge drone technology, AI-driven analytics, and world-class training.";
  vision = "To be India's most trusted full-spectrum drone technology and education company — bridging the gap between innovation and real-world impact.";

  team = [
    { name: 'Dr. Arjun Mehta', role: 'CEO & Founder', bio: 'Aerospace engineer with 15+ years in UAV design.' },
    { name: 'Sarah Jenkins', role: 'CTO', bio: 'Expert in AI/ML and autonomous systems.' },
    { name: 'Vikram Singh', role: 'Head of Operations', bio: 'Former military drone pilot with extensive field experience.' },
  ];

  values = [
    { title: 'Innovation', desc: 'We push the boundaries of what is possible with aerial technology.' },
    { title: 'Integrity', desc: 'Safety and ethics are at the core of every flight and every line of code.' },
    { title: 'Impact', desc: 'We measure our success by the tangible value we create for our clients.' },
  ];
}
