import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: './region/region.module#Mb3AppRegionModule'
      },
      {
        path: 'country',
        loadChildren: './country/country.module#Mb3AppCountryModule'
      },
      {
        path: 'location',
        loadChildren: './location/location.module#Mb3AppLocationModule'
      },
      {
        path: 'department',
        loadChildren: './department/department.module#Mb3AppDepartmentModule'
      },
      {
        path: 'task',
        loadChildren: './task/task.module#Mb3AppTaskModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#Mb3AppEmployeeModule'
      },
      {
        path: 'job',
        loadChildren: './job/job.module#Mb3AppJobModule'
      },
      {
        path: 'job-history',
        loadChildren: './job-history/job-history.module#Mb3AppJobHistoryModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Mb3AppEntityModule {}
