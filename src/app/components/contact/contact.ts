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
      details: 'JRNEX Technologies Pvt Ltd\n31/62C Anchukannukalungu\nPuthukkdai P.O, Marthandam\nKaniyakumari Dist, TamilNadu\nPin: 629171'
    },
    {
      title: 'Email Us',
      icon: '✉️',
      details: 'info@jrnex.in'
    },
    {
      title: 'Call Us',
      icon: '📞',
      details: '+91 83000 70320'
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
