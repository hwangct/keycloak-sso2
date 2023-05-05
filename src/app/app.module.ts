import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
// import { RuxIcon } from '@astrouxds/angular';
import { RuxIcon } from '@astrouxds/astro-web-components/dist/components/rux-icon';
import { RuxMonitoringIcon } from '@astrouxds/astro-web-components/dist/components/rux-monitoring-icon';
import { RuxStatus } from '@astrouxds/astro-web-components/dist/components/rux-status';
import { RuxIconAltitude } from '@astrouxds/astro-web-components/dist/components/rux-icon-altitude';
import { RuxIconPersonOutline } from '@astrouxds/astro-web-components/dist/components/rux-icon-person-outline';
import { RuxIconAdd } from '@astrouxds/astro-web-components/dist/components/rux-icon-add';
import { RuxIconExplicit } from '@astrouxds/astro-web-components/dist/components/rux-icon-explicit';
import { RuxClassificationMarking } from '@astrouxds/astro-web-components/dist/components/rux-classification-marking';

//import { AstroComponentsModule } from '@astrouxds/angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    NavbarComponent,
    WelcomeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor() {
    customElements.define('rux-icon', RuxIcon);
    customElements.define('rux-icon-altitude', RuxIconAltitude);
    customElements.define('rux-icon-person-outline', RuxIconPersonOutline);
    customElements.define('rux-icon-add', RuxIconAdd);
    customElements.define('rux-icon-explicit', RuxIconExplicit);

    customElements.define('rux-monitoring-icon', RuxMonitoringIcon);
    customElements.define('rux-status', RuxStatus);
    customElements.define(
      'rux-classification-marking',
      RuxClassificationMarking
    );
  }
}
