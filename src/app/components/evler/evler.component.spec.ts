import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvlerComponent } from './evler.component';

describe('EvlerComponent', () => {
  let component: EvlerComponent;
  let fixture: ComponentFixture<EvlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
