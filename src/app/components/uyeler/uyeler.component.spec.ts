import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UyelerComponent } from './uyeler.component';

describe('UyelerComponent', () => {
  let component: UyelerComponent;
  let fixture: ComponentFixture<UyelerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UyelerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UyelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
