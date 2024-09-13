import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { student, students } from '../../../../Types/students.type';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [],
  templateUrl: './students.component.html',
  styles: ``
})
export class StudentsComponent implements OnChanges{
  // @Input() Students:students = [];
  Students:(student|undefined)[] = [];
  // @Input() oneStudent:student|undefined = undefined;
  // @Input('hamada') oneStudent:student|undefined = undefined;
  @Input({required:true}) oneStudent:student|undefined = undefined;

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    if(changes['oneStudent'].firstChange == false){
      this.Students.push(this.oneStudent);
      // console.log(this.Students);
    }
  }

}
