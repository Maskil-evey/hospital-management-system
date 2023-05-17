import { Component, ElementRef, ViewChild } from '@angular/core';
import { BirthReport } from 'src/app/models/reoprtModule';
import { DeathReport } from '../../../../../models/reoprtModule';
import { DoctorsModel } from '../../../../../models/doctorsModel';

@Component({
  selector: 'app-birth-report',
  templateUrl: './birth-report.component.html',
  styleUrls: ['./birth-report.component.css']
})
export class BirthReportComponent {
  updated:boolean = false;
  created:boolean = false;
  switch:boolean = true;
  dateSearch: string = '';
  page:number=1;
  tableSize:number=5;
  tableSizes: number[] = [5, 10, 15, 20];

  newBirthReport: BirthReport = {};

  allListOfBirthReports: BirthReport[] = JSON.parse(localStorage.getItem('birthreports') || '[]');
  ngOnInit(): void {

  }

  search(any:any){
    this.allListOfBirthReports = this.allListOfBirthReports.filter((item:BirthReport) => item.date!.includes(any));
    console.log(any);
    if(any == ''){
      this.allListOfBirthReports = JSON.parse(localStorage.getItem('birthreports') || '[]');
    }
  }
  OnTableDataChane(event: any){
    this.page = event;
  };

  OnTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;

  }


  getAllDoctors: DoctorsModel[] = JSON.parse(localStorage.getItem('doctorData') || '[]');
  birthType: string[] = ['Natural', 'Operation'];
  birthed: string[] = ['Boy','Girl'];
  value = '0';
  selectedReport: BirthReport = {}

  @ViewChild('cont',{read:ElementRef})cont!: ElementRef;
  @ViewChild('btn',{read:ElementRef})btn!: ElementRef;
  @ViewChild('side',{read:ElementRef})side!: ElementRef;
  @ViewChild('input',{read:ElementRef})input!: ElementRef;

  select(any: BirthReport){
    this.selectedReport = any;
  }

  clear(){
    this.input.nativeElement.value = '';
    this.search('');
  }
  createBirthReport(){
      this.allListOfBirthReports.unshift(this.newBirthReport);
      localStorage.setItem('birthreports', JSON.stringify(this.allListOfBirthReports));
      this.created = true;
  }
  editReport: BirthReport = {};

  edit(any: BirthReport){
    this.editReport = any;
   }

  update(){
    this.allListOfBirthReports = this.allListOfBirthReports.map((item: any) => item.patientName === this.editReport.patientName&&item.email == this.editReport.email ? this.editReport : item);
    localStorage.setItem('birthreports', JSON.stringify(this.allListOfBirthReports));
    this.updated = true;
  }

  removeElementFromObjectArray(any: any) {
    this.allListOfBirthReports = this.allListOfBirthReports.filter((item: any) => item !== any);
    localStorage.setItem('birthreports', JSON.stringify(this.allListOfBirthReports));
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
