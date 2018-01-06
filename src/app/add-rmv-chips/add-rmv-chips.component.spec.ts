import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRmvChipsComponent } from './add-rmv-chips.component';

describe('AddRmvChipsComponent', () => {
  let component: AddRmvChipsComponent;
  let fixture: ComponentFixture<AddRmvChipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRmvChipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRmvChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
