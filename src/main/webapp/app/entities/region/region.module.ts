import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Mb3AppSharedModule } from 'app/shared';
import {
  RegionComponent,
  RegionDetailComponent,
  RegionUpdateComponent,
  RegionDeletePopupComponent,
  RegionDeleteDialogComponent,
  regionRoute,
  regionPopupRoute
} from './';

const ENTITY_STATES = [...regionRoute, ...regionPopupRoute];

@NgModule({
  imports: [Mb3AppSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [RegionComponent, RegionDetailComponent, RegionUpdateComponent, RegionDeleteDialogComponent, RegionDeletePopupComponent],
  entryComponents: [RegionComponent, RegionUpdateComponent, RegionDeleteDialogComponent, RegionDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Mb3AppRegionModule {}
