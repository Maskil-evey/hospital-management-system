import { Component } from '@angular/core';
import { UserModel } from '../../models/userSignupModel';
import { UserSignInModel } from '../../models/userSignInModel';
import { DoctorsModel } from '../../models/doctorsModel';
import { Router, RouterModule } from '@angular/router';
import { PatientModel } from '../../models/patientsModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private routerLink:Router, private users:UserService) { }
  getDoctorsList:DoctorsModel[] = this.users.getAllDoctors;
  getPatientList:PatientModel[] = JSON.parse(localStorage.getItem('patientData')|| '[]');

  userModel = new UserSignInModel();
  user= true;
  bg= false;
  txt= false;
  logintxt='Admin Login'
  saveDoctorsProfile: DoctorsModel={};
  savePatientProfile: PatientModel={};
  isAuthenticated = false;
  patientAuthenticated = false;
  errorMessage=''

  adminLogin(){
    if(this.user == false){
      this.bg = true;
      this.txt = true;
      this.logintxt='User Login'
    }
    else if(this.user == true){
      this.bg = false;
      this.txt = false;
      this.logintxt='Admin Login'
    }
  }


  login(){
    for(let i=0; i<this.getDoctorsList.length;i++){
      if(this.userModel.email== this.getDoctorsList[i].email && this.userModel.password==this.getDoctorsList[i].password){
        this.saveDoctorsProfile= this.getDoctorsList[i];
        localStorage.setItem('doctorsInfo', JSON.stringify(this.saveDoctorsProfile));
        this.isAuthenticated = true
      }
    }
    for(let i=0; i<this.getPatientList.length;i++){
      if(this.userModel.email== this.getPatientList[i].email && this.userModel.password==this.getPatientList[i].password){
        this.savePatientProfile= this.getPatientList[i];
        localStorage.setItem('patientsInfo', JSON.stringify(this.savePatientProfile));
        this.patientAuthenticated = true
      }
    }
    if (this.isAuthenticated) {
      this.routerLink.navigate(['doctor/dashboard'],{});
    }
    else if(this.patientAuthenticated){
      this.routerLink.navigate(['patient/dashboard'],{});
    }
    else {

      setTimeout(() => {
        this.errorMessage = `Email or Password is incorrect..!`;

      }, 1000);
      setTimeout(() => {
        this.errorMessage = '';
      }, 3200);
    }
    console.log(this.saveDoctorsProfile);
  }

  ngOnInit() {

  }
}
