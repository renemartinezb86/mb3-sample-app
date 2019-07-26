import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Mb3AppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [Mb3AppSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [Mb3AppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Mb3AppSharedModule {
  static forRoot() {
    return {
      ngModule: Mb3AppSharedModule
    };
  }
}
