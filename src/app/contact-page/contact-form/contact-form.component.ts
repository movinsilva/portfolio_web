import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  FormData: FormGroup = new FormGroup({});
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  errorMessage = '';

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.FormData = this.builder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  // Helper methods for form validation feedback
  isFieldInvalid(fieldName: string): boolean {
    const field = this.FormData.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getFieldError(fieldName: string): string {
    const field = this.FormData.get(fieldName);
    if (field?.errors) {
      if (field.errors['required']) return `${fieldName} is required`;
      if (field.errors['email']) return 'Please enter a valid email address';
      if (field.errors['minlength']) {
        const requiredLength = field.errors['minlength'].requiredLength;
        return `${fieldName} must be at least ${requiredLength} characters`;
      }
    }
    return '';
  }

  onSubmit(FormData: FormGroup) {
    if (this.FormData.invalid) {
      // Mark all fields as touched to show validation errors
      Object.keys(this.FormData.controls).forEach((key) => {
        this.FormData.get(key)?.markAsTouched();
      });
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    const emailData = {
      service_id: environment.emailjs.serviceId,
      template_id: environment.emailjs.templateId,
      template_params: {
        name: this.FormData.get('name')?.value,
        email: this.FormData.get('email')?.value,
        message: this.FormData.get('message')?.value,
        to_email: 'movin.silva@outlook.com', // Add your email here
      },
    };

    emailjs.init(environment.emailjs.publicKey);

    emailjs
      .send(
        emailData.service_id,
        emailData.template_id,
        emailData.template_params
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          this.isSubmitting = false;
          this.submitSuccess = true;
          this.FormData.reset(); // Clear the form

          // Hide success message after 5 seconds
          setTimeout(() => {
            this.submitSuccess = false;
          }, 5000);
        },
        (error) => {
          console.error('Email sending failed:', error);
          this.isSubmitting = false;
          this.submitError = true;
          this.errorMessage =
            'Failed to send message. Please try again or contact me directly.';

          // Hide error message after 5 seconds
          setTimeout(() => {
            this.submitError = false;
          }, 5000);
        }
      );
  }

  // Method to reset form and messages
  resetForm() {
    this.FormData.reset();
    this.submitSuccess = false;
    this.submitError = false;
    this.isSubmitting = false;
  }
}
