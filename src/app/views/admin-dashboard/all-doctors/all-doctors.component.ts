import { Component, ElementRef, ViewChild } from '@angular/core';
import { DoctorsModel } from '../../../models/doctorsModel';
import { PatientModel } from '../../../models/patientsModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.css']
})
export class AllDoctorsComponent {
  constructor(private user: UserService) {}
  doctors:DoctorsModel = {};
  // listDoctorsData:DoctorsModel[] = [];
  listdoctors:DoctorsModel[] = []


  getPatientData:PatientModel[] = this.user.getAllPatients;
  // getDoctorsInfo:DoctorsModel= JSON.parse(localStorage.getItem('doctorInfo') || '{}');

  value = '0';

  @ViewChild('cont',{read:ElementRef})cont!: ElementRef;
  @ViewChild('btn',{read:ElementRef})btn!: ElementRef;
  @ViewChild('side',{read:ElementRef})side!: ElementRef;

  close() {
    this.side.nativeElement.style.width = "0px";
    this.cont.nativeElement.style.marginLeft = "0px";
  }
 open() {
    this.side.nativeElement.style.width = "250px";
    this.cont.nativeElement.style.marginLeft = "250px";
  }

  toggle(){
    if (this.value == '0'){
     this.close();
      this.value='1';
    } else {
      this.open();
      this.value='0';
    }
  }
  selectedItem:DoctorsModel={}
  select(item:DoctorsModel){
    this.selectedItem = item;
    // console.log(this.getPatientData)
  };

  ngOnInit() {
    // get all doctors data from local storage
    this.user.saveDoctorData();

    this.listdoctors = this.user.listdoctors;
  }
  removeElementFromObjectArray(any: DoctorsModel) {
    this.user.listdoctors.forEach((value, index) => {
      if (any.fullname === value.fullname) this.user.listdoctors.splice(index, 1);
    });
    localStorage.setItem('doctorData', JSON.stringify(this.user.listdoctors));
  }

  createNewDoctor() {
    this.doctors.id = Math.floor(Math.random() * 100);
    this.user.listdoctors.unshift(this.doctors);
    localStorage.setItem('doctorData', JSON.stringify(this.user.listdoctors));
    this.modalOne.nativeElement.style.display = 'block';
  }

  editDoctor:DoctorsModel = {};

  edit(){
    this.editDoctor = this.selectedItem;
  }


  editAssignedDoctor(){
    this.getPatientData.forEach((value, index) => {
      if(this.editDoctor.fullname === value.assignedDoctor){
        this.getPatientData[index].assignedDoctor = this.editDoctor.fullname;
      }
      localStorage.setItem('patientData', JSON.stringify(this.getPatientData));
    })
  }

  update(){
    this.user.listdoctors.forEach((value, index) => {
      if (this.editDoctor.fullname === value.fullname) this.user.listdoctors[index] = this.editDoctor;
    });

    localStorage.setItem('doctorData', JSON.stringify(this.user.listdoctors));
    // localStorage.setItem('patientData', JSON.stringify(this.getPatientData));
    this.editDoctor = {};
    this.modal.nativeElement.style.display = 'block';


  }
  @ViewChild('modal', { read: ElementRef }) modal!: ElementRef;
  @ViewChild('modal1', { read: ElementRef }) modalOne!: ElementRef;

  closeModal(){
    this.modal.nativeElement.style.display = 'none';
    this.modalOne.nativeElement.style.display = 'none';
  }


  disabled = false;

  keyUpEvent(event: any) {
    if(event.target.value.length > 6){
      this.disabled = true;
  }else{
    this.disabled = false;
  }
}

}
