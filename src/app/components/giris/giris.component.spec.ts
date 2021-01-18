import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirisComponent } from './giris.component';

describe('GirisComponent', () => {
  let component: GirisComponent;
  let fixture: ComponentFixture<GirisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GirisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GirisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
