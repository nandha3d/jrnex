import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isMobileMenuOpen = false;

  services = [
    { name: 'Digital Agriculture', link: '/solutions/agriculture' },
    { name: 'Mapping & Survey', link: '/solutions/mapping' },
    { name: 'Inspection Services', link: '/solutions/inspection' },
    { name: 'Mining Operations', link: '/solutions/mining' },
  ];
}
