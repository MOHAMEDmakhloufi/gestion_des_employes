import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointageManquantComponent } from './pointage-manquant.component';

describe('PointageManquantComponent', () => {
  let component: PointageManquantComponent;
  let fixture: ComponentFixture<PointageManquantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PointageManquantComponent]
    });
    fixture = TestBed.createComponent(PointageManquantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
