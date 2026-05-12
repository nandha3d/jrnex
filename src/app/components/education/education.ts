import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  applyForm: FormGroup;
  submitted = false;

  programs = [
    {
      title: 'College Workshops',
      desc: 'Comprehensive Drone Building Course, RC Aircraft Building Course, and RC Aircraft Piloting Course – interactive sessions designed for students to master hands-on skills and practical applications.',
      img: 'assets/hero-education.avif'
    },
    {
      title: 'College Internships',
      desc: 'Immersive hands-on drone projects with real-world industry exposure, mentorship, and professional development opportunities to build career-ready expertise.',
      img: 'assets/hero-education.avif'
    },
    {
      title: 'Weekend Batches',
      desc: 'Engaging Junior Aeromodeller program and Summer Classes – beginner-friendly, flexible schedules open to all ages and skill levels for accessible learning.',
      img: 'assets/hero-education.avif'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.applyForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      location: ['', Validators.required],
      program: ['', Validators.required],
      institution: [''],
      experience: [''],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.applyForm.valid) {
      console.log('Form Submitted', this.applyForm.value);
      // Logic for form submission (e.g., API call)
      alert('Application sent successfully!');
      this.applyForm.reset();
      this.submitted = false;
    }
  }
}
