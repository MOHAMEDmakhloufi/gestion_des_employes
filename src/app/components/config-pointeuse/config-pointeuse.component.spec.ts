import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPointeuseComponent } from './config-pointeuse.component';

describe('ConfigPointeuseComponent', () => {
  let component: ConfigPointeuseComponent;
  let fixture: ComponentFixture<ConfigPointeuseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigPointeuseComponent]
    });
    fixture = TestBed.createComponent(ConfigPointeuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
