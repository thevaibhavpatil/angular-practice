import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProviderProfileService } from '../provider-profile.service';
import { PvdrDetaiStruct } from './pvdr-detail-struct';

@Component({
  selector: 'app-provider-detail',
  templateUrl: './provider-detail.component.html',
  styleUrls: ['./provider-detail.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProviderDetailComponent implements OnInit {
  /*    pvdrDetails = [
       {
         'heading': 'EXPERIENCE',
         'img': './assets/providerImage/edit-2.gif',
         'inst': [
           {
             'position': 'Position',
             'orgName': 'Name of Oraganisation',
             'duration': 'Jan 2015 - Dec 2017',
             'city': 'City',
             'cnrty': 'Country',
             'dscrpt': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, reiciendis. Expedita repellendus ullam, voluptas sit dolorum quisquam amet voluptatum, pariatur porro tenetur reiciendis, iste maiores! Recusandae labore exercitationem velit ducimus.'
           }
         ]
       },
       {
         'heading': 'EDUCATION & CERTIFICATIONS',
         'img': './assets/providerImage/edit-3.gif',
         'inst': [
           {
             'position': 'Name of Oraganisation',
             'orgName': 'Name Of Institude',
             'duration': 'Graduation',
             'city': 'Jan 2015 - Dec 2017',
             // 'cnrty': 'Graduation',
             'spcl': ['specialisation1', 'specialisation2', 'specialisation3'],
             'dscrpt': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, reiciendis. Expedita repellendus ullam, voluptas sit dolorum quisquam amet voluptatum, pariatur porro tenetur reiciendis, iste maiores! Recusandae labore exercitationem velit ducimus.'
           },
           {
             'position': 'Name of Oraganisation',
             'orgName': 'Name Of Institude',
             'duration': 'Graduation',
             'city': 'Jan 2015 - Dec 2017',
             // 'cnrty': 'Country',
             'spcl': ['specialisation1', 'specialisation2', 'specialisation3'],
             'dscrpt': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, reiciendis. Expedita repellendus ullam, voluptas sit dolorum quisquam amet voluptatum, pariatur porro tenetur reiciendis, iste maiores! Recusandae labore exercitationem velit ducimus.'
           }
         ]
       },
       {
         'heading': 'MEMBERSHIPS & ACCREDITATIONS',
         'img': './assets/providerImage/edit-1.gif',
         'inst': [
           {
             'position': 'Position',
             'orgName': 'Name of Oraganisation',
             'duration': 'Jan 2015 - Dec 2017',
             'city': 'City',
             'cnrty': 'Country',
           },
           {
             'position': 'Position',
             'orgName': 'Name of Oraganisation',
             'duration': 'Jan 2015 - Dec 2017',
             'city': 'City',
             'cnrty': 'Country',
           }
         ]
       }
   
  ]
   */
  pvdrDetails: PvdrDetaiStruct[];
  userExperience;
  userMembership;
  userQualification;
  constructor(private providerProfileService: ProviderProfileService) { }

  ngOnInit() {
    this.providerProfileService.getProviderProfile()/* .subscribe(data => { */
      /*
        this.pvdrDetails.push( {
          position : data['user'].userExperience.experiencePositionTitle,
          orgName : data['user'].userExperience.experienceOrg,
          duration : data['user'].userExperience.experienceDuration,
          city : data['user'].userExperience.notavail,
          cnrty : data['user'].userExperience.notavail,
          spcl : data['user'].userExperience.notshow,
          dscrpt : data['user'].userExperience.experienceDesc,
        });
        this.pvdrDetails.push({
          position : data['user'].userQualification.qualifiedInstitute,
          orgName : data['user'].userQualification.qualifiedCourseName,
          duration : data['user'].userQualification.qualifiedCompletedYear,
          city : data['user'].userQualification.qualifiedDuration,
          cnrty : data['user'].userQualification.notshow,
          spcl : data['user'].userQualification.notavail,
          dscrpt : data['user'].userQualification.experienceDesc,
        });
        this.pvdrDetails.push({
          position : data['user'].userMembership.membershipOrg,
          orgName : data['user'].userMembership.membershipType,
          duration : data['user'].userMembership.qualifiedCompletedYear,
          city : data['user'].userMembership.qualifiedDuration,
          cnrty : data['user'].userMembership.notshow,
          spcl : data['user'].userMembership.notavail,
          dscrpt : data['user'].userMembership.experienceDesc,
        });
      */
     /*  this.pvdrDetails.push(data['user'].userExperience.experiencePositionTitle
      );
      this.pvdrDetails.push(data['user'].userQualification.qualifiedInstitute);
      this.pvdrDetails.push(data['user'].userMembership.membershipOrg);
      console.log('pvdr Details ', this.pvdrDetails);
    }) */
  }

}

