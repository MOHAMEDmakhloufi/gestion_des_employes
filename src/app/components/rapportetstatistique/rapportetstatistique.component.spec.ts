import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportetstatistiqueComponent } from './rapportetstatistique.component';

describe('RapportetstatistiqueComponent', () => {
  let component: RapportetstatistiqueComponent;
  let fixture: ComponentFixture<RapportetstatistiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RapportetstatistiqueComponent]
    });
    fixture = TestBed.createComponent(RapportetstatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
