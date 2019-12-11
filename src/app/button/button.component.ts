import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "custom-button",
  template: `
    <button>
      button works!
    </button>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
