import { BrowserModule } from "@angular/platform-browser";
import { createCustomElement } from "@angular/elements";
import { NgModule, Injector } from "@angular/core";

import { ButtonComponent } from "./button/button.component";

@NgModule({
  declarations: [ButtonComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [ButtonComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const ngElement = createCustomElement(ButtonComponent, {
      injector: this.injector
    });
    customElements.define("my-button", ngElement);
  }
}
