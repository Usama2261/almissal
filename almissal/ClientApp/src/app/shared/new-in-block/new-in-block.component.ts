import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-in-block',
  templateUrl: './new-in-block.component.html',
  styleUrls: ['./new-in-block.component.css']
})
export class NewInBlockComponent {
  @Input() imagePath: string = '';
  @Input() price: string = 'PKR. 2,500';
  @Input() title: string = 'Jacquard-Embroidered Slub';
  @Input() content1: string = 'Viscose-Blue-3PC';
  @Input() content2: string = 'JACQUARD';

  @Output() onDetail = new EventEmitter<any>();

  onDescriptionClick(){
    this.onDetail.emit(1);
  }
}
