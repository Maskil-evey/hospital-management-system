import { Component, ElementRef, ViewChild } from '@angular/core';
import { DeathReport } from '../../../../../models/reoprtModule';
import { DoctorsModel } from '../../../../../models/doctorsModel';

@Component({
  selector: 'app-death-report',
  templateUrl: './death-report.component.html',
  styleUrls: ['./death-report.component.css']
})
export class DeathReportComponent {
  updated:boolean = false;
  created:boolean = false;
  dateSearch: string = '';
  page:number=1;
  tableSize:number=5;
  tableSizes: number[] = [5, 10, 15, 20];

  newDeathReport: DeathReport = {};

  allListOfDeathReports: DeathReport[] = JSON.parse(localStorage.getItem('deathreports') || '[]');
  ngOnInit(): void {

  }

  search(any:any){
    this.allListOfDeathReports = this.allListOfDeathReports.filter((item:DeathReport) => item.date!.includes(any));
    console.log(any);
    if(any == ''){
      this.allListOfDeathReports = JSON.parse(localStorage.getItem('deathreports') || '[]');
    }
  }
  OnTableDataChane(event: any){
    this.page = event;
    this.ngOnInit();
  };

  OnTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.ngOnInit();
  }


  answer= ['Yes','No'];
  value = '0';
  switch: boolean = true;
  selectedReport: DeathReport = {}

  @ViewChild('cont',{read:ElementRef})cont!: ElementRef;
  @ViewChild('btn',{read:ElementRef})btn!: ElementRef;
  @ViewChild('side',{read:ElementRef})side!: ElementRef;
  @ViewChild('input',{read:ElementRef})input!: ElementRef;

  select(any: DeathReport){
    this.selectedReport = any;
  }
  clear(){
    this.input.nativeElement.value = '';
    this.search('');
  }
  createDeathReport(){
      this.allListOfDeathReports.unshift(this.newDeathReport);
      localStorage.setItem('deathreports', JSON.stringify(this.allListOfDeathReports));
      this.created = true;
  }
  editReport: DeathReport = {};

  edit(any: DeathReport){
    this.editReport = any;
   }

  update(){
    this.allListOfDeathReports = this.allListOfDeathReports.map((item: any) => item.patientName === this.editReport.patientName&&item.email == this.editReport.email ? this.editReport : item);
    localStorage.setItem('deathreports', JSON.stringify(this.allListOfDeathReports));
    this.updated = true;
  }

  removeElementFromObjectArray(any: any) {
    this.allListOfDeathReports = this.allListOfDeathReports.filter((item: any) => item !== any);
    localStorage.setItem('deathreports', JSON.stringify(this.allListOfDeathReports));
  }
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
