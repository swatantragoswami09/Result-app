import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplaystudentComponent } from './main/displaystudent/displaystudent.component';
import { MainComponent } from './main/main.component';
import { ResultComponent } from './main/result/result.component';
import { StudentCreateComponent } from './teacher/student-create/student-create.component';
import { StudentEditComponent } from './teacher/student-edit/student-edit.component';
import { StudentsComponent } from './teacher/students/students.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'student',
    component: DisplaystudentComponent,
  },
  {
    path: 'result/:id',
    component: ResultComponent,
  },
  {
    path: 'teacher',
    component: TeacherComponent,
    children: [
      {
        path: 'students',
        component: StudentsComponent,
      },
      {
        path: 'students/create',
        component: StudentCreateComponent,
      },
      {
        path: 'students/:id/edit',
        component: StudentEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
