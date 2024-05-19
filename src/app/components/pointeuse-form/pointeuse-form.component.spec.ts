import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointeuseFormComponent } from './pointeuse-form.component';

describe('PointeuseFormComponent', () => {
  let component: PointeuseFormComponent;
  let fixture: ComponentFixture<PointeuseFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PointeuseFormComponent]
    });
    fixture = TestBed.createComponent(PointeuseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
