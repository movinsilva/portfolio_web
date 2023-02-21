import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsTechComponent } from './projects-tech.component';

describe('ProjectsTechComponent', () => {
  let component: ProjectsTechComponent;
  let fixture: ComponentFixture<ProjectsTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
