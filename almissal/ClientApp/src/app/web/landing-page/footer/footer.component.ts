import { Component } from '@angular/core';
import { APIConstant } from 'src/app/core/helpers/apiConstant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  readonly APIConstant = APIConstant;
}
