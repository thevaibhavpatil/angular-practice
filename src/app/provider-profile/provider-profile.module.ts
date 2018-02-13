import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router/src/config';
import { RouterModule } from '@angular/router';

import { ProviderProfileComponent } from './provider-profile.component';
import { ProviderInformationComponent } from './provider-information/provider-information.component';
import { ProfileSummaryComponent } from './profile-summary/profile-summary.component';
import { CounselorComponent } from './counselor/counselor.component';
import { ImageCheckboxComponent } from './counselor/image-checkbox.component';
import { ProviderDetailComponent } from './provider-detail/provider-detail.component';
import { PvdrDetailDesign1Component } from './provider-detail/pvdr-detail-design1/pvdr-detail-design1.component';
import { ProviderProfileService } from './provider-profile.service';
import { ProviderProfileDataSortService } from './provider-profile-data-sort.service';

const WHO_CAN_BENIFIT_ROUTES: Routes = [
  { path: '', component: ProviderProfileComponent, data: { title: 'Provider Profile' } }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(WHO_CAN_BENIFIT_ROUTES),
  ],
  declarations: [
    ProviderProfileComponent,
    ProviderInformationComponent,
    ProfileSummaryComponent,
    CounselorComponent,
    ImageCheckboxComponent,
    ProviderDetailComponent,
    PvdrDetailDesign1Component,
  ],
  providers: [ProviderProfileService, ProviderProfileDataSortService]
})
export class ProviderProfileModule { }
