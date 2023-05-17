import { All_Appointment } from './appointmentModel';
export class DoctorsModel{
    constructor(
        public fullname?: string,
        public email?: string,
        public password?: string,
        public age?: number,
        public phone?: string,
        public sex?:string,
        public dob?:string,
        public bloodGroup?:string,
        public address?: string,
        public country?: string,
        public state?: string,
        public department?: string,
        public bio?: string,
        public appointment?:All_Appointment[],
        public id ?: number
    ){}
}

export class Prescription{
    patientName?: string;
    patientAge?: number;
    patientSex?: string;
    doctorName?: string;
    drugName?: string;
    drugDescription?: string;
    morningDose?: string;
    afternoonDose?: string;
    eveningDose?: string;
    duration?: string;
}

export class Activities{
  patientName?: string;
  patientAge?: number;
  patientSex?: string;
  duration?: string;
  time?: string;
  activity?: string;
  activityIcon?: string;
  doctorName?:string;
}
