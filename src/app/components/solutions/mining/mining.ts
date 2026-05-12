import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mining',
  imports: [CommonModule],
  templateUrl: './mining.html',
  styleUrl: './mining.scss',
})
export class Mining {
  features = [
    {
      title: 'Volumetric Mapping',
      desc: 'High-precision 3D mapping for accurate stockpile and excavation measurements.',
      icon: '🏔️'
    },
    {
      title: 'Stockpile Analysis',
      desc: 'Automated volume calculations and inventory tracking for mining resources.',
      icon: '📊'
    },
    {
      title: 'Site Monitoring',
      desc: 'Real-time aerial surveillance for safety, security, and operational efficiency.',
      icon: '🛡️'
    },
    {
      title: 'Resource Intelligence',
      desc: 'Data-driven insights for resource optimization and geological mapping.',
      icon: '💎'
    }
  ];

  useCases = [
    {
      title: 'Open-Pit Mining',
      desc: 'Terrain modeling and slope stability analysis for safe mining operations.',
      img: 'assets/Mining_operations.avif'
    },
    {
      title: 'Stockpile Management',
      desc: 'Accurate volume estimation of coal, minerals, and aggregates.',
      img: 'assets/Mining_operations.avif'
    },
    {
      title: 'Environmental Assessment',
      desc: 'Monitoring mining impact and managing land reclamation projects.',
      img: 'assets/Mining_operations.avif'
    }
  ];
}
