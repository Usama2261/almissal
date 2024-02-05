import { Component } from '@angular/core';
import { APIConstant } from './core/helpers/apiConstant';
import { APIUrls } from './core/helpers/apiUrls';

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

  readonly APIConstant = APIConstant;
  readonly APIUrls = APIUrls;
}
