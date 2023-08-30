import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratarComponent } from './contratar.component';

describe('ContratarComponent', () => {
  let component: ContratarComponent;
  let fixture: ComponentFixture<ContratarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
