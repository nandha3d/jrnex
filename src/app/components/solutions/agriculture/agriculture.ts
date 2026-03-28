/**
 * Agriculture Component
 * ---------------------
 * Dedicated service page for JRNEX's Digital Agriculture & Precision Farming offering.
 * Route: /solutions/agriculture
 *
 * Sections rendered:
 *   1. Hero — dark-gradient with floating particles, headline, CTAs, and impact stats
 *   2. Intro — two-column grid with floating NDVI / Soil-Moisture data cards
 *   3. Process Timeline — 5-step vertical timeline explaining the AI drone mapping workflow
 *   4. Benefits Grid — 4-card grid highlighting key value propositions
 *   5. Closing CTA — dark-gradient call-to-action with glow effect
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-agriculture',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './agriculture.html',
  styleUrl: './agriculture.scss',
})
export class Agriculture {

  /**
   * steps — 5-step process data for the "How AI-Driven Drone Mapping Works" timeline.
   * Each step includes a sequential number, emoji icon, title, and description.
   */
  steps = [
    {
      num: '01',
      title: 'High-Resolution Data Collection',
      desc: 'Our drones conduct aerial surveys, capturing detailed multispectral and thermal images of farmlands.',
      icon: '🛰️'
    },
    {
      num: '02',
      title: 'AI-Powered Analysis',
      desc: 'Using machine learning models, we analyze the data to detect crop stress, nutrient deficiencies, pest infestations, and irrigation issues before they become critical.',
      icon: '🤖'
    },
    {
      num: '03',
      title: 'NDVI & Vegetation Mapping',
      desc: 'The AI processes Normalized Difference Vegetation Index (NDVI) maps to assess plant health, growth patterns, and yield potential with high accuracy.',
      icon: '🌱'
    },
    {
      num: '04',
      title: 'Predictive Insights & Automation',
      desc: 'AI-driven predictive analytics forecast yield trends, disease outbreaks, and optimal fertilization schedules, helping farmers make data-backed decisions.',
      icon: '📈'
    },
    {
      num: '05',
      title: 'Precision Agriculture Solutions',
      desc: 'By identifying problem areas in real-time, farmers can optimize pesticide and fertilizer use, reduce water wastage, and improve overall productivity while lowering operational costs.',
      icon: '🎯'
    }
  ];

  /**
   * benefits — 4-card data for the "Why JRNEX for Agricultural Mapping?" section.
   * Each benefit includes an emoji icon, title, and short description.
   */
  benefits = [
    {
      title: 'Early Detection & Prevention',
      desc: 'AI helps identify issues before they impact crop yield.',
      icon: '🔬'
    },
    {
      title: 'Cost-Effective & Scalable',
      desc: 'Reduces the need for manual labor and excessive input costs.',
      icon: '💰'
    },
    {
      title: 'Sustainable Farming',
      desc: 'Optimizes resources, reducing environmental impact.',
      icon: '🌿'
    },
    {
      title: 'Faster Decision-Making',
      desc: 'Real-time insights empower farmers to act quickly.',
      icon: '⚡'
    }
  ];
}
