import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { RegisterationComponent } from './Components/Day4/ComponentLifeCycle/registeration/registeration.component';
 import { StudentsComponent } from './Components/Day4/ComponentLifeCycle/students/students.component';
import { student } from './Types/students.type';
import { ValidationComponent } from './Components/Day4/validation/validation.component';
import { HeaderComponent } from './Components/Day4/Routing/header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RegisterationComponent,ValidationComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab4';
  student:student|undefined = undefined ;

  GetData(data:any){
    // console.log(data);
    // this.Students.push(data);
    this.student = data;
  }
}
