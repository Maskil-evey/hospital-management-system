import { Component } from '@angular/core';
import { PatientModel } from '../../../models/patientsModel';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-patient-report',
  templateUrl: './patient-report.component.html',
  styleUrls: ['./patient-report.component.css']
})
export class PatientReportComponent {
  getPatientInfo:PatientModel = JSON.parse(localStorage.getItem('patientsInfo')|| '' );

  constructor(private route:Router, private user:UserService) { }

  ngOnInit(): void {
    if(this.getPatientInfo === null){
      this.route.navigate(['']);
    }

     // if patients account has been updated or deleted from admin dashboard
     let getAllpatients:PatientModel[] = this.user.getAllPatients;
     for(let i of getAllpatients){
       if((i.dob === this.getPatientInfo.dob && i.id === this.getPatientInfo.id && i.sex === this.getPatientInfo.sex)){
         this.getPatientInfo = i;
         localStorage.setItem('patientsInfo', JSON.stringify(this.getPatientInfo));
       }
      //  else{
      //    this.route.navigate(['']);
      //    alert('Account Deleted');
      //    localStorage.removeItem('patientsInfo');
      //  }
     }
  }
logout(){
  localStorage.removeItem('patientsInfo');
  this.route.navigate(['']);
}
}
