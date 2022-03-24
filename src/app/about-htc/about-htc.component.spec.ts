import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHtcComponent } from './about-htc.component';

describe('AboutHtcComponent', () => {
  let component: AboutHtcComponent;
  let fixture: ComponentFixture<AboutHtcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutHtcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutHtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
