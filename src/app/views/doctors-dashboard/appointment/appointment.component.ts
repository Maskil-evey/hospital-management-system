import { Component } from '@angular/core';
import { DoctorsModel } from '../../../models/doctorsModel';
import { Router } from '@angular/router';
import { AppointmentService } from '../../../services/appointment.service';
import { All_Appointment } from '../../../models/appointmentModel';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {

  getDoctorInfo:DoctorsModel = JSON.parse(localStorage.getItem('doctorsInfo')!);
  showDoctorInfo:DoctorsModel= {}
  allDoctorsData:DoctorsModel[] = [];
  pendingAppointment:All_Appointment[] = [];
  ActiveOrCancelledAppointment:All_Appointment[] = JSON.parse(localStorage.getItem(`${this.getDoctorInfo.fullname} appointment`) || '[]');
  constructor(private route: Router, private service:AppointmentService) { }
  page = 1;
  tableSize = 5;
  tableSizes = [5,10,15,20 ];

  ngOnInit(): void {
    if(this.getDoctorInfo === null){
      this.route.navigate(['']);
    }
    this.getDoctorInfo = JSON.parse(localStorage.getItem('doctorsInfo') || '[]');
    this.allDoctorsData = JSON.parse(localStorage.getItem('doctorData') || '[]');

    for(let i of this.allDoctorsData){
      if(i.dob === this.getDoctorInfo.dob && i.department === this.getDoctorInfo.department && i.sex === this.getDoctorInfo.sex){
        this.showDoctorInfo = i;
        this.getDoctorInfo = i;
        localStorage.setItem('doctorsInfo', JSON.stringify(this.getDoctorInfo));
      }
      // else{
      //   this.route.navigate(['']);
      //   alert('Account Deleted');
      //   localStorage.removeItem('doctorsInfo');
      // }

    }


    //
    //get appointments from service
    this.service.getAppointmentForDoctor(this.getDoctorInfo.fullname);
    // filter pending appointment
    for(let i of this.service.doctorAppointment){
      if(i.status === 'Pending'){
        this.pendingAppointment.push(i);
      }
    }

  }

  // accept appointment
  acceptAppointment(id:any){
    for(let i of this.pendingAppointment){
      if(i.id === id){
        i.status = 'Accepted';
        this.ActiveOrCancelledAppointment.push(i);
        this.saveAppointment();
      }

    }
   for(let i of this.service.appointmentList){
      if(i.id == id){
        i.status = 'Accepted'
        localStorage.setItem('appointment', JSON.stringify(this.service.appointmentList));
      }
   }
  }

  // cancel appointment

  cancelAppointment(id:any){
    for(let i of this.pendingAppointment){
      if(i.id === id){
        i.status = 'Cancelled';
        this.ActiveOrCancelledAppointment.push(i);
        this.saveAppointment();
      }
    }
    for(let i of this.service.appointmentList){
      if(i.id == id){
        i.status = 'Cancelled'
        localStorage.setItem('appointment', JSON.stringify(this.service.appointmentList));
      }
    }
  }

  // save doctors appointment in local storage

  saveAppointment(){
    localStorage.setItem( `${this.getDoctorInfo.fullname} appointment`, JSON.stringify(this.ActiveOrCancelledAppointment));
  }
}
