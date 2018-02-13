export class Registration {

    id: string;
    userFirstName: string;
    userLastName: string;
    userAliasName: string;
    userProviderFlag: boolean;
    userSeekerFlag: boolean;
    password: string;
    providerCreateDate: string;
    userEmail: string;
    profileScore: number;
    seekerProfileScore: number;
    userEmailVerifyFlag: boolean;
    userMobileVerifyFlag: boolean;
    providerAdminApprovalFlag: boolean;
    userMobile: string;
    userGender: string;
    userAddress: string;
    userCity: string;
    userCountry: string;
    userTimezone: string;
    userPin: number;
    userDob: string;
    defaultProfile: string;
    profileHideFlag: boolean;
    seekerRegEmailFlag: boolean;
    userQualification: Array<Qualification>;
    userMembership: Array<Membership>;
    userExperience:Array<Experience>;
    constructor() {
    }
}
export class Qualification {

    index: number;
    userId: string;
    qualifiedCourseName: string;
    qualifiedCompletedYear: string;
    qualifiedDuration: string;
    qualifiedType: string;
    qualifiedInstitute: string;
    qualifiedUniversity: string;
    qualifiedCountry: string;
    qualifiedCity: string;
    qualifiedChannel: string;
    qualifiedSpecialization: string;
    qualifiedCertificatePath: string;
    showDialog: boolean;
    constructor() {

    }
}

export class Membership {

    index: number;
    userId: string;
    MembershipType: string;
    MembershipOrg: string;
    MembershipDuration: number;
    MembershipPositionTitle: string;
    MembershipProjectTitle: string;
    MembershipSupervisor: string;
    MembershipDesc: string;
    MembershipCertificatePath: string;
    showDialog: boolean;

    constructor() {

    }
}

export class Experience {

    index: number;
    userId: string;
    experienceType: string;
    experienceOrg: string;
    experienceDuration: number;
    experiencePositionTitle: string;
    experienceProjectTitle: string;
    experienceSupervisor: string;
    experienceDesc: string;
    experienceCertificatePath: string;
    showDialog: boolean;

    constructor() {

    }
}