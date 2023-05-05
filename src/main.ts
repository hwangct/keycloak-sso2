import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import {
  withInterceptorsFromDi,
  provideHttpClient,
} from '@angular/common/http';
import { AppRoutingModule } from './app/app-routing.module';
import { CommonModule } from '@angular/common';
import {
  BrowserModule,
  bootstrapApplication,
  createApplication,
} from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { MicroBannerComponent } from './app/components/micro-banner/micro-banner.component';
import { NavbarComponent } from './app/components/navbar/navbar.component';

// For local development
// (async () => {
//   const app = bootstrapApplication(AppComponent, {
//     providers: [
//       importProvidersFrom(
//         AppModule,
//         BrowserModule,
//         CommonModule,
//         AppRoutingModule,
//         OAuthModule.forRoot()
//       ),
//       provideHttpClient(withInterceptorsFromDi()),
//     ],
//   }).catch((err) => console.error(err));
// })();

// For exporting elements to external application
(async () => {
  const app = await createApplication({
    providers: [
      /* your global providers here */
      importProvidersFrom(
        AppModule,
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        OAuthModule.forRoot()
      ),
      provideHttpClient(withInterceptorsFromDi()),
    ],
  });
  const element_banner = createCustomElement(MicroBannerComponent, {
    injector: app.injector,
  });
  customElements.define('app-micro-banner', element_banner);

  const element_navbar = createCustomElement(NavbarComponent, {
    injector: app.injector,
  });
  customElements.define('app-micro-navbar', element_navbar);
})();
