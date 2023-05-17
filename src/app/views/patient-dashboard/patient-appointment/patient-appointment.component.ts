import { Component } from '@angular/core';
import { DoctorsModel } from '../../../models/doctorsModel';
import { All_Appointment } from '../../../models/appointmentModel';
import { PatientModel } from '../../../models/patientsModel';
import { Router } from '@angular/router';
import { AppointmentService } from '../../../services/appointment.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.css']
})
export class PatientAppointmentComponent {
  getAllDoctors:DoctorsModel[]= JSON.parse(localStorage.getItem('doctorData') || '[]');
  getPatientInfo:PatientModel = JSON.parse(localStorage.getItem('patientsInfo')|| '' );

  getAppointment:All_Appointment []= this.service.appointmentList;
  getPatientsAppointment:All_Appointment []= []

  constructor(private route:Router,private user:UserService, private service:AppointmentService) { }

  newAppiontment:All_Appointment = {}


  // add to service
  addAppointment(){
    this.newAppiontment.patientDetails = this.getPatientInfo;
    this.newAppiontment.status = 'Pending';
    this.newAppiontment.id = Math.floor(Math.random() * 1000);
    // console.log(this.newAppiontment);
    this.service.appointmentList.unshift(this.newAppiontment);
    localStorage.setItem('appointment', JSON.stringify(this.service.appointmentList));
    this.newAppiontment = {};
    alert('Appointment Sent Successfully');
    this.ngOnInit();
  }

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

     // get patients appointment
     this.getPatientsAppointment = this.service.appointmentList.filter((item:All_Appointment)=> item.patientDetails?.id === this.getPatientInfo.id);
  }
  logout(){
    localStorage.removeItem('patientsInfo');
    this.route.navigate(['']);
  }

  // view appointment schedule from select  option using doctors name
  viewAppointment:All_Appointment[] = [];
  doctorName = '';
  viewSchedule(){
    this.viewAppointment = this.service.appointmentList.filter((item:All_Appointment)=> item.doctorName === this.doctorName);
    this.doctorName = this.doctorName;
  }
}
