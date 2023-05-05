import { NgModule } from '@angular/core';
import { RuxIcon } from '@astrouxds/astro-web-components/dist/components/rux-icon';
import { RuxMonitoringIcon } from '@astrouxds/astro-web-components/dist/components/rux-monitoring-icon';
import { RuxStatus } from '@astrouxds/astro-web-components/dist/components/rux-status';
import { RuxIconAltitude } from '@astrouxds/astro-web-components/dist/components/rux-icon-altitude';
import { RuxIconPersonOutline } from '@astrouxds/astro-web-components/dist/components/rux-icon-person-outline';
import { RuxIconAdd } from '@astrouxds/astro-web-components/dist/components/rux-icon-add';
import { RuxIconExplicit } from '@astrouxds/astro-web-components/dist/components/rux-icon-explicit';
import { MicroBannerComponent } from './components/micro-banner/micro-banner.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule(
  /* TODO(standalone-migration): clean up removed NgModule class manually. */
  {
    imports: [
      AppComponent,
      BrowserModule,
      CommonModule,
      AppRoutingModule,
      HttpClientModule,
      OAuthModule.forRoot(),
      NavbarComponent,
      WelcomeComponent,
      MicroBannerComponent,
    ],
    providers: [],
  }
)
export class AppModule {
  constructor() {
    // customElements.define('rux-icon-micro', RuxIcon);
    // customElements.define('rux-icon-altitude', RuxIconAltitude);
    // customElements.define('rux-icon-person-outline', RuxIconPersonOutline);
    // customElements.define('rux-icon-add', RuxIconAdd);
    // customElements.define('rux-icon-explicit', RuxIconExplicit);
    // customElements.define('rux-monitoring-icon', RuxMonitoringIcon);
    // customElements.define('rux-status', RuxStatus);
  }
}
