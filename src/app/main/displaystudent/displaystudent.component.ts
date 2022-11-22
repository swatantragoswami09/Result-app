import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/interfaces/student';
import { StudentService } from 'src/app/services/student.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-displaystudent',
  templateUrl: './displaystudent.component.html',
  styleUrls: ['./displaystudent.component.css'],
})
export class DisplaystudentComponent implements OnInit {
  rollno = '';
  name = '';
  id = 0;
  // form: FormGroup;
  students: Student[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.route.snapshot.params.id;
    // this.form = this.formBuilder.group({
    //   rollno: '',
    //   name: '',
    // });
  }

  ngOnInit(): void {
    this.studentService.all().subscribe((students) => {
      this.students = students;
    });
  }

  submit(): void {
    // console.log(this.form.getRawValue());
    // console.log(this.name);
    const data = {
      rollno: this.rollno,
      name: this.name,
    };
    console.log(data);
    // console.log(this.id);

    // console.log(student);
    this.students.forEach((obj) => {
      if (parseInt(String(obj.rollno)) == parseInt(data.rollno)) {
        this.id = obj.id;
      }
    });
    console.log(this.id);
    if (this.id === undefined) alert('Roll No not Exist');
    else {
      this.studentService.get(this.id).subscribe((student) => {
        this.router.navigate([`/result/${this.id}`]);
      });
    }
  }
}
