import { Routes } from '@angular/router';
import { RegisterationComponent } from './Components/Day4/ComponentLifeCycle/registeration/registeration.component';
import { StudentsComponent } from './Components/Day4/ComponentLifeCycle/students/students.component';
import { StudentDetailsComponent } from './Components/Day4/Routing/student-details/student-details.component';
//import { StudentsComponent } from './Components/Day4/Routing/students/students.component';
import { ProfileComponent } from './Components/Day4/Routing/profile/profile.component';
import { ErrorComponent } from './Components/Day4/Routing/error/error.component';

export const routes: Routes = [
    {path:"registeration",component:RegisterationComponent},
    {path:"",component:StudentsComponent},
    {path:"students",component:StudentsComponent},
    {path:"students/:id",component:StudentDetailsComponent},
    {path:"profile",component:ProfileComponent},
    {path:"**",component:ErrorComponent}
];