import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
// import { Url } from 'url';
import { ProviderProfileService } from './provider-profile.service';
import { ProviderProfileDataSortService } from './provider-profile-data-sort.service';

@Component({
  selector: 'app-provider-profile',
  templateUrl: './provider-profile.component.html',
  styleUrls: ['./provider-profile.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProviderProfileComponent implements OnInit {
  providerPro: string[];
  summeryData = '';
  constructor(
    private providerProfile: ProviderProfileService,
    private sortService: ProviderProfileDataSortService
  ) { }

  ngOnInit() {
    this.providerProfile.getProviderProfile();
  }
}
