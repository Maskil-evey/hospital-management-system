import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { HompageBodyComponent } from './views/hompage-body/hompage-body.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DasboardComponent } from './views/doctors-dashboard/dasboard/dasboard.component';
import { AppointmentComponent } from './views/doctors-dashboard/appointment/appointment.component';
import { DashboardComponent } from './views/admin-dashboard/all-dashboard/all-dashboard.component';
import { AllPatientsComponent } from './views/admin-dashboard/all-patients/all-patients.component';
import { AllDoctorsComponent } from './views/admin-dashboard/all-doctors/all-doctors.component';
import { AllNursesComponent } from './views/admin-dashboard/all-nurses/all-nurses.component';
import { AllAppointmentsComponent } from './views/admin-dashboard/all-appointments/all-appointments.component';
import { ReportComponent } from './views/admin-dashboard/monitor-hospital/report/report.component';
import { BloodBankComponent } from './views/admin-dashboard/monitor-hospital/blood-bank/blood-bank.component';
import { EquipmentsComponent } from './views/admin-dashboard/monitor-hospital/equipments/equipments.component';
import { DoctorReportComponent } from './views/doctors-dashboard/doctor-report/doctor-report.component';
import { CommonModule } from '@angular/common';
import { PatientDashboardComponent } from './views/patient-dashboard/patient-dashboard/patient-dashboard.component';
import { PatientReportComponent } from './views/patient-dashboard/patient-report/patient-report.component';
import { PatientAppointmentComponent } from './views/patient-dashboard/patient-appointment/patient-appointment.component';
import { DoctorsPatientComponent } from './views/doctors-dashboard/doctors-patient/doctors-patient.component';
import { DepartmentComponent } from './views/admin-dashboard/department/department.component';
import { BirthReportComponent } from './views/admin-dashboard/monitor-hospital/report/birth-report/birth-report.component';
import { DeathReportComponent } from './views/admin-dashboard/monitor-hospital/report/death-report/death-report.component';
import { OperationReportsComponent } from './views/admin-dashboard/monitor-hospital/report/operation-reports/operation-reports.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HompageBodyComponent,
    SignUpComponent,
    SignInComponent,
    DasboardComponent,
    AppointmentComponent,
    DashboardComponent,
    AllPatientsComponent,
    AllDoctorsComponent,
    AllNursesComponent,
    DepartmentComponent,
    AllAppointmentsComponent,
    ReportComponent,
    BloodBankComponent,
    EquipmentsComponent,
    DoctorReportComponent,
    PatientDashboardComponent,
    PatientReportComponent,
    PatientAppointmentComponent,
    DoctorsPatientComponent,
    BirthReportComponent,
    DeathReportComponent,
    OperationReportsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
