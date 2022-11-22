import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { DisplaystudentComponent } from './displaystudent/displaystudent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [MainComponent, DisplaystudentComponent, ResultComponent],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
})
export class MainModule {}
