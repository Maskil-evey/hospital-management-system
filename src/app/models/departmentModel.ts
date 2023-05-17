export class Department{
  constructor(
      public name?: string,
      public doctors?: number,
      public nurses?: number,
      public patients?: number,
      public isActive?: string,
      public successfulTest?: number,
      public successfulSurgeries?: number,
      public failedSurgeries?: number,
      public description?: string
  ){}
}