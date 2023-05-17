import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientModel } from '../../../models/patientsModel';
import { SideEffects } from '../../../models/reoprtModule';
import { SideEffectServiceService } from '../../../services/side-effect-service.service';
import { PrescriptionService } from '../../../services/prescription.service';
import { Prescription } from 'src/app/models/doctorsModel';
import { Activities } from '../../../models/doctorsModel';
import { UserService } from 'src/app/services/user.service';
import { All_Appointment } from 'src/app/models/appointmentModel';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent {
  constructor(private routes:Router,private service:SideEffectServiceService, private prescriptionService:PrescriptionService, private user:UserService, private appointment:AppointmentService ){}
  getPatientInfo:PatientModel = {}
  getPatientAppointment:All_Appointment[] = [];
  switch = 'list';
  sent = false;
  message:string = '';

  navi(){
    this.routes.navigate(['/patient/appointment'],{});
  }

  prescription:Prescription[] =[]
  activity:Activities[] = [];
  sideEffects:SideEffects = {};

  ngOnInit(): void {

    this.getPatientInfo = JSON.parse(localStorage.getItem('patientsInfo')!);


    if(this.getPatientInfo === null){
      this.routes.navigate(['']);
    }
    this.prescriptionService.getPrescriptionByName(this.getPatientInfo.fullname)
    this.prescription = this.prescriptionService.currentUserPrescription;

    this.prescriptionService.getActivityByName(this.getPatientInfo.fullname);
    this.activity = this.prescriptionService.currentUserActivity;
    // console.log(this.activity);

    // if patients account has been updated or deleted from admin dashboard
    let getAllpatients:PatientModel[] = this.user.getAllPatients;
    for(let i of getAllpatients){
      if( this.getPatientInfo.id === i.id ){
        this.getPatientInfo = i;
        console.log(this.getPatientInfo);
        localStorage.setItem('patientsInfo', JSON.stringify(this.getPatientInfo));
      }
      // if(this.getPatientInfo.id !==i.id ){
      //  alert('Your account has been deleted by admin');
      //   localStorage.removeItem('patientsInfo');
      //   this.routes.navigate(['']);
      // }
      console.log(this.activity)
      console.log(this.prescription)
    }

    // get just 4 lenght of patients appointment
    this.getPatientAppointment = this.appointment.appointmentList.filter((item:All_Appointment)=> item.patientDetails?.id === this.getPatientInfo.id);
    this.getPatientAppointment = this.getPatientAppointment.slice(0,4);

  }
  // submit side effects report
  submit(){
    this.sideEffects.patientDetails = this.getPatientInfo;
    this.sideEffects.date = new Date().toDateString();
    this.sideEffects.prescription = this.prescriptionService.currentUserPrescription;
    this.service.sideEffectsList.push(this.sideEffects);
    localStorage.setItem('sideEffects', JSON.stringify(this.service.sideEffectsList));
    this.sent = true;
    // this.message = 'Your report has been submitted';
    this.sideEffects = {};
  }

  logout(){
    localStorage.removeItem('patientsInfo');
    this.routes.navigate(['']);
  }
}
