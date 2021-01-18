import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UyeduzenleComponent } from './uyeduzenle.component';

describe('UyeduzenleComponent', () => {
  let component: UyeduzenleComponent;
  let fixture: ComponentFixture<UyeduzenleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UyeduzenleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UyeduzenleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
