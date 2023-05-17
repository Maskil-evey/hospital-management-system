import { Component, ViewChild, ElementRef } from '@angular/core';
import { Department } from '../../../models/departmentModel';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent{
department:Department = {};
editDepartment:Department ={};
value = '0';
hardCoded:Department[]= [{
  name:'Cardiology',
  isActive:'Active',
},{
  name:'Neurology',
  isActive:'Inactive',
},
{
  name:'Gastroenterology',
  isActive:'Active',
},{
  name:'Dermatology',
  isActive:'Inactive',
},{
  name:'Oncology',
  isActive:'Active',
},{
  name:'Ophthalmology',
  isActive:'Inactive',
},{
  name:'Orthopedics',
  isActive:'Active',
}]


listofdepartments:Department[]= JSON.parse(localStorage.getItem('departments') || JSON.stringify(this.hardCoded));


  @ViewChild('cont',{read:ElementRef})cont!: ElementRef;
  @ViewChild('btn',{read:ElementRef})btn!: ElementRef;
  @ViewChild('side',{read:ElementRef})side!: ElementRef;
  @ViewChild('input',{read:ElementRef})input!: ElementRef;
  @ViewChild('input2',{read:ElementRef})input2!: ElementRef;
  // @ViewChild('input3',{read:ElementRef})input3!: ElementRef;
  // @ViewChild('input4',{read:ElementRef})input4!: ElementRef;
  @ViewChild('modal', { read: ElementRef }) modal!: ElementRef;
  @ViewChild('modal1', { read: ElementRef }) modalOne!: ElementRef;


  addNum(){
    // this.num++;
    // console.log(this.num);
    this.input.nativeElement.value++;
    this.department.doctors = this.input.nativeElement.value;
    this.editDepartment.doctors = this.input.nativeElement.value;
  }

  addNum2(){
    // this.num2++;
    // console.log(this.num2);
    this.input2.nativeElement.value++;
    this.department.nurses = this.input2.nativeElement.value;
    this.editDepartment.nurses = this.input2.nativeElement.value;
  }

  subtractNum2(){
    // this.num2--;
    // console.log(this.num2);
    this.input2.nativeElement.value--
    this.department.nurses = this.input2.nativeElement.value;
    this.editDepartment.nurses = this.input2.nativeElement.value;
  }
  subtractNum(){
    // this.num--;
    // console.log(this.num);
    this.input.nativeElement.value--
    this.department.doctors = this.input.nativeElement.value;
    this.editDepartment.doctors = this.input.nativeElement.value;
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

  removeElementFromObjectArray(any: Department) {
    this.listofdepartments.forEach((value, index) => {
      if (any.name === value.name) this.listofdepartments.splice(index, 1);
    });
    localStorage.setItem('departments', JSON.stringify(this.listofdepartments));
  }

  edit(any: Department){
    this.editDepartment = any;
  }
  update(){
    this.listofdepartments.forEach((value, index) => {
      if (this.editDepartment.name === value.name) this.listofdepartments[index] = this.editDepartment;
    });
    localStorage.setItem('departments', JSON.stringify(this.listofdepartments));
    this.modal.nativeElement.style.display = 'block';
  }




  closeModal(){
    this.modal.nativeElement.style.display = 'none';
    this.modalOne.nativeElement.style.display = 'none';
  }
  create(){
    this.department.isActive = 'Active';
    this.listofdepartments.unshift(this.department);
    this.department = {};
    localStorage.setItem('departments', JSON.stringify(this.listofdepartments));
    this.modalOne.nativeElement.style.display = 'block';
  }
  selectedItem: Department = {};
  select(item: Department) {
    this.selectedItem = item;
  }

ngOnInit(): void {
  }
}
