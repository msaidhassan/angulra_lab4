import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-validation',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './validation.component.html',
  styles: ``
})
export class ValidationComponent {
  // GetData(name:string, age:number){
  //   let newStudent = {name, age};
  //   console.log(newStudent);
  // }

  myForm = new FormGroup({
    name: new FormControl(null,Validators.required),
    age: new FormControl(null, [Validators.min(20), Validators.max(50)]),
    email: new FormControl(null, [Validators.min(20), Validators.max(50)])

  })


  get NameValid(){
    return this.myForm.controls['name'].valid;
  }

  GetDate(){
    // console.log(this.myForm.value);
    // console.log(this.myForm.valid);
    // console.log("------------------");
    // if(this.myForm.valid){//VALID

    // }else{//INVALID
    //   alert("Check Ur Data")
    // }

    console.log(this.myForm.controls['name'].valid)
    console.log(this.myForm.controls['age'].valid)
  }

}
