import { Component } from '@angular/core';

@Component({
  selector: 'app-mining',
  imports: [],
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
      img: 'assets/hero-windmill.png'
    },
    {
      title: 'Stockpile Management',
      desc: 'Accurate volume estimation of coal, minerals, and aggregates.',
      img: 'assets/hero-windmill.png'
    },
    {
      title: 'Environmental Assessment',
      desc: 'Monitoring mining impact and managing land reclamation projects.',
      img: 'assets/hero-windmill.png'
    }
  ];
}
