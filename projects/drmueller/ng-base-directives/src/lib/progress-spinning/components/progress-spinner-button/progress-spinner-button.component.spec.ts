import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSpinnerButtonComponent } from './progress-spinner-button.component';

describe('ProgressSpinnerButtonComponent', () => {
  let component: ProgressSpinnerButtonComponent;
  let fixture: ComponentFixture<ProgressSpinnerButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressSpinnerButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressSpinnerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
