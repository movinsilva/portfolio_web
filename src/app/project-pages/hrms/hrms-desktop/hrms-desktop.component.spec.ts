import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmsDesktopComponent } from './hrms-desktop.component';

describe('HrmsDesktopComponent', () => {
  let component: HrmsDesktopComponent;
  let fixture: ComponentFixture<HrmsDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrmsDesktopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrmsDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
