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
    <button>
      button works!
    </button>
  `,
  styles: []
  // encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent {
  // @Input() content;
  // serviceObject;
  // ngOnInit() {
  //   console.log(this.content);
  //   this.serviceObject = JSON.parse(this.content);
  //   const funcString = this.serviceObject.click;
  //   const func = new Function(funcString);
  //   console.log(func);
  //   this.serviceObject.click = func;
  //   console.log(this.serviceObject);
  // }
  // handleClick() {
  //   this.serviceObject.click();
  // }
}
