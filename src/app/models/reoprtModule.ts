import { Prescription } from './doctorsModel';
import { PatientModel } from './patientsModel';
export class BirthReport{
  patientName?: string;
  patientAge?: number;
  doctorName?: string;
  birthType?: string;
  gavebirthTo?: string;
  date?: string;
  time?: string;
  weight?: number;
  height?: number;
  bloodPressure?: string;
  heartRate?: number;
  temperature?: number;
  month?: string;
  address?: string;
  country?: string;
  state?: string;
  phoneNumber?: string;
  sex?: string;
  email?: string;
  fullReportOnBirth?: string;
}
export class DeathReport{
  patientName?: string;
  patientAge?: number;
  sex?: string;
  bodyInHospitalMorgue?: boolean;
  diedOf?: string;
  date?: string;
  time?: string;
  month?: string;
  address?: string;
  country?: string;
  state?: string;
  phoneNumber?: string;
  email?: string;
  fullReportOnDeath?: string;
}
export class OperationReport{
  patientName?: string;
  patientAge?: number;
  surgeonNames?: string[];
  operationType?: string;
  successful?: string;
  date?: string;
  time?: string;
  address?: string;
  country?: string;
  state?: string;
  phoneNumber?: string;
  email?: string;
  sex?: string;
  fullReportOnOperation?: string;
}

export class  ReportForm{
  patientName?: string;
  doctorName?:string;
  patientEmail?: string;
  patientTestType?: string;
  patientTestDescription?: string;
}

// sideeffects of prescription

export class SideEffects{
  patientDetails?: PatientModel;
  description?: string;
  date?: string;
  prescription?: Prescription[];
}
