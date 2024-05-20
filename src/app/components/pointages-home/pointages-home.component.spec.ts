import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointagesHomeComponent } from './pointages-home.component';

describe('PointagesHomeComponent', () => {
  let component: PointagesHomeComponent;
  let fixture: ComponentFixture<PointagesHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PointagesHomeComponent]
    });
    fixture = TestBed.createComponent(PointagesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
