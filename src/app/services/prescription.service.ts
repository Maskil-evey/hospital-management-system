import { Injectable } from '@angular/core';
import { find } from 'rxjs';
import { Prescription, Activities } from '../models/doctorsModel';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  constructor() { }

  // all prescription
  prescriptionList:Prescription[] = JSON.parse(localStorage.getItem('prescription') || '[]');
  currentUserPrescription:Prescription[]=[]
  getPrescriptionByName(name:any ){
    for(let i of this.prescriptionList){
      if(i.patientName === name!){
        this.currentUserPrescription.push(i);
      }

    }
    return;
  }

  // activites]

// activityList:Activities[] = []
activityList:Activities[] = JSON.parse(localStorage.getItem('activities') || '[]');
// currentUserActivity:Activities[] = [];
currentUserActivity:Activities[] = [];
filteredActivity:Activities[] = [];


getActivityByName(name:any){
  for(let i of this.activityList){
    if(i.patientName === name!){
      this.currentUserActivity.push(i);
      console.log(this.currentUserActivity);
      // this.findActivity(i.activity);
    };
}
}

// filterActivityList(activity:Activities){
// var currentArray = this.filteredActivity.find((i:Activities)=>i.activity === activity.activity);
// if(currentArray){
//   console.log('already exist');
// }
// else{
//   this.activityList.push(activity);
//   localStorage.setItem('activity',JSON.stringify(this.activityList));
// }
// console.log(this.activityList);
// }

// findActivity(activity:any){
//   var currentActivity = this.currentUserActivity.find((i:any)=>i.activity === activity);

//   if(currentActivity){
//     return console.log('already exist');
//   }
//   else{
//   this.filteredActivity.push(currentActivity!);
//   console.log(this.filteredActivity);
//   }
// }
}
