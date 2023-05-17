import { Component } from '@angular/core';
import { PatientModel } from '../../../models/patientsModel';
import { DoctorsModel } from '../../../models/doctorsModel';
import { ReportForm, SideEffects } from '../../../models/reoprtModule';
import { Router } from '@angular/router';
import { SideEffectServiceService } from 'src/app/services/side-effect-service.service';

@Component({
  selector: 'app-doctor-report',
  templateUrl: './doctor-report.component.html',
  styleUrls: ['./doctor-report.component.css'],
})
export class DoctorReportComponent {
  constructor(private route: Router) {}
  patients = [
    {
      name: 'John',
      image: 'https://www.w3schools.com/howto/img_avatar.png',
    },
  ];

  switch?: boolean;

  selectedPatient: PatientModel = {};
  pattientsReprts: ReportForm[] = JSON.parse(
    localStorage.getItem('patientReports') || '[]'
  );
  patientReport: ReportForm = {};

  submitTest() {
    this.patientReport.doctorName = this.getDoctorInfo.fullname;
    this.patientReport.patientName = this.selectedPatient.fullname;
    this.patientReport.patientEmail = this.selectedPatient.email;
    this.pattientsReprts.push(this.patientReport);
    localStorage.setItem(
      'patientReports',
      JSON.stringify(this.pattientsReprts)
    );
    this.patientReport = {};
    this.switch = true;
  }
  close() {
    this.switch = false;
  }
  select(any: any) {
    this.selectedPatient = any;
  }
  getDoctorInfo: DoctorsModel = JSON.parse(
    localStorage.getItem('doctorsInfo')!
  );
  showDoctorInfo: DoctorsModel = {};
  allDoctorsData: DoctorsModel[] = [];
  getAllPatient: PatientModel[] = JSON.parse(
    localStorage.getItem('patientData') || '[]'
  );

  doctorPatients: PatientModel[] = [];

  ngOnInit(): void {
    if (this.getDoctorInfo === null) {
      this.route.navigate(['']);
    }
    this.switch = false;

    localStorage.setItem(
      'patientReports',
      JSON.stringify(this.pattientsReprts)
    );

    this.getDoctorInfo = JSON.parse(
      localStorage.getItem('doctorsInfo') || '[]'
    );

    this.doctorPatients = this.getAllPatient.filter(
      (patient: PatientModel) =>
        patient.assignedDoctor === this.getDoctorInfo.fullname
    );
    console.log(this.getDoctorInfo);

    this.getDoctorInfo = JSON.parse(
      localStorage.getItem('doctorsInfo') || '[]'
    );
    this.allDoctorsData = JSON.parse(
      localStorage.getItem('doctorData') || '[]'
    );

    for (let i of this.allDoctorsData) {
      if (
        i.dob === this.getDoctorInfo.dob &&
        i.department === this.getDoctorInfo.department &&
        i.sex === this.getDoctorInfo.sex
      ) {
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
  }

  //see patients prescription
  seePrescription() {
    
  }
}
