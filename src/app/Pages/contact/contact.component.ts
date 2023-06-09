import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('test', 'test', e.target as HTMLFormElement, 'test').then(
      (result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert('Message sent successfully!');
      },
      (error) => {
        console.log(error.text);
        alert('Message failed to send.');
      }
    );
  }
}
