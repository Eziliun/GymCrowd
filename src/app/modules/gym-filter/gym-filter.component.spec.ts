import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymFilterComponent } from './gym-filter.component';

describe('GymFilterComponent', () => {
  let component: GymFilterComponent;
  let fixture: ComponentFixture<GymFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
