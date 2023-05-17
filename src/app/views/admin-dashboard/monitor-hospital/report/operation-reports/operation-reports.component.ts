import { Component, ElementRef, ViewChild } from '@angular/core';
import { OperationReport } from '../../../../../models/reoprtModule';
import { DoctorsModel } from '../../../../../models/doctorsModel';

@Component({
  selector: 'app-operation-reports',
  templateUrl: './operation-reports.component.html',
  styleUrls: ['./operation-reports.component.css']
})
export class OperationReportsComponent {
  updated:boolean = false;
  created:boolean = false;
  dateSearch: string = '';
  page:number=1;
  tableSize:number=5;
  tableSizes: number[] = [5, 10, 15, 20];

  newOperationReport: OperationReport = {};

  getAllDoctors: DoctorsModel[] = JSON.parse(localStorage.getItem('doctorData') || '[]');
  getAllSurgeons: string[] = [];
  allListOfOperationReports: OperationReport[] = JSON.parse(localStorage.getItem('operationreports') || '[]');
  ngOnInit(): void {

    for(let i=0; i<this.getAllDoctors.length; i++){
      if(this.getAllDoctors[i].department == 'Surgeon'){
        this.getAllSurgeons.push(this.getAllDoctors[i]!.fullname!);
      }
    }
  }

  // edit a report
  editReport: OperationReport = {};

  edit(any: OperationReport){
    this.editReport = any;
    this.editSurgeonNames = any.surgeonNames!;
   }



  // add vallues from a select input to an array
 @ViewChild('select',{read:ElementRef})selecT!: ElementRef;
 @ViewChild('editSelect',{read: ElementRef})editSelect!:ElementRef;

  surgeonNames: string[] = [];
  editSurgeonNames: string[] = [];
  operationType:string[]= ['Heart Surgery', 'Lump Surgery', 'Kidney Surgery', 'Liver Surgery'];
  add(){
    let select = this.selecT.nativeElement;
    let option = select.options[select.selectedIndex];
    this.surgeonNames.push(option.value);
    console.log(option.value);
  }

  addToEdit(){
    let select = this.editSelect.nativeElement;
    let option = select.options[select.selectedIndex];
    this.editSurgeonNames!.push(option.value);
    console.log(option.value);
  }
  // search by date
  search(any:any){
    this.allListOfOperationReports = this.allListOfOperationReports.filter((item:OperationReport) => item.date!.includes(any));
    console.log(any);
    if(any == ''){
      this.allListOfOperationReports = JSON.parse(localStorage.getItem('operationreports') || '[]');
    }
  }

  // pagination functions
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
  selectedReport: OperationReport = {}

  @ViewChild('cont',{read:ElementRef})cont!: ElementRef;
  @ViewChild('btn',{read:ElementRef})btn!: ElementRef;
  @ViewChild('side',{read:ElementRef})side!: ElementRef;
  @ViewChild('input',{read:ElementRef})input!: ElementRef;


  // clear search input
  clear(){
    this.input.nativeElement.value = '';
    this.search('');
    this.surgeonNames = [];
    this.selecT.nativeElement.value = '';
  }

  // select a report
  select(any: OperationReport){
    this.selectedReport = any;
  }
  // create a new report
  createOperationReport(){
      this.newOperationReport.surgeonNames = this.surgeonNames;
      this.allListOfOperationReports.unshift(this.newOperationReport);
      localStorage.setItem('operationreports', JSON.stringify(this.allListOfOperationReports));
      this.created = true;
  }


  update(){
    this.editReport.surgeonNames = this.editSurgeonNames;
    this.allListOfOperationReports = this.allListOfOperationReports.map((item: any) => item.patientName === this.editReport.patientName&&item.email == this.editReport.email ? this.editReport : item);
    localStorage.setItem('operationreports', JSON.stringify(this.allListOfOperationReports));
    this.updated = true;
  }


  // delete a report
  removeElementFromObjectArray(any: any) {
    this.allListOfOperationReports = this.allListOfOperationReports.filter((item: any) => item !== any);
    localStorage.setItem('operationreports', JSON.stringify(this.allListOfOperationReports));
  }

  // delete surgean name from array
  removeElementFromObjectArray2(any: any) {
    this.surgeonNames = this.surgeonNames.filter((item: any) => item !== any);
  }

  removeElementFromObjectArray3(any: any) {
    this.editSurgeonNames = this.editSurgeonNames.filter((item: any) => item !== any);
  }


  // close and open side nav
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
