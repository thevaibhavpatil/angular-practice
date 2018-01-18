import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleFromParentComponent } from './toggle-from-parent.component';

describe('ToggleFromParentComponent', () => {
  let component: ToggleFromParentComponent;
  let fixture: ComponentFixture<ToggleFromParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleFromParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleFromParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
