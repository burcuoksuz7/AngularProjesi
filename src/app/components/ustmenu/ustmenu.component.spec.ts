import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UstmenuComponent } from './ustmenu.component';

describe('UstmenuComponent', () => {
  let component: UstmenuComponent;
  let fixture: ComponentFixture<UstmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UstmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UstmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
