import {
  Component,
  ViewEncapsulation,
  Output,
  Input,
  OnInit
} from "@angular/core";
import { EventEmitter } from "events";

// @Component({
//   selector: "custom-button",
//   template: `
//     <button (click)="handleClick($event)">
//       button works!
//     </button>
//   `,
//   styles: [],
//   encapsulation: ViewEncapsulation.Native
// })
// export class ButtonComponent {
//   @Output() clickEmitter = new EventEmitter();

//   handleClick(e) {
//     this.clickEmitter.emit(e);
//   }
// }

@Component({
  selector: "custom-button",
  template: `
    <button (click)="handleClick()">
      button works!
    </button>
  `,
  styles: []
  // encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent implements OnInit {
  @Input() content;
  serviceObject;

  ngOnInit() {
    console.log('1_1', this.content);
    this.serviceObject = JSON.parse(this.content);
    console.log('1_2', this.serviceObject);
    const funcString = this.serviceObject.click;
    console.log('1_3', funcString);
    const func = new Function(funcString);
    console.log('1_4', func);
    this.serviceObject.click = func;
    console.log('1_5', this.serviceObject);
  }

  handleClick() {
    this.serviceObject.click();
  }
}
