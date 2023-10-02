import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  FormData: FormGroup = new FormGroup({});

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
      this.FormData = this.builder.group({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        message: new FormControl('', [Validators.required])
      })
  }

  onSubmit(FormData: FormGroup) {
    
    const emailData = {
      service_id: 'service_9296a8u',
      template_id: 'template_j4qnjmr',
      user_id: 'your_user_id',
      template_params: {
        name: this.FormData.get('name')?.value,
        email: this.FormData.get('email')?.value,
        message: this.FormData.get('message')?.value
      }
    };

    emailjs.init('OxxSXuQwvu4-rDNy5');

    emailjs.send(emailData.service_id,emailData.template_id, emailData.template_params).then(
      (response) => {
        console.log('Email sent successfully:', response);
        window.alert('')
      },
      (error) => {
        console.error('Email sending failed:', error);
      }
    )
   
    }
}
