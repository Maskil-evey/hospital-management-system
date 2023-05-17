import { Component } from '@angular/core';
import { PatientModel } from '../../../models/patientsModel';
import { ReportForm, SideEffects } from '../../../models/reoprtModule';
import {
  DoctorsModel,
  Prescription,
  Activities,
} from '../../../models/doctorsModel';
import { PrescriptionService } from '../../../services/prescription.service';
import { Router } from '@angular/router';
import { SideEffectServiceService } from 'src/app/services/side-effect-service.service';

@Component({
  selector: 'app-doctors-patient',
  templateUrl: './doctors-patient.component.html',
  styleUrls: ['./doctors-patient.component.css'],
})
export class DoctorsPatientComponent {
  change: string = 'prescription';
  selectedItem: any = {};
  // selectedItem2: SideEffects = {};

  page:number=1;
  tableSize:number=5;
  tableSizes: number[] = [5, 10, 15, 20];
  select(any: any) {
    this.selectedItem = any;
  }




  getDoctorInfo: DoctorsModel = JSON.parse(
    localStorage.getItem('doctorsInfo')!
  );
  showDoctorInfo: DoctorsModel = {};
  prescription: Prescription = {};
  allDoctorsData: DoctorsModel[] = [];
  getAllPatient: PatientModel[] = JSON.parse(
    localStorage.getItem('patientData') || '[]'
  );
  sideEffects: SideEffects[] = [];
  doctorPatients: PatientModel[] = [];
  constructor(
    private service: PrescriptionService,
    private route: Router,
    private sideEffectsService: SideEffectServiceService
  ) {}

  ngOnInit(): void {
    // this.getDoctorInfo =
    if (this.getDoctorInfo === null) {
      this.route.navigate(['']);
    }
    //  this.getDoctorInfo = JSON.parse(localStorage.getItem('doctorsInfo') || '[]');
    this.doctorPatients = this.getAllPatient.filter(
      (patient: PatientModel) =>
        patient.assignedDoctor === this.getDoctorInfo.fullname
    );

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
    // get sideEffect sreport by doctor
    this.sideEffectsService.showSideEffectsList(this.getDoctorInfo.fullname);
    this.sideEffects = this.sideEffectsService.doctorsPatientSideEffects;
  }

  //  add prescription to service
  addPrescription() {
    this.prescription.doctorName = this.showDoctorInfo.fullname;
    this.prescription.patientName = this.selectedItem.fullname;
    this.prescription.patientAge = this.selectedItem.age;
    this.prescription.patientSex = this.selectedItem.sex;
    this.service.prescriptionList.push(this.prescription);
    console.log(this.service.prescriptionList);
    localStorage.setItem(
      'prescription',
      JSON.stringify(this.service.prescriptionList)
    );
    this.prescription = {};
    this.selectedItem = {};
    alert('Done...Prescription sent')

  }

  activities: Activities = {};
  activitiesList: Activities[] = [];
  addActivity() {
    this.activities.doctorName = this.showDoctorInfo.fullname;
    this.activities.patientName = this.selectedItem.fullname;
    this.activities.patientAge = this.selectedItem.age;
    this.activities.patientSex = this.selectedItem.sex;
    this.activitiesList.push(this.activities);
    this.getActivityIcon();
    // this.service.filterActivityList(this.activities);
    this.activities = {};
    // console.log(this.activitiesList);
  }

  getActivityIcon() {
    for (let i of this.activitiesList) {
      if (i.activity === 'Sleeping') {
        i.activityIcon = 'https://img.icons8.com/ios/50/000000/sleep.png';
      } else if (i.activity === 'Walking') {
        i.activityIcon = 'https://img.icons8.com/ios/50/000000/walking.png';
      } else if (i.activity === 'Eating') {
        i.activityIcon = 'https://img.icons8.com/ios/50/000000/eating.png';
      } else if (i.activity === 'Swimming') {
        i.activityIcon = 'https://img.icons8.com/ios/50/000000/swimming.png';
      } else if (i.activity === 'Running') {
        i.activityIcon = 'https://img.icons8.com/ios/50/000000/running.png';
      } else if (i.activity === 'Cycling') {
        i.activityIcon = 'https://img.icons8.com/ios/50/000000/cycling.png';
      } else if (i.activity === 'Gym') {
        i.activityIcon = 'https://img.icons8.com/ios/50/000000/gym.png';
      } else if (i.activity === 'Yoga') {
        i.activityIcon = 'https://img.icons8.com/ios/50/000000/yoga.png';
      } else if (i.activity === 'Meditation') {
        i.activityIcon = 'https://img.icons8.com/ios/50/000000/meditation.png';
      } else if (i.activity === 'Reading') {
        i.activityIcon = 'https://img.icons8.com/ios/50/000000/reading.png';
      } else if (i.activity === 'Watching TV') {
        i.activityIcon = 'https://img.icons8.com/ios/50/000000/tv.png';
      } else {
      }
    }
    return;
  }

  deleteActivity(item: any) {
    let index = this.activitiesList.indexOf(item);
    this.activitiesList.splice(index, 1);
  }

  addToService() {
    this.service.activityList.push(...this.activitiesList);
    localStorage.setItem(
      'activities',
      JSON.stringify(this.service.activityList)
    );
    this.activitiesList = [];
    alert('Done....Activity sent')
  }

  OnTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.ngOnInit();
  }

  // select2(item: SideEffects){
  //   this.selectedItem2 = item;
  // }


  // removeElementFromObjectArray(any: any) {
  //   this.doctorPatients = this.doctorPatients.filter((item: any) => item !== any);
  //   localStorage.setItem('deathreports', JSON.stringify(this.doctorPatients));
  // }
}
