import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  contactForm: FormGroup;
  submitted = false;

  contactInfo = [
    {
      title: 'Our Office',
      icon: '📍',
      details: 'JRNEX Technologies HQ, Bangalore, India - 560001'
    },
    {
      title: 'Email Us',
      icon: '✉️',
      details: 'info@jrnex.com'
    },
    {
      title: 'Call Us',
      icon: '📞',
      details: '+91 98765 43210'
    },
    {
      title: 'Working Hours',
      icon: '⏰',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      company: [''],
      service: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.valid) {
      console.log('Contact Form Submitted', this.contactForm.value);
      alert('Thank you! Your message has been sent.');
      this.contactForm.reset();
      this.submitted = false;
    }
  }
}
