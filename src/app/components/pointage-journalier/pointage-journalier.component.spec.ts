import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointageJournalierComponent } from './pointage-journalier.component';

describe('PointageJournalierComponent', () => {
  let component: PointageJournalierComponent;
  let fixture: ComponentFixture<PointageJournalierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PointageJournalierComponent]
    });
    fixture = TestBed.createComponent(PointageJournalierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
