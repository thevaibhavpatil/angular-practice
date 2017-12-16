import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsupationComponent } from './encapsupation.component';

describe('EncapsupationComponent', () => {
  let component: EncapsupationComponent;
  let fixture: ComponentFixture<EncapsupationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncapsupationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncapsupationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
