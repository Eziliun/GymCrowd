import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NossosservicosComponent } from './nossosservicos.component';

describe('NossosservicosComponent', () => {
  let component: NossosservicosComponent;
  let fixture: ComponentFixture<NossosservicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NossosservicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NossosservicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
