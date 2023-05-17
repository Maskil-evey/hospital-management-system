import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent {
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
