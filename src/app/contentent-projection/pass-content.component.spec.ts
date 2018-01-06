import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassContentComponent } from './pass-content.component';

describe('PassContentComponent', () => {
  let component: PassContentComponent;
  let fixture: ComponentFixture<PassContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
