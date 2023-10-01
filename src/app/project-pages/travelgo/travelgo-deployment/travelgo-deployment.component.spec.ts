import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelgoDeploymentComponent } from './travelgo-deployment.component';

describe('TravelgoDeploymentComponent', () => {
  let component: TravelgoDeploymentComponent;
  let fixture: ComponentFixture<TravelgoDeploymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelgoDeploymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelgoDeploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
