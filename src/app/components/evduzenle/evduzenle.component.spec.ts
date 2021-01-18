import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvduzenleComponent } from './evduzenle.component';

describe('EvduzenleComponent', () => {
  let component: EvduzenleComponent;
  let fixture: ComponentFixture<EvduzenleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvduzenleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvduzenleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
