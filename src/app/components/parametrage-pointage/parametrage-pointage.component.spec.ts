import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametragePointageComponent } from './parametrage-pointage.component';

describe('ParametragePointageComponent', () => {
  let component: ParametragePointageComponent;
  let fixture: ComponentFixture<ParametragePointageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParametragePointageComponent]
    });
    fixture = TestBed.createComponent(ParametragePointageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
