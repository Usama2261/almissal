import { Component } from '@angular/core';
import { APIConstant } from '../core/helpers/apiConstant';
import { APIUrls } from '../core/helpers/apiUrls';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent {
  readonly APIConstant = APIConstant;
  readonly APIUrls = APIUrls;
}
