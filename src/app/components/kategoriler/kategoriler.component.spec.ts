import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorilerComponent } from './kategoriler.component';

describe('KategorilerComponent', () => {
  let component: KategorilerComponent;
  let fixture: ComponentFixture<KategorilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KategorilerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KategorilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
