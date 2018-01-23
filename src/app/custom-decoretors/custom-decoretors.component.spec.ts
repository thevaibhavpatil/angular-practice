import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDecoretorsComponent } from './custom-decoretors.component';

describe('CustomDecoretorsComponent', () => {
  let component: CustomDecoretorsComponent;
  let fixture: ComponentFixture<CustomDecoretorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDecoretorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDecoretorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
