import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroBannerComponent } from './micro-banner.component';

describe('MicroBannerComponent', () => {
  let component: MicroBannerComponent;
  let fixture: ComponentFixture<MicroBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MicroBannerComponent]
    });
    fixture = TestBed.createComponent(MicroBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
