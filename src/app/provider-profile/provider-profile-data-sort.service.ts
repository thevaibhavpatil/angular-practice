import { Injectable } from '@angular/core';

@Injectable()
export class ProviderProfileDataSortService {
  providerData;
  constructor() { }
  display() {
    console.log('ProviderProfileDataSortService :', this.providerData);
  }
  profileSummaryData() {
    return {
      'summaryData' : this.providerData.userProvider.providerSummary
    }
  }
}
