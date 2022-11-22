import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/interfaces/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.all().subscribe((students) => {
      this.students = students;
    });
  }
  studentDel(id: number) {
    this.studentService.delete(id).subscribe(() => {
      this.students = this.students.filter((s) => s.id !== id);
    });
    alert('Deleted Successfully');
  }
}
