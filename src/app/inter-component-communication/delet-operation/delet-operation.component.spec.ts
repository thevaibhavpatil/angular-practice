import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletOperationComponent } from './delet-operation.component';

describe('DeletOperationComponent', () => {
  let component: DeletOperationComponent;
  let fixture: ComponentFixture<DeletOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
