import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss']
})
export class ForgotPassComponent {
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
}

  

