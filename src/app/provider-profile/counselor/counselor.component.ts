import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ProviderProfileService } from '../provider-profile.service';

@Component({
  selector: 'app-counselor',
  templateUrl: './counselor.component.html',
  styleUrls: ['./counselor.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CounselorComponent implements OnInit {

  data = {
    'counsMethods': ['Axcity', 'dipression'],
  }
  imgUrls = [
    './assets/providerImage/01.png',
    './assets/providerImage/02.png',
    './assets/providerImage/03.png',
    './assets/providerImage/04.png',
    './assets/providerImage/05.png',

  ];
  @Input() counsolor = this.data;
  technique: string[];
  charges: string[];
  language = [];
  trlSessions: string[];
  sessionDuration: string[];
  payType: string[];
  availability = [];

  constructor(private providerProfileService: ProviderProfileService) {

  }

  ngOnInit() {
    this.providerProfileService.getProviderProfile()/* .subscribe(data => {
      this.technique = data['user'].userProvider.providerTechniques;
      this.charges = data['user'].userProvider.providerCharges;
      this.language = data['user'].userProvider.providerLanguage;
      this.trlSessions = data['user'].userProvider.providerTrial;
      this.sessionDuration = data['user'].userProvider.providerSessionDuration;
      this.payType = data['user'].userProvider.providerPaymentMode;
      this.availability = data['user'].userProvider.providerAvailability;
    }) */
  }

}
