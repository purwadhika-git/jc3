import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewunitComponent } from './newunit.component';

describe('NewunitComponent', () => {
  let component: NewunitComponent;
  let fixture: ComponentFixture<NewunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
