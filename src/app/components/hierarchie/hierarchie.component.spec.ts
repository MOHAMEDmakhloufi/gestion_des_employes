import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchieComponent } from './hierarchie.component';

describe('HierarchieComponent', () => {
  let component: HierarchieComponent;
  let fixture: ComponentFixture<HierarchieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HierarchieComponent]
    });
    fixture = TestBed.createComponent(HierarchieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
