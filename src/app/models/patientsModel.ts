export class PatientModel {
  constructor(
    public id?: number,
    public fullname?: string,
    public email?: string,
    public password?: string,
    public age?:number,
    public phone?: string,
    public currentSymptoms?: string,
    public sex?: string,
    public dob?: string,
    public bloodGroup?: string,
    public address?: string,
    public country?: string,
    public state?: string,
    public treatedBefore?: string,
    public assignedDoctor?: string,
    public image?: string
  ) {}
}
