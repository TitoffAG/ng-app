import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { OrderListByPipe, CourseDurationPipe } from '@pipes/index';
import { HighlightBorderDirective } from '@directives/highlight-border.directive';
import { CourseItemComponent } from '@components/course-item/course-item.component';
import { Course } from '@models/course';

import { CoursesListComponent } from './courses-list.component';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesListComponent,
        CourseItemComponent,
        OrderListByPipe,
        HighlightBorderDirective,
        CourseDurationPipe
      ],
      imports: [CardModule, ButtonModule, FontAwesomeModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should initialize courses list after ngOnInit is called', async(() => {
    component.ngOnInit();
    expect(component.courses.length).toEqual(6);
  }));

  it('should call load more method when load more button is clicked', async(() => {
    const spy = spyOn(component, 'loadMoreCourses').and.callThrough();
    const loadMoreButtonElement = fixture.debugElement.query(
      By.css('.load-more-button')
    );

    loadMoreButtonElement.triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalled();
  }));

  it('should delete course from courses list by given id', async(() => {
    const spy = spyOn(component, 'onDeletedCourse').and.callThrough();
    const id = 5;

    component.ngOnInit();
    component.onDeletedCourse(id, 'deleted course name');
    expect(spy).toHaveBeenCalledWith(id);
    expect(component.courses.length).toEqual(5);
  }));
});
