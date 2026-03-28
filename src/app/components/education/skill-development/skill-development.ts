import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-skill-development',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './skill-development.html',
  styleUrl: './skill-development.scss',
})
export class SkillDevelopment {
  skills = [
    {
      title: 'Drone Education',
      desc: 'Learn drone mechanics, flight principles, regulations, and real-world UAV applications.',
      icon: '🛸'
    },
    {
      title: 'Robotics',
      desc: 'Hands-on robotics training covering design, programming, and industrial automation.',
      icon: '🤖'
    },
    {
      title: 'AI & Machine Learning',
      desc: 'Applied AI/ML for UAV analytics, computer vision, and autonomous flight systems.',
      icon: '🧠'
    }
  ];
}
