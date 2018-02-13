import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Registration } from './Registration';

@Injectable()
export class ProviderProfileService {

  // getProviderProfileUrl = UrlConst.baseUrl + UrlConst.appName + UrlConst.getProviderProfile;
  JsonUrl = '../assets/getProviderProfile.json'
  providerPro = 'from service';
  providerData: Registration;
  private em: EventEmitter<Registration>
  constructor(
    private http: HttpClient, /* private providerInfo: ProviderInfo */) {
    this.em = new EventEmitter()
  }


  getProviderProfile() {
    // return  this.http.get(this.getProviderProfileUrl, {
    //   params: new HttpParams().set('providerId', '5a72c2789ae5642238d24a3c')
    // })
    return this.http.get(this.JsonUrl).subscribe(reg => this.em.emit(reg as Registration))
  }

  onRcvReg(cb: (reg: Registration) => void) {
    this.em.subscribe(reg => cb(reg))
  }
}
