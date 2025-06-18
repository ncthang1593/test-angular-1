// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig).catch((err) =>
//   console.error(err)
// );

import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom, inject, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { HelloComponent } from './app/hello/hello.component';

const run = async () => {
  const injector = inject(Injector);
  const el = createCustomElement(HelloComponent, { injector });
  customElements.define('hello-element', el);
};

bootstrapApplication(HelloComponent, {
  providers: [importProvidersFrom(BrowserModule)],
}).then(() => run());
