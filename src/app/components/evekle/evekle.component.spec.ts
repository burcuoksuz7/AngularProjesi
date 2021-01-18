import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvekleComponent } from './evekle.component';

describe('EvekleComponent', () => {
  let component: EvekleComponent;
  let fixture: ComponentFixture<EvekleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvekleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvekleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
