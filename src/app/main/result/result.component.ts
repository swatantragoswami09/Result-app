import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/interfaces/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  id = 0;
  form: FormGroup;
  students: Student[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      rollno: '',
      name: '',
      dob: '',
      score: '',
    });

    this.id = this.route.snapshot.params.id;

    console.log(this.id);

    this.studentService.get(this.id).subscribe((student) => {
      this.form.patchValue(student);
    });
    console.log(this.form.getRawValue());
  }

  ngOnInit(): void {
    this.studentService.all().subscribe((students) => {
      this.students = students;
    });
    // console.log(this.students);
  }
}
