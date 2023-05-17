import { Injectable } from '@angular/core';
import { DoctorsModel } from '../models/doctorsModel';
import { PatientModel } from '../models/patientsModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  hardcodedDoctor:DoctorsModel[] = [{
    fullname:'Paul Walker',
    department:'Dentist',
    phone:'234818905764',
    email:'paul@gmail.com',
    country:'Nigeria',
    state:'Lagos',
    address:'No 1, Lagos street, Lagos',
    bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem.',
    bloodGroup:'A+',
    dob:'12/12/1990',
    password:'123456',
    sex:'Male',
    id: 110
  },
  {
    fullname:'John Doe',
    department:'Optometrist',
    phone:'234818905764',
    email:'john@gmail.com',
    country:'Nigeria',
    state:'Abuja',
    address:'No 1, Abuja street, Abuja',
    bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem.',
    bloodGroup:'O+',
    dob:'12/12/1990',
    password:'123456',
    sex:'Male',
    id: 111
  },
  {
    fullname:'Jane Foster',
    department:'Surgeon',
    phone:'234818905764',
    email:'jane@yahoo.com',
    country:'Nigeria',
    state:'Abuja',
    address:'No 1, Abuja street, Abuja',
    bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem.',
    bloodGroup:'B+',
    dob:'12/12/1990',
    password:'123456',
    sex:'Female',
    id: 112
  },
  {
    fullname:'Peter Parker',
    department:'Surgeon',
    phone:'234818905764',
    email:'parker90@gmail.com',
    country:'Nigeria',
    state:'Calabar',
    address:'No 1, Calabar street, Calabar',
    bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem.',
    bloodGroup:'A+',
    dob:'12/12/1990',
    password:'123456',
    sex:'Male',
    id: 113
  },
  {
    fullname:'Tony Stark',
    department:'Medical Doctor',
    phone:'234818905764',
    email:'tony@gmail.com',
    country:'Nigeria',
    state:'Abuja',
    address:'No 1, Abuja street, Abuja',
    bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem.',
    bloodGroup:'O+',
    dob:'12/12/1990',
    password:'123456',
    sex:'Male',
    id: 114
  },
  {
    fullname:'Kelly Clark',
    department:'Medical Doctor',
    phone:'234818905764',
    email:'kellyclark@hotmail.com',
    country:'Nigeria',
    state:'Edo',
    address:'No 1, Edo street, Edo',
    bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem.',
    bloodGroup:'B+',
    dob:'12/12/1990',
    password:'123456',
    sex:'Female',
    id: 115
  }]
  hardCodedPatient: PatientModel[] = [
    {
      fullname: 'Paul Walker',
      age: 30,
      bloodGroup: 'B-',
      email: 'walker@yahoo.com',
      password: '123456',
      dob: '12/12/1990',
      country: 'Nigeria',
      state: 'Lagos',
      address: 'No 1, Lagos street, Lagos',
      phone: '234818905764',
      sex: 'Male',
      currentSymptoms:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem.',
      treatedBefore:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem.',
    },
    {
      fullname: 'Felix Kenneth',
      age: 30,
      bloodGroup: 'A+',
      email: 'kenneth@gmail.com',
      password: '123456',
      dob: '12/12/1990',
      country: 'Nigeria',
      state: 'Lagos',
      address: 'No 1, Lagos street, Lagos',
      phone: '234818905764',
      sex: 'Male',
      currentSymptoms:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem.',
      treatedBefore:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem.',
    },
  ];
  listdoctors:DoctorsModel[]=JSON.parse(localStorage.getItem('doctorData') || JSON.stringify(this.hardcodedDoctor));
  listofpatients: PatientModel[] = JSON.parse(
    localStorage.getItem('patientData') || JSON.stringify(this.hardCodedPatient)
  );

  getAllDoctors: DoctorsModel[] = JSON.parse(
    localStorage.getItem('doctorData') || '[]'
  );

  getAllPatients: PatientModel[] = JSON.parse(
    localStorage.getItem('patientData') || '[]'
  )

// save both doctors and patients to local storage

  saveDoctorData() {
    localStorage.setItem('doctorData', JSON.stringify(this.listdoctors));
  }

  savePatientData() {
    localStorage.setItem('patientData', JSON.stringify(this.listofpatients));
  }
}
