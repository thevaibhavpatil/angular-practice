import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridUseComponent } from './grid-use.component';

describe('GridUseComponent', () => {
  let component: GridUseComponent;
  let fixture: ComponentFixture<GridUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
