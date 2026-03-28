import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  applyForm: FormGroup;
  submitted = false;

  programs = [
    {
      title: 'College Workshops',
      desc: 'Drone Building, RC Aircraft Building, and Piloting courses designed for hands-on skill mastery.',
      img: 'assets/hero-education.png'
    },
    {
      title: 'College Internships',
      desc: 'Immersive drone projects with real-world industry exposure, mentorship, and professional development.',
      img: 'assets/hero-education.png'
    },
    {
      title: 'Weekend Batches',
      desc: 'Junior Aeromodeller programs and Summer Classes — beginner-friendly and open to all ages.',
      img: 'assets/hero-education.png'
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
      message: ['']
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
