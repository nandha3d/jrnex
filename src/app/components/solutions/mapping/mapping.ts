/**
 * Mapping Component
 * -----------------
 * Dedicated service page for JRNEX's LiDAR Mapping & Surveying offering.
 * Route: /solutions/mapping
 *
 * Sections rendered:
 *   1. Hero — dark-gradient with floating particles, headline, CTAs, and impact stats
 *   2. Intro — two-column grid with floating data cards (Point Cloud, Survey Speed)
 *   3. Process Timeline — 5-step vertical timeline explaining the drone survey workflow
 *   4. Applications Grid — 5-card grid showing industry use-cases
 *   5. Benefits Grid — 4-card grid highlighting key advantages
 *   6. Closing CTA — dark-gradient call-to-action with glow effect
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mapping',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mapping.html',
  styleUrl: './mapping.scss',
})
export class Mapping {

  /**
   * steps — 5-step process data for the "How Our AI-Driven Drone Surveys Work" timeline.
   * Each step includes a sequential number, emoji icon, title, and description.
   */
  steps = [
    {
      num: '01',
      title: 'High-Resolution Data Acquisition',
      desc: 'Our UAVs, equipped with RGB, LiDAR, and multispectral sensors, capture georeferenced images and point cloud data with sub-centimeter precision.',
      icon: '🛰️'
    },
    {
      num: '02',
      title: 'AI-Based Processing & 3D Reconstruction',
      desc: 'Using computer vision and machine learning algorithms, we generate high-density point clouds, digital elevation models (DEMs), digital surface models (DSMs), and orthomosaics for precise terrain analysis.',
      icon: '🤖'
    },
    {
      num: '03',
      title: 'Automated Feature Detection & Change Analysis',
      desc: 'AI detects topographic variations, structural shifts, land encroachments, and vegetation growth, reducing manual errors and improving accuracy.',
      icon: '📡'
    },
    {
      num: '04',
      title: 'Cloud-Based GIS Integration & Real-Time Insights',
      desc: 'Processed data is integrated into GIS platforms for real-time visualization, allowing automated contouring, volumetric analysis, and predictive modeling.',
      icon: '☁️'
    },
    {
      num: '05',
      title: 'Faster & More Efficient Than Traditional Methods',
      desc: 'Drone surveys reduce field time by 70% and provide actionable insights in real-time, enabling data-driven decision-making.',
      icon: '⚡'
    }
  ];

  /**
   * applications — 5-card data for the "Applications of AI-Powered Drone Mapping" section.
   * Each application represents a major industry where JRNEX mapping services apply.
   */
  applications = [
    {
      title: 'Infrastructure & Construction',
      desc: 'Terrain modeling, site planning, and structural monitoring.',
      icon: '🏗️'
    },
    {
      title: 'Agriculture & Forestry',
      desc: 'Precision farming, vegetation indexing, and irrigation planning.',
      icon: '🌾'
    },
    {
      title: 'Urban Planning & Smart Cities',
      desc: '3D city modeling, land use planning, and transportation analysis.',
      icon: '🏙️'
    },
    {
      title: 'Mining & Geology',
      desc: 'Volume estimation, resource mapping, and slope stability analysis.',
      icon: '⛏️'
    },
    {
      title: 'Disaster Response & Management',
      desc: 'Post-disaster assessment, flood mapping, and search & rescue operations.',
      icon: '🚨'
    }
  ];

  /**
   * benefits — 4-card data for the "Why Choose JRNEX?" section.
   * Highlights the competitive advantages of JRNEX's drone-based surveying.
   */
  benefits = [
    {
      title: 'AI-Enhanced Accuracy',
      desc: 'Advanced machine learning algorithms refine data precision.',
      icon: '🎯'
    },
    {
      title: 'LiDAR & Multispectral',
      desc: 'Captures detailed terrain and vegetation data simultaneously.',
      icon: '📡'
    },
    {
      title: 'Cost-Effective & Scalable',
      desc: 'Reduces manpower, operational costs, and survey time.',
      icon: '💰'
    },
    {
      title: 'Regulatory Compliance',
      desc: 'Adheres to DGCA, GIS, and geospatial guidelines.',
      icon: '✅'
    }
  ];
}
