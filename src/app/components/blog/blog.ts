import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog {
  posts = [
    {
      title: 'The Future of AI in Agriculture',
      date: 'March 15, 2026',
      excerpt: 'How machine learning is revolutionizing crop monitoring and precision farming.',
      category: 'Technology',
      img: 'assets/hero-drone-windmill.png'
    },
    {
      title: 'Safeguarding Energy Infrastructure',
      date: 'February 28, 2026',
      excerpt: 'A deep dive into autonomous drone inspections for wind turbines and solar farms.',
      category: 'Case Study',
      img: 'assets/hero-windmill.png'
    },
    {
      title: 'Drone Pilot Fundamentals',
      date: 'February 10, 2026',
      excerpt: 'Everything you need to know about starting your career as a certified UAV pilot.',
      category: 'Education',
      img: 'assets/hero-education.png'
    }
  ];
}
