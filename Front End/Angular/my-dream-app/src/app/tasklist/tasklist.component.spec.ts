import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklistoComponent } from './tasklist.component';

describe('TasklistoComponent', () => {
  let component: TasklistoComponent;
  let fixture: ComponentFixture<TasklistoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasklistoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasklistoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
