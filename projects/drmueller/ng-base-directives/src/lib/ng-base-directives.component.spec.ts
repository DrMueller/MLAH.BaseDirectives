import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBaseDirectivesComponent } from './ng-base-directives.component';

describe('NgBaseDirectivesComponent', () => {
  let component: NgBaseDirectivesComponent;
  let fixture: ComponentFixture<NgBaseDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBaseDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBaseDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
