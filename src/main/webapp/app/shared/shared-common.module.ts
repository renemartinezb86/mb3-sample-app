import { NgModule } from '@angular/core';

import { Mb3AppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [Mb3AppSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [Mb3AppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Mb3AppSharedCommonModule {}
