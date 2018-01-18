import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleParentComponent } from './toggle-parent.component';

describe('ToggleParentComponent', () => {
  let component: ToggleParentComponent;
  let fixture: ComponentFixture<ToggleParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
