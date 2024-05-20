import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrageLogicielComponent } from './parametrage-logiciel.component';

describe('ParametrageLogicielComponent', () => {
  let component: ParametrageLogicielComponent;
  let fixture: ComponentFixture<ParametrageLogicielComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParametrageLogicielComponent]
    });
    fixture = TestBed.createComponent(ParametrageLogicielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
