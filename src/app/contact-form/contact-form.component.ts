import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

public contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name:['',[Validators.required,],[]],
      email: ['',[Validators.required, Validators.email],[]],
      message: ['',[Validators.required, Validators.minLength(1000)],[]],
    });
  }


  
// @ViewChild('myForm') myForm!: any;
// @ViewChild('formName') formName!: any;
// @ViewChild('formEmail') formEmail!: any;
// @ViewChild('formBtn') formBtn!: any;

//   async sendMail() {
//     // action="https://phil-schmucker.developerakademie.net/send_mail/send_mail.php"
//     console.log('Sending mail', this.myForm);
//     this.formName.nativeElement.disabled = true;
//     this.formEmail.nativeElement.disabled = true;
//     this.formBtn.nativeElement.disabled = true;
//     // Animation triggern: Email wird gesendet

//     let fd = new FormData();
//     fd.append('name', this.formName.nativeElement.value);
//     fd.append('message', this.formEmail.nativeElement.value);
//     await fetch("https://phil-schmucker.developerakademie.net/send_mail/send_mail.php", {method: 'POST', body: fd});
    
//     this.formName.nativeElement.disabled = false;
//     this.formEmail.nativeElement.disabled = false;
//     this.formBtn.nativeElement.disabled = false;
//     // Animation stoppen / Text anzeigen 'Nachricht gesendet'
//   }

}
