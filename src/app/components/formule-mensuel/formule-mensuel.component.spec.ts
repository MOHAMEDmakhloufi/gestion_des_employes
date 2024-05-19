import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuleMensuelComponent } from './formule-mensuel.component';

describe('FormuleMensuelComponent', () => {
  let component: FormuleMensuelComponent;
  let fixture: ComponentFixture<FormuleMensuelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormuleMensuelComponent]
    });
    fixture = TestBed.createComponent(FormuleMensuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
