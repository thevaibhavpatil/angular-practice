import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContententProjectionComponent } from './contentent-projection.component';

describe('ContententProjectionComponent', () => {
  let component: ContententProjectionComponent;
  let fixture: ComponentFixture<ContententProjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContententProjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContententProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
