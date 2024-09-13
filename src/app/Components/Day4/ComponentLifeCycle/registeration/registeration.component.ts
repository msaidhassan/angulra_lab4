import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './registeration.component.html',
  styles: ``
})
export class RegisterationComponent {

  //1)Data??
  name: string = '';
  age: number | null = null;
  // name="";
  // age="";
  email: string = '';
  //2)Create Event
  @Output() myEvent = new EventEmitter();

  //3)Fire Event
  FireNow(){
    if (this.name.length >= 3 && this.age && this.age > 20 && this.age < 40) {
      this.myEvent.emit({ name: this.name, age: this.age });
      this.name = '';
      this.age = null;
    } else {
      alert('Name must be at least 3 characters, and age must be between 20 and 40.');
    }
  }
    //this.myEvent.emit( {name:this.name, age: +this.age , email:+this.email} )
  }

