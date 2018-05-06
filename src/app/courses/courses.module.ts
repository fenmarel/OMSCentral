import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeModule } from '../pipes/pipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesComponent } from './courses.component';
import { AppRoutingModule } from '../app-routing.module';
import { CourseComponent } from './course/course.component';
import { CourseNavComponent } from './course-nav/course-nav.component';
import { ReviewsModule } from '../reviews/reviews.module';
import {
  MatCardModule,
  MatButtonToggleModule,
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatSidenavModule,
  MatListModule,
} from '@angular/material';
import { CourseListComponent } from './course-list/course-list.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    PipeModule,
    ReactiveFormsModule,
    ReviewsModule,
    FormsModule,
    MatCardModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatSidenavModule,
    MatListModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [CoursesComponent, CourseComponent, CourseNavComponent, CourseListComponent],
})
export class CoursesModule {}
