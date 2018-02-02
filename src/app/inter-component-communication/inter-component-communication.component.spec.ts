import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterComponentCommunicationComponent } from './inter-component-communication.component';

describe('InterComponentCommunicationComponent', () => {
  let component: InterComponentCommunicationComponent;
  let fixture: ComponentFixture<InterComponentCommunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterComponentCommunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterComponentCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
