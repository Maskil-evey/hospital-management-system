import { Component, ElementRef, ViewChild } from '@angular/core';
import { DoctorsModel } from '../../../models/doctorsModel';
import { OnInit } from '@angular/core';
import { NurseModel } from '../../../models/nurseModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './all-dashboard.component.html',
  styleUrls: ['./all-dashboard.component.css']
})
export class DashboardComponent {

  doctor: DoctorsModel[] = JSON.parse(localStorage.getItem('doctorData') || '[]');
  nurse: NurseModel[] = JSON.parse(localStorage.getItem('nurseData') || '[]');

  constructor() { }



  ngOnInit(): void {
    this.doctor.splice(1, 3);
    this.nurse.splice(3);
  }

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
}
