import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
  standalone: true,
  imports: [FormsModule,CommonModule]
})
export class Contact {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  isLoading = false;
  showToast = false;
  toastMessage = '';
  toastType: 'success' | 'error' = 'success';

  sendEmail() {
    this.isLoading = true;
    this.showToast = false;

    const serviceID = 'service_xmr0kqp';
    const userID = 'F7_R-gUbs0WXN3AJG';

    const templateToOwner = 'template_kf25bkc';

    const templateToSender = 'template_penp0ta';

    const params = {
      name: this.contactForm.name,
      email: this.contactForm.email,
      message: this.contactForm.message,
      to_name: 'Mialivola' 
    };

    emailjs.send(serviceID, templateToOwner, params, userID)
      .then(() => {
        return emailjs.send(serviceID, templateToSender, params, userID);
      })
      .then(() => {
        this.showSuccessToast('Message envoyé avec succès !');
        this.contactForm = { name: '', email: '', message: '' };
      })
      .catch((err) => {
        console.error(err);
        this.showErrorToast('Erreur lors de l’envoi.');
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  showSuccessToast(msg: string) {
    this.toastMessage = msg;
    this.toastType = 'success';
    this.showToast = true;
    setTimeout(() => this.showToast = false, 5000);
  }

  showErrorToast(msg: string) {
    this.toastMessage = msg;
    this.toastType = 'error';
    this.showToast = true;
    setTimeout(() => this.showToast = false, 5000);
  }
}