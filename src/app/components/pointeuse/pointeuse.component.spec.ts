import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointeuseComponent } from './pointeuse.component';

describe('PointeuseComponent', () => {
  let component: PointeuseComponent;
  let fixture: ComponentFixture<PointeuseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PointeuseComponent]
    });
    fixture = TestBed.createComponent(PointeuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
