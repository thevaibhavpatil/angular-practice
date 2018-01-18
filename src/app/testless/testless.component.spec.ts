import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestlessComponent } from './testless.component';

describe('TestlessComponent', () => {
  let component: TestlessComponent;
  let fixture: ComponentFixture<TestlessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestlessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestlessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
