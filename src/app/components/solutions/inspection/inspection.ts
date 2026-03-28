/**
 * Inspection Component
 * --------------------
 * Dedicated service page for JRNEX's AI-Powered Drone Inspections
 * for Windmills & Energy Infrastructure.
 * Route: /solutions/inspection
 *
 * Sections rendered:
 *   1. Hero         — dark-gradient with floating particles, headline, CTAs, and impact stats
 *   2. Intro        — two-column grid with floating data cards (Defect Accuracy, Downtime Saved)
 *   3. Process      — 5-step vertical timeline explaining the AI inspection workflow
 *   4. Applications — 4-card grid showing key industry use-cases
 *   5. Benefits     — 4-card grid highlighting competitive advantages
 *   6. Closing CTA  — dark-gradient call-to-action with glow effect
 *
 * Theme: Uses the JRNEX brand blue (#3b82f6) for accent consistency.
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inspection',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inspection.html',
  styleUrl: './inspection.scss',
})
export class Inspection {

  /**
   * steps — 5-step process data for the "How AI-Powered Drone Inspections Work" timeline.
   * Each entry includes:
   *   - num:   step number (displayed in the timeline connector circle)
   *   - icon:  emoji icon rendered above the card title
   *   - title: short heading for the step
   *   - desc:  detailed explanation of the step
   */
  steps = [
    {
      num: '01',
      title: 'Autonomous Data Collection',
      desc: 'Drones equipped with RGB, infrared, and LiDAR sensors capture high-resolution imagery and thermal scans of wind turbines, solar panels, and power lines.',
      icon: '🛰️'
    },
    {
      num: '02',
      title: 'AI-Based Defect Detection & Fault Prediction',
      desc: 'Machine learning models analyze data in real-time, identifying blade erosion, cracks, lightning damage, loose components, solar panel hotspots, and electrical failures before they escalate.',
      icon: '🧠'
    },
    {
      num: '03',
      title: '3D Digital Twin & Predictive Analytics',
      desc: 'AI processes drone-captured data to create 3D models and digital twins, enabling engineers to simulate wear patterns and predict maintenance needs.',
      icon: '🏗️'
    },
    {
      num: '04',
      title: 'Real-Time Insights & Automated Reporting',
      desc: 'AI-powered analytics integrate with SCADA and GIS platforms, providing instant fault classification, risk assessment, and actionable recommendations.',
      icon: '📊'
    },
    {
      num: '05',
      title: 'Non-Disruptive & Highly Efficient',
      desc: 'AI automation reduces turbine downtime by 50%, eliminates the need for rope access, and accelerates inspections by 70%, making large-scale assessments seamless.',
      icon: '⚡'
    }
  ];

  /**
   * applications — 4-card data for the "Key Applications" section.
   * Each card represents a specific energy-sector use-case for drone inspections.
   */
  applications = [
    {
      title: 'AI-Driven Wind Turbine Inspections',
      desc: 'Detects blade cracks, leading-edge erosion, tower corrosion, and drivetrain issues for optimized efficiency.',
      icon: '🌀'
    },
    {
      title: 'AI-Powered Solar Farm Monitoring',
      desc: 'Identify thermal anomalies, shading issues, and defective panels to maximize energy output.',
      icon: '☀️'
    },
    {
      title: 'Power Line & Grid AI Analysis',
      desc: 'Assess overhead transmission lines, substations, and transformers for insulation breakdowns, vegetation encroachment, and electrical faults.',
      icon: '⚡'
    },
    {
      title: 'Smart Thermal Imaging & Energy Audits',
      desc: 'AI detects heat leaks, inefficiencies, and load imbalances, enhancing energy performance.',
      icon: '🌡️'
    }
  ];

  /**
   * benefits — 4-card data for the "Why JRNEX?" section.
   * Highlights the competitive advantages of JRNEX's AI-powered energy inspections.
   */
  benefits = [
    {
      title: 'High-Accuracy AI Imaging',
      desc: '4K, thermal, and LiDAR sensors combined with AI for precise defect analysis.',
      icon: '🎯'
    },
    {
      title: 'Automated & Safe',
      desc: 'Reduces human risk and minimizes operational downtime.',
      icon: '🛡️'
    },
    {
      title: 'Predictive Maintenance',
      desc: 'AI-driven fault prediction reduces maintenance costs by up to 60% and prevents unexpected failures.',
      icon: '💰'
    },
    {
      title: 'Regulatory Compliance',
      desc: 'Adheres to DGCA safety standards and integrates with energy monitoring systems.',
      icon: '✅'
    }
  ];
}
