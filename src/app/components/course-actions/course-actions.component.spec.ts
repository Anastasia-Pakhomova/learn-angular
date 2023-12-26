import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseActionsComponent } from './course-actions.component';

describe('CourseActionsComponent', () => {
  let component: CourseActionsComponent;
  let fixture: ComponentFixture<CourseActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
