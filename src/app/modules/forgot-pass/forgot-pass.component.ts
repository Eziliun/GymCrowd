import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { iForgotPass } from './interface/forgot-pass.model';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss']
})
export class ForgotPassComponent {
  showGif: boolean = false;
  @ViewChild('gif') gifImage!: ElementRef;

  forgotForm!: FormGroup;

  forgotData!: iForgotPass;

  constructor(
    private renderer: Renderer2,
    private formBuilder: FormBuilder,
    ) {}

    ngOnInit() {
      this.setupForm();
    }

    setupForm() {
      this.forgotForm = this.formBuilder.group({
        email: ['', Validators.required],
      });
  
    }

    sendForgotPass() {
      console.log('Infos:', JSON.stringify(this.forgotForm.value));
    }

  toggleGif() {
    this.showGif = true;
    setTimeout(() => {
      this.showGif = false;
      this.renderer.setAttribute(this.gifImage.nativeElement, 'src', '');
    }, 4800); 
  }
}


  

