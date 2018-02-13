import { Component, OnInit, ViewEncapsulation, Input, OnChanges } from '@angular/core';
import { ProviderProfileService } from '../provider-profile.service';

@Component({
  selector: 'app-provider-information',
  templateUrl: './provider-information.component.html',
  styleUrls: ['./provider-information.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProviderInformationComponent implements OnInit {
  // @Input()
  profData: string[];
  channels = ['Skype', 'Mobile'];
  langs = [];
  // imgBasePath= UrlConst.baseUrl + `/api/files/`;
  imgPath;

  constructor(private providerProfileService: ProviderProfileService) {
  }

  ngOnInit() {
  
  this.providerProfileService.getProviderProfile();

  // this.imgPath = this.imgBasePath + this.profData.user.userProfileImgPath;
  }
}
