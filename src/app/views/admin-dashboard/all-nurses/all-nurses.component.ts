import { Component, ElementRef, ViewChild } from '@angular/core';
import { NurseModel } from '../../../models/nurseModel';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-all-nurses',
  templateUrl: './all-nurses.component.html',
  styleUrls: ['./all-nurses.component.css']
})
export class AllNursesComponent {
nurse: NurseModel = {}
listNurses:NurseModel[] =[
  {
    fullname: 'Magdalene Mwende',
    email: 'mwende@gmail.com',
    phone: '0712345678',
    country: 'Nigeria',
    state: 'Lagos',
    address: 'No 1, Lagos street, Lagos',
    dob: '12/12/1990',
    sex:'Female',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem.',
    bloodGroup: 'A+',
  },
  {
    fullname: 'Jane Doe',
    email: 'jane@yahoo.com',
    phone: '0712345678',
    country: 'Nigeria',
    state: 'Abuja',
    address: 'No 1, Abuja street, Abuja',
    dob: '12/12/1990',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem.',
    bloodGroup: 'O+',
    sex:'Female',
  },
  {
    fullname: 'Precious Juila',
    email: 'precious@gmail.com',
    phone: '0712345678',
    country: 'Nigeria',
    state: 'Abuja',
    address: 'No 1, Abuja street, Abuja',
    dob: '12/12/1990',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem.',
    bloodGroup: 'A+',
    sex:'Female',
  },
  {
    fullname: 'Mary Chioma',
    email: 'chioma@gmail.com',
    phone: '0712345678',
    country: 'Nigeria',
    state: 'Abuja',
    address: 'No 1, Abuja street, Abuja',
    dob: '12/12/1990',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem.',
    bloodGroup: 'A+',
    sex:'Female',
  },
  {
    fullname: 'Patrick Okeke',
    email: 'pOkeke@gmail.com',
    phone: '0712345678',
    country: 'Nigeria',
    state: 'Abuja',
    address: 'No 1, Abuja street, Abuja',
    dob: '12/12/1990',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem.',
    bloodGroup: 'A+',
    sex:'Male',
  }
];

constructor() { }

ngOnInit(): void {
  localStorage.setItem('nurseData', JSON.stringify(this.listNurses));
}

selectedItem:NurseModel={}
select(item:NurseModel){
  this.selectedItem = item;
};

create(){
  this.listNurses.push(this.nurse);
  this.nurse = {};
  localStorage.setItem('nurseData', JSON.stringify(this.listNurses));
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
