import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateFormationComponent } from './delate-formation.component';

describe('DelateFormationComponent', () => {
  let component: DelateFormationComponent;
  let fixture: ComponentFixture<DelateFormationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelateFormationComponent]
    });
    fixture = TestBed.createComponent(DelateFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
