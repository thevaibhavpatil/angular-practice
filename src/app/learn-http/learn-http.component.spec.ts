import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnHttpComponent } from './learn-http.component';

describe('LearnHttpComponent', () => {
  let component: LearnHttpComponent;
  let fixture: ComponentFixture<LearnHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
