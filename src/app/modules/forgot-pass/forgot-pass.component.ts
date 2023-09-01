import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss']
})
export class ForgotPassComponent {
  showGif: boolean = false;
  @ViewChild('gif') gifImage!: ElementRef;

  constructor(private renderer: Renderer2) {}

  toggleGif() {
    this.showGif = true;
    setTimeout(() => {
      this.showGif = false;
      this.renderer.setAttribute(this.gifImage.nativeElement, 'src', ''); // Reset the image src
    }, 4800); // 5000 milliseconds = 5 seconds
  }
}


  

