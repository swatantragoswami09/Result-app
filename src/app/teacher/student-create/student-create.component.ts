import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css'],
})
export class StudentCreateComponent implements OnInit {
  rollno = '';
  name = '';
  dob = '';
  score = '';

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {}
  submit(): void {
    const data = {
      rollno: this.rollno,
      name: this.name,
      dob: this.dob,
      score: this.score,
    };
    this.studentService.create(data).subscribe(() => {
      this.router.navigate(['/teacher/students']);
    });
    alert('Added Successfully');
  }
}
