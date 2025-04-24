import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCreationBoxComponent } from './task-creation-box.component';

describe('TaskCreationBoxComponent', () => {
  let component: TaskCreationBoxComponent;
  let fixture: ComponentFixture<TaskCreationBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskCreationBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCreationBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
