import { Injectable } from '@angular/core';
import { All_Appointment } from '../models/appointmentModel';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor() { }

  // all appointment
  appointmentList:All_Appointment[] = JSON.parse(localStorage.getItem('appointment') || '[]');

  userAppointment:All_Appointment[] = [];
  // get appointment by name

  getAppointmentByName(name:any){
    for(let i of this.appointmentList){
      if(i.patientDetails?.fullname === name!){
        this.userAppointment.push(i);
      }
    }
    return;
  }

  // get appointment for doctor

  doctorAppointment:All_Appointment[] = [];
  getAppointmentForDoctor(name:any){
    for(let i of this.appointmentList){
      if(i.doctorName === name!){
        this.doctorAppointment.push(i);
      }
    }
    return;
  }
}
