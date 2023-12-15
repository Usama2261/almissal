import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      #whatsAppBtn {
        display: block;
        position: fixed;
        bottom: 20px;
        right: 30px;
        z-index: 99;
        font-size: 18px;
        cursor: pointer;
      }
    `,
  ],
})
export class AppComponent {
  title = 'app';
}
