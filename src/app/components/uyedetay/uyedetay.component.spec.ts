import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UyedetayComponent } from './uyedetay.component';

describe('UyedetayComponent', () => {
  let component: UyedetayComponent;
  let fixture: ComponentFixture<UyedetayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UyedetayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UyedetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
