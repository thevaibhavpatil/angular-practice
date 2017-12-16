import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JamboComponent } from './jambo.component';

describe('JamboComponent', () => {
  let component: JamboComponent;
  let fixture: ComponentFixture<JamboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JamboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JamboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
