export class NurseModel{
  constructor(
      public fullname?: string,
      public email?: string,
      public password?: string,
      public phone?: string,
      public sex?:string,
      public age?:number,
      public dob?:string,
      public bloodGroup?:string,
      public address?: string,
      public country?: string,
      public state?: string,
      public bio?: string,
  ){}
}
