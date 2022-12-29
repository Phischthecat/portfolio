import { TmplAstBoundText } from '@angular/compiler';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('formName') formName!: any;
  @ViewChild('formEmail') formEmail!: any;
  @ViewChild('formMessage') formMessage!: any;
  @ViewChild('formBtn') formBtn!: any;

public contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name:['',[Validators.required,],[]],
      email: ['',[Validators.required, Validators.email],[]],
      message: ['',[Validators.required],[]],
    });    
  }  

  playAudio(){
    let audio = new Audio();
    audio.src = "assets/sound/swish.mp3";
    audio.load();
    audio.play();
  }
  
  async sendMail() {
    this.toggleInputFields(true);
    
    let fd = new FormData();
    fd.append('name', this.formName.nativeElement.value);
    fd.append('email', this.formEmail.nativeElement.value);
    fd.append('message', this.formMessage.nativeElement.value);
    await fetch("https://phil-schmucker.developerakademie.net/send_mail/send_mail.php", {method: 'POST', body: fd});
    this.playAudio();
    
    this.toggleInputFields(false);
    this.myForm.nativeElement.reset();
  }

  toggleInputFields(boolean) {
    this.formName.nativeElement.disabled = boolean;
    this.formEmail.nativeElement.disabled = boolean;
    this.formMessage.nativeElement.disabled = boolean;
    this.formBtn.nativeElement.disabled = boolean;
  }

}
