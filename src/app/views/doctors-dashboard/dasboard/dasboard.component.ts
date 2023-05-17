import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorsModel } from '../../../models/doctorsModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent {
  getDoctorInfo:DoctorsModel = JSON.parse(localStorage.getItem('doctorsInfo')!);
  // showDoctorInfo:DoctorsModel= {}
  allDoctorsData:DoctorsModel[] = [];
  constructor(private route:Router, private user:UserService) { }

  ngOnInit(): void {

    if(this.getDoctorInfo === null){
      this.route.navigate(['']);
    }


    this.allDoctorsData = this.user.getAllDoctors;

    for(let i of this.allDoctorsData){
      if(i.id === this.getDoctorInfo.id){
        // this.showDoctorInfo = i;
        this.getDoctorInfo = i;
        localStorage.setItem('doctorsInfo', JSON.stringify(this.getDoctorInfo));
      // }else{
      //   this.route.navigate(['']);
      //   alert('Account Deleted');
      //   localStorage.removeItem('doctorsInfo');
      // }
      }
    }
     }
}
