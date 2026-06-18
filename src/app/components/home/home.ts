import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('droneVisual', { static: false }) droneVisual!: ElementRef<HTMLDivElement>;
  @ViewChild('hudVisual', { static: false }) hudVisual!: ElementRef<HTMLDivElement>;
  @ViewChild('agriHudVisual', { static: false }) agriHudVisual!: ElementRef<HTMLDivElement>;
  @ViewChild('eduHudVisual', { static: false }) eduHudVisual!: ElementRef<HTMLDivElement>;

  transitioning = false;

  constructor(private cdr: ChangeDetectorRef) { }

  activeSlide = 0;
  oldSlideIndex = 0;
  private slideTimer: any;
  private rafId: number = 0;

  // Spring physics state (public for template binding)
  posX = 0;
  posY = 0;
  private velX = 0;
  private velY = 0;
  private targetX = 0;
  private targetY = 0;
  private readonly STIFFNESS = 0.015;
  private readonly DAMPING = 0.92;

  // Dynamic HUD telemetry — Inspection
  hudAlt = '42.0';
  hudSpd = '5.4';
  hudTemp = '38.2';
  hudDefects = '0';

  // Dynamic HUD telemetry — Agriculture
  hudNdvi = '0.82';
  hudMoisture = '64';
  hudHealth = 'GOOD';
  hudCoverage = '12.4';

  // Dynamic HUD telemetry — Education
  hudModule = 'FLIGHT SAFETY';
  hudStudents = '2.4k';
  hudExp = '1450';
  hudProgress = '68';

  heroSlides = [
    {
      label: 'Inspection Services',
      headline: 'AI-Powered Wind Energy Inspections',
      subtext: 'Autonomous drone inspections for wind turbines, solar farms, and power infrastructure — reducing downtime by 50%.',
      cta1: 'Book Service', cta1Link: '/contact',
      cta2: 'Learn More', cta2Link: '/solutions/inspection',
      image: 'hero_01.avif',
      gradient: 'linear-gradient(to left, rgba(13, 27, 42, 0.8) 0%, rgba(13, 27, 42, 0.2) 50%, transparent 100%)',
    },
    {
      label: 'Digital Agriculture',
      headline: 'Precision Farming Powered by AI Drones',
      subtext: 'NDVI mapping, pesticide spraying, and crop health monitoring — transforming Indian agriculture with real-time aerial intelligence.',
      cta1: 'See Solutions', cta1Link: '/solutions/agriculture',
      cta2: 'Learn More', cta2Link: '/solutions/agriculture',
      image: 'hero_02.avif',
      gradient: 'linear-gradient(to left, rgba(13, 42, 26, 0.85) 0%, rgba(13, 42, 26, 0.2) 50%, transparent 100%)',
    },
    {
      label: 'Robotics & Drones',
      headline: 'Shaping the Next Generation of Robotics & Drone Innovators',
      subtext: 'Industry-aligned drone education, robotics training, and AI programs for schools, colleges, and aspiring professionals.',
      cta1: 'Explore Programs', cta1Link: '/education',
      cta2: 'Learn More', cta2Link: '/education',
      image: 'robotics.png',
      gradient: 'linear-gradient(to left, rgba(26, 13, 42, 0.85) 0%, rgba(46, 26, 74, 0.2) 50%, transparent 100%)',
    },
  ];

  services = [
    { icon: '🛰️', iconBg: '#2EC4B6', title: 'Digital Agriculture', desc: 'AI-powered NDVI mapping, pesticide spraying, and crop health monitoring for precision farming.', link: '/solutions/agriculture', tag: 'Agriculture', img: 'digital-agriculture-drone.avif' },
    { icon: '🗺️', iconBg: '#0EA5E9', title: 'Mapping & Survey', desc: 'Sub-centimeter LiDAR accuracy with 70% faster field surveys — 3D terrain models and orthomosaics.', link: '/solutions/mapping', tag: 'Surveying', img: 'lidar-drone_scanning_landscape.avif' },
    { icon: '🔍', iconBg: '#F59E0B', title: 'Inspection Services', desc: 'Thermal imaging and AI defect detection for windmills, solar panels, and energy infrastructure.', link: '/solutions/inspection', tag: 'Energy', img: 'drone_inspecting_windmill.avif' },
    { icon: '⛏️', iconBg: '#8B5CF6', title: 'Mining Operations', desc: 'Volumetric stockpile analysis and real-time site monitoring for mining efficiency and safety.', link: '/solutions/mining', tag: 'Mining', img: 'Mining_operations.avif' },
    { icon: '🤖', iconBg: '#EF4444', title: 'Skill Development', desc: 'Drone, robotics, and AI/ML education programs designed for schools, colleges, and enterprises.', link: '/education', tag: 'Education', img: 'Robotic_dog.avif' },
    { icon: '🎓', iconBg: '#10B981', title: 'RPTO Training', desc: 'DGCA-certified remote pilot training — hands-on flight experience and AI simulation modules.', link: '/rpto', tag: 'Certification', img: 'hero-education.avif' },
  ];

  stats = [
    { value: '8+', label: 'Industries Served', icon: '🏭' },
    { value: '50+', label: 'Certified Pilots', icon: '✈️' },
    { value: '12+', label: 'States Covered', icon: '📍' },
  ];

  whyUs = [
    { title: 'AI-First Technology', desc: 'Every solution is built on machine learning — not just drone hardware.' },
    { title: 'Full-Stack Capability', desc: 'From hardware to software to data science — one team, one solution.' },
    { title: 'Regulatory Compliance', desc: 'DGCA certified, GIS-compliant, and safety-first in all operations.' },
    { title: 'Proven Track Record', desc: '100+ projects delivered across agriculture, energy, mining, and education.' },
  ];

  testimonial = {
    quote: '"JRNEX drone technology completely transformed our wind farm inspection process. What used to take 3 weeks now takes 2 days with exceptional precision."',
    name: 'Sarah Chen', role: 'CEO, GreenEnergy Corp', initials: 'SC',
  };

  ngOnInit() {
    this.slideTimer = setInterval(() => {
      this.nextSlide();
    }, 12000);
  }

  ngAfterViewInit() {
    // Only run on desktop
    if (window.innerWidth < 1024) return;

    // Initialise position at drone's natural position (right side of hero)
    const heroEl = document.querySelector('.hero') as HTMLElement;
    if (!heroEl) return;
    const rect = heroEl.getBoundingClientRect();
    this.posX = rect.width * 0.68;
    this.posY = rect.height * 0.5;
    this.targetX = this.posX;
    this.targetY = this.posY;

    document.addEventListener('mousemove', this.onMouseMove);
    this.animate();
  }

  private onMouseMove = (e: MouseEvent) => {
    const heroEl = document.querySelector('.hero') as HTMLElement;
    if (!heroEl) return;
    const rect = heroEl.getBoundingClientRect();
    // Map mouse position relative to the hero
    this.targetX = e.clientX - rect.left;
    this.targetY = e.clientY - rect.top;
  };

  private animate = () => {
    // Spring physics: force = stiffness * (target - pos)
    const forceX = (this.targetX - this.posX) * this.STIFFNESS;
    const forceY = (this.targetY - this.posY) * this.STIFFNESS;

    this.velX = (this.velX + forceX) * this.DAMPING;
    this.velY = (this.velY + forceY) * this.DAMPING;

    this.posX += this.velX;
    this.posY += this.velY;

    if (this.droneVisual?.nativeElement) {
      const el = this.droneVisual.nativeElement;
      const tiltX = Math.max(-18, Math.min(18, this.velY * 1.5));
      const tiltY = Math.max(-18, Math.min(18, -this.velX * 1.5));
      el.style.transform = `translate(${this.posX}px, ${this.posY}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    }

    // Mirror position to HUD overlays (same transform, no tilt)
    if (this.hudVisual?.nativeElement) {
      this.hudVisual.nativeElement.style.transform = `translate(${this.posX}px, ${this.posY}px)`;
    }
    if (this.agriHudVisual?.nativeElement) {
      this.agriHudVisual.nativeElement.style.transform = `translate(${this.posX}px, ${this.posY}px)`;
    }
    if (this.eduHudVisual?.nativeElement) {
      this.eduHudVisual.nativeElement.style.transform = `translate(${this.posX}px, ${this.posY}px)`;
    }

    // Update HUD telemetry based on position
    const heroEl = document.querySelector('.hero') as HTMLElement;
    if (heroEl) {
      const rect = heroEl.getBoundingClientRect();
      const normX = this.posX / rect.width;
      const normY = this.posY / rect.height;

      if (this.activeSlide === 0) {
        this.hudAlt = (30 + normY * 60).toFixed(1);
        this.hudSpd = (2 + Math.abs(this.velX + this.velY) * 0.3).toFixed(1);
        this.hudTemp = (32 + normX * 18).toFixed(1);
        this.hudDefects = Math.floor(normX * 3).toString();
      } else if (this.activeSlide === 1) {
        this.hudNdvi = (0.6 + normY * 0.35).toFixed(2);
        this.hudMoisture = Math.floor(45 + normX * 35).toString();
        const healthVal = 0.6 + normY * 0.35;
        this.hudHealth = healthVal > 0.8 ? 'GOOD' : healthVal > 0.65 ? 'FAIR' : 'LOW';
        this.hudCoverage = (5 + normX * 20).toFixed(1);
      } else if (this.activeSlide === 2) {
        // Education telemetry
        const modules = ['FLIGHT SAFETY', 'NAV-COMMS', 'AI SYSTEMS', 'ROBOTICS'];
        this.hudModule = modules[Math.floor(normX * modules.length)] || modules[0];
        this.hudStudents = (2.1 + normY * 1.5).toFixed(1) + 'k';
        this.hudExp = Math.floor(1200 + normX * 800).toString();
        this.hudProgress = Math.floor(40 + normY * 55).toString();
      }
      this.cdr.detectChanges();
    }

    this.rafId = requestAnimationFrame(this.animate);
  };

  ngOnDestroy() {
    if (this.slideTimer) clearInterval(this.slideTimer);
    document.removeEventListener('mousemove', this.onMouseMove);
    cancelAnimationFrame(this.rafId);
  }

  goToSlide(i: number) {
    if (this.activeSlide === i) return;
    this.activeSlide = i;
  }

  nextSlide() {
    this.activeSlide = (this.activeSlide + 1) % this.heroSlides.length;
  }

  prevSlide() {
    this.activeSlide = (this.activeSlide - 1 + this.heroSlides.length) % this.heroSlides.length;
  }
}
