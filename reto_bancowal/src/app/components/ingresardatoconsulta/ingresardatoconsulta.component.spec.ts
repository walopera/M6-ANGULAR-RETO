import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresardatoconsultaComponent } from './ingresardatoconsulta.component';

describe('IngresardatoconsultaComponent', () => {
  let component: IngresardatoconsultaComponent;
  let fixture: ComponentFixture<IngresardatoconsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresardatoconsultaComponent]
    });
    fixture = TestBed.createComponent(IngresardatoconsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
