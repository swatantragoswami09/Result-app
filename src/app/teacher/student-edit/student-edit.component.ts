import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css'],
})
export class StudentEditComponent implements OnInit {
  form: FormGroup;
  id: number;
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
    this.studentService.get(this.id).subscribe((student) => {
      this.form.patchValue(student);
    });
  }

  ngOnInit(): void {}

  submit(): void {
    this.studentService
      .update(this.id, this.form.getRawValue())
      .subscribe(() => {
        this.router.navigate(['/teacher/students']);
      });
    alert('Edited Successfully');
  }
}
