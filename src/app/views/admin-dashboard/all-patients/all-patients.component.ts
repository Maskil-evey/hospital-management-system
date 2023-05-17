import { Component, ViewChild, ElementRef } from '@angular/core';
import { PatientModel } from '../../../models/patientsModel';
import { DoctorsModel } from '../../../models/doctorsModel';
import { of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.css'],
})
export class AllPatientsComponent {
  constructor(private user:UserService) {}
  patient: PatientModel = {};


  listofpatients: PatientModel[] = this.user.listofpatients;

  getAllDoctors: DoctorsModel[] = this.user.getAllDoctors;

  create() {
    this.patient.id = Math.floor(Math.random() * 1000);
    this.listofpatients.unshift(this.patient);
    localStorage.setItem('patientData', JSON.stringify(this.listofpatients));
    this.patient = {};
    this.modalOne.nativeElement.style.display = 'block';
  }

  selectedItem: PatientModel = {};
  select(item: PatientModel) {
    this.selectedItem = item;
  }
  removeElementFromObjectArray(any: PatientModel) {
    this.user.listofpatients.forEach((value, index) => {
      if (any.fullname === value.fullname) this.user.listofpatients.splice(index, 1);
    });
    localStorage.setItem('patientData', JSON.stringify(this.user.listofpatients));
  }
  switch=false;
  editPatient:PatientModel = {};

  edit(){
    this.editPatient = this.selectedItem;
  }
  update(){
    this.user.listofpatients.forEach((value, index) => {
      if (this.editPatient.fullname === value.fullname) this.user.listofpatients[index] = this.editPatient;
    });
    localStorage.setItem('patientData', JSON.stringify(this.user.listofpatients));
    this.editPatient = {};
    this.switch = true;
    this.modal.nativeElement.style.display = 'block';
  }

  value = '0';

  @ViewChild('cont', { read: ElementRef }) cont!: ElementRef;
  @ViewChild('btn', { read: ElementRef }) btn!: ElementRef;
  @ViewChild('side', { read: ElementRef }) side!: ElementRef;
  @ViewChild('modal', { read: ElementRef }) modal!: ElementRef;
  @ViewChild('modal1', { read: ElementRef }) modalOne!: ElementRef;

  closeModal(){
    this.modal.nativeElement.style.display = 'none';
    this.modalOne.nativeElement.style.display = 'none';
  }

  close() {
    this.side.nativeElement.style.width = '0px';
    this.cont.nativeElement.style.marginLeft = '0px';
  }
  open() {
    this.side.nativeElement.style.width = '250px';
    this.cont.nativeElement.style.marginLeft = '250px';
  }

  toggle() {
    if (this.value == '0') {
      this.close();
      this.value = '1';
    } else {
      this.open();
      this.value = '0';
    }
  }
  ngOnInit(): void {
    this.switch = false;
    this.modal.nativeElement.style.display = 'none';
    // this.listofpatients = this.user.listofpatients;

    this.user.savePatientData();
  }

}
