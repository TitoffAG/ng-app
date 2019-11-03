import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { CourseItemComponent } from './course-item.component';
import { Course } from 'src/app/models/course';

@Component({
  selector: `app-host-component`,
  template: `
    <app-course-item [course]="course"> </app-course-item>
  `
})
class TestHostComponent {
  @ViewChild(CourseItemComponent, { static: true })
  componentUnderTestComponent: CourseItemComponent;

  course = new Course(
    '05/29/2018',
    'Webpack, AngularCLI, TypeScript.',
    88,
    '1',
    '1. Prerequisites'
  );
}

describe('CourseItemComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, CourseItemComponent],
      imports: [FontAwesomeModule, ButtonModule, CardModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should create the component', async(() => {
    expect(testHostComponent).toBeTruthy();
  }));

  it('should edit course method when edit button is clicked', async(() => {
    const spy = spyOn(
      testHostComponent.componentUnderTestComponent,
      'editCourse'
    ).and.callThrough();
    const editCourseButtonElement = testHostFixture.debugElement.query(
      By.css('.edit-course-button')
    );

    editCourseButtonElement.triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalled();
  }));

  it('should delete course method when delete button is clicked', async(() => {
    const spy = spyOn(
      testHostComponent.componentUnderTestComponent,
      'deleteCourse'
    ).and.callThrough();
    const deleteCourseButtonElement = testHostFixture.debugElement.query(
      By.css('.delete-course-button')
    );

    deleteCourseButtonElement.triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalled();
  }));
});
