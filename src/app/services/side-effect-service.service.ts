import { Injectable } from '@angular/core';
import { SideEffects } from '../models/reoprtModule';

@Injectable({
  providedIn: 'root'
})
export class SideEffectServiceService {

  constructor() { }

   // report sideEffects of prescripton
  sideEffectsList:SideEffects[] = [];
  doctorsPatientSideEffects:SideEffects[] = JSON.parse(localStorage.getItem('sideEffects') || '[]');

    // show patients sideEffects report list
  showSideEffectsList(doctorName:any){
    for(let i of this.sideEffectsList){
      if(i.patientDetails?.assignedDoctor === doctorName){
        this.doctorsPatientSideEffects.push(i);
      }
    }
  }


}
