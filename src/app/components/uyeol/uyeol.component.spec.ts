import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UyeolComponent } from './uyeol.component';

describe('UyeolComponent', () => {
  let component: UyeolComponent;
  let fixture: ComponentFixture<UyeolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UyeolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UyeolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
