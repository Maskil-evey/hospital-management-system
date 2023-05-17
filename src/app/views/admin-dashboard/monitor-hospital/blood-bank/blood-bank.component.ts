import { Component, ViewChild, ElementRef } from '@angular/core';
import { BloodGroup } from '../../../../models/bloodModel';

@Component({
  selector: 'app-blood-bank',
  templateUrl: './blood-bank.component.html',
  styleUrls: ['./blood-bank.component.css']
})
export class BloodBankComponent {
  value = '0';

hardcodedBloodGroups:BloodGroup[] = [
  {
    name: 'A+',
    amount: 10
  },
  {
    name: 'A-',
    amount: 10
  },
  {
    name: 'B+',
    amount: 10
  },
  {
    name: 'B-',
    amount: 10
  },
  {
    name: 'AB+',
    amount: 10
  },
  {
    name: 'AB-',
    amount: 10
  },
  {
    name: 'O+',
    amount: 10
  },
  {
    name: 'O-',
    amount: 10
 }
]

bloodGgroups:BloodGroup[] = JSON.parse(localStorage.getItem('bloodGroups') || JSON.stringify(this.hardcodedBloodGroups));


  add(item:BloodGroup){
    this.bloodGgroups.forEach((i:BloodGroup)=>{
      if(i.name== item.name){
        i!.amount!++;
      }
      localStorage.setItem('bloodGroups', JSON.stringify(this.bloodGgroups))
    })
  }

  minus(item:BloodGroup){
    this.bloodGgroups.forEach((i:BloodGroup)=>{
      if(i.name== item.name){
        i!.amount!--;
      }
      localStorage.setItem('bloodGroups', JSON.stringify(this.bloodGgroups))
    })
  }

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
