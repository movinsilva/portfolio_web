import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvProjectsPageComponent } from './cv-projects-page.component';

describe('CvProjectsPageComponent', () => {
  let component: CvProjectsPageComponent;
  let fixture: ComponentFixture<CvProjectsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvProjectsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvProjectsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
