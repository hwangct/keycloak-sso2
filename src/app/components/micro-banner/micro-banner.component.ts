import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { RuxClassificationMarking } from '@astrouxds/astro-web-components/dist/components/rux-classification-marking';

@Component({
  selector: 'app-micro-banner',
  templateUrl: './micro-banner.component.html',
  styleUrls: ['./micro-banner.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MicroBannerComponent implements OnInit {
  ngOnInit(): void {
    console.log('init micro banner');
  }
  constructor() {
    customElements.define('rux-classification-micro', RuxClassificationMarking);
  }
}
