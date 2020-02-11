import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleOwnerComponent } from './detalle-owner.component';

describe('DetalleOwnerComponent', () => {
  let component: DetalleOwnerComponent;
  let fixture: ComponentFixture<DetalleOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
