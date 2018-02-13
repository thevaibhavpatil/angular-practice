import { Component, OnInit, Input, ViewEncapsulation, OnChanges } from '@angular/core';
import { ProviderProfileService } from '../provider-profile.service';
import { ProviderProfileDataSortService } from '../provider-profile-data-sort.service';
import { Registration } from '../Registration';


@Component({
  selector: 'app-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: ['./profile-summary.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProfileSummaryComponent implements OnInit {

  private sum: string;
  constructor(
    private providerProfileService: ProviderProfileService
  ) { }

  ngOnInit() {
    this.providerProfileService.onRcvReg((reg: Registration) => {
      this.sum = reg['user'].id
    })
  }
}
