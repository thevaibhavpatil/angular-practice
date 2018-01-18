import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseHttpComponent } from './firebase-http.component';

describe('FirebaseHttpComponent', () => {
  let component: FirebaseHttpComponent;
  let fixture: ComponentFixture<FirebaseHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
