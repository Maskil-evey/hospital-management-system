import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HompageBodyComponent } from './views/hompage-body/hompage-body.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { PatientDashboardComponent } from './views/patient-dashboard/patient-dashboard/patient-dashboard.component';
import { PatientAppointmentComponent } from './views/patient-dashboard/patient-appointment/patient-appointment.component';
import { PatientReportComponent } from './views/patient-dashboard/patient-report/patient-report.component';
import { DasboardComponent } from './views/doctors-dashboard/dasboard/dasboard.component';
import { AppointmentComponent } from './views/doctors-dashboard/appointment/appointment.component';
import { DoctorReportComponent } from './views/doctors-dashboard/doctor-report/doctor-report.component';
import { DashboardComponent } from './views/admin-dashboard/all-dashboard/all-dashboard.component';
import { AllAppointmentsComponent } from './views/admin-dashboard/all-appointments/all-appointments.component';
import { ReportComponent } from './views/admin-dashboard/monitor-hospital/report/report.component';
import { AllDoctorsComponent } from './views/admin-dashboard/all-doctors/all-doctors.component';
import { AllPatientsComponent } from './views/admin-dashboard/all-patients/all-patients.component';
import { BloodBankComponent } from './views/admin-dashboard/monitor-hospital/blood-bank/blood-bank.component';
import { EquipmentsComponent } from './views/admin-dashboard/monitor-hospital/equipments/equipments.component';
import { AllNursesComponent } from './views/admin-dashboard/all-nurses/all-nurses.component';
import { DoctorsPatientComponent } from './views/doctors-dashboard/doctors-patient/doctors-patient.component';
import { DepartmentComponent } from './views/admin-dashboard/department/department.component';
import { BirthReport } from './models/reoprtModule';
import { BirthReportComponent } from './views/admin-dashboard/monitor-hospital/report/birth-report/birth-report.component';
import { DeathReportComponent } from './views/admin-dashboard/monitor-hospital/report/death-report/death-report.component';
import { OperationReportsComponent } from './views/admin-dashboard/monitor-hospital/report/operation-reports/operation-reports.component';

const routes: Routes = [
{path:'',
component: HompageBodyComponent},
{path:'signup', component: SignUpComponent},
{path:'signin',component: SignInComponent},
{path:'patient/dashboard', component: PatientDashboardComponent},
{path:'patient/appointment', component: PatientAppointmentComponent},
{path:'patient/report', component: PatientReportComponent},
{path:'doctor/dashboard', component: DasboardComponent},
{path:'doctor/patient', component: DoctorsPatientComponent},
{path:'doctor/appointment', component: AppointmentComponent},
{path: 'doctor/report', component: DoctorReportComponent},
{path:'admin/dashboard',component:DashboardComponent },
{path:'admin/appointments', component: AllAppointmentsComponent},
{path:'admin/monitor-hospital/report', component: ReportComponent},
{path:'admin/doctors',component: AllDoctorsComponent},
{path:'admin/nurses',component: AllNursesComponent},
{path:'admin/patient',component: AllPatientsComponent},
{path:'admin/departments',component: DepartmentComponent},
{path:'admin/monitor-hospital/blood-bank', component:BloodBankComponent},
{path:'admin/monitor-hospital/equipments', component: EquipmentsComponent},
{path:'admin/monitor-hospital/report/birth-report', component: BirthReportComponent},
{path:'admin/monitor-hospital/report/death-report', component: DeathReportComponent},
{path:'admin/monitor-hospital/report/operation-report', component: OperationReportsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
