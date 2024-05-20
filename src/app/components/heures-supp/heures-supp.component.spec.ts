import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeuresSuppComponent } from './heures-supp.component';

describe('HeuresSuppComponent', () => {
  let component: HeuresSuppComponent;
  let fixture: ComponentFixture<HeuresSuppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeuresSuppComponent]
    });
    fixture = TestBed.createComponent(HeuresSuppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
