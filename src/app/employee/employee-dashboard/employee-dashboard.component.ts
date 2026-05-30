import { Component } from '@angular/core';
import { EMployeeServiceService } from 'src/Services/employee-service.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})


export class EmployeeDashboardComponent {


  constructor(private empservice: EMployeeServiceService)
  {

  }

  ngOnInit()
  {
    alert("Here it is")
    debugger
     this.empservice.ShowEmployee().subscribe(

      (res)=>{
        console.log("Resulet is came");
         console.log(res);
         //alert("Suketu");
         console.log("this is conflict from dalsukh");
        // console.log("ok")
        alert("nothing from my side");
      }
     )
    }

    

}
