/**
 * RPTO Component
 * --------------
 * Dedicated page for JRNEX's Remote Pilot Training Organization (RPTO).
 * Route: /rpto
 *
 * Sections rendered:
 *   1. Hero         — dark-gradient with headline, CTAs, and "Coming Soon" badge for Small Class
 *   2. Intro        — two-column grid explaining JRNEX's RPTO journey
 *   3. Offerings    — 5-card grid listing what JRNEX RPTO offers
 *   4. Coming Soon  — prominent banner for Small Class Drone License announcement
 *   5. Benefits     — 4-card grid with key differentiators
 *   6. Closing CTA  — dark-gradient call-to-action for enrollment
 *
 * Theme: Uses the JRNEX brand blue (#3b82f6) for accent consistency.
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rpto',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './rpto.html',
  styleUrl: './rpto.scss',
})
export class Rpto {

  /**
   * offerings — 5-card data for the "What We Offer" section.
   * Each offering represents a key training program or service
   * provided by the JRNEX RPTO.
   */
  offerings = [
    {
      title: 'DGCA-Certified Training',
      desc: 'Approved courses for beginners and professionals, fully compliant with Directorate General of Civil Aviation standards.',
      icon: '📜'
    },
    {
      title: 'Hands-On Flight Training',
      desc: 'Real-world flying experience with advanced drones and professional instructors at our flight base.',
      icon: '🛩️'
    },
    {
      title: 'AI & Automation Modules',
      desc: 'Training on AI-integrated drones and autonomous operations for next-gen UAV expertise.',
      icon: '🤖'
    },
    {
      title: 'Industry-Specific Programs',
      desc: 'Specialized courses for surveying, agriculture, surveillance, and delivery drones.',
      icon: '🎯'
    },
    {
      title: 'Job & Business Guidance',
      desc: 'Helping pilots enter the drone industry as professionals or entrepreneurs.',
      icon: '💼'
    }
  ];

  /**
   * benefits — 4-card data for the "Why Train with JRNEX?" section.
   * Highlights the competitive advantages of choosing JRNEX's RPTO.
   */
  benefits = [
    {
      title: 'DGCA Approved',
      desc: 'Official government-recognized certification for commercial drone operations.',
      icon: '✅'
    },
    {
      title: 'Expert Instructors',
      desc: 'Learn from industry veterans with thousands of cumulative flight hours.',
      icon: '👨‍✈️'
    },
    {
      title: 'Advanced Simulators',
      desc: 'AI-powered VR and desktop simulators for risk-free skill development.',
      icon: '🎮'
    },
    {
      title: 'Career Launchpad',
      desc: 'High demand across agriculture, surveying, defense, logistics, and disaster management.',
      icon: '🚀'
    }
  ];
}
