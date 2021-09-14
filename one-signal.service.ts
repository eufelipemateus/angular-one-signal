import { Injectable, Optional } from '@angular/core';
import { OneSignalServiceConfig } from './one-signal.types';

@Injectable({
  providedIn:'root'
})
export class OneSignalService {

  private key: string;

  constructor(@Optional() config?: OneSignalServiceConfig){
        this.key = config.key;
   }

  private async onLoad(): Promise< Window["OneSignal"]> {
    window.OneSignal = window.OneSignal || [];
    return new Promise((resolve) => {
      window.OneSignal.push(function() {
        resolve(window.OneSignal);
      });
    });
  }
  public  onInit():void {
    this.onLoad().then((OneSignal)=>{
      OneSignal.init({
        appId: this.key,
      });
    });
  }
}

