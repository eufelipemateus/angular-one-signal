import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';

import { OneSignalServiceConfig } from './one-signal.types';
import { OneSignalService } from '.';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class OneSignalModule {

	static  forRoot(config: OneSignalServiceConfig): ModuleWithProviders<OneSignalModule> {
    return {
        ngModule: OneSignalModule,
        providers: [
           { provide: OneSignalServiceConfig, useValue: config},
          OneSignalService
        ]
    };
  }
}
