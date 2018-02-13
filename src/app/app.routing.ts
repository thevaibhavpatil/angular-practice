import { RouterModule,Route } from "@angular/router";
import { ButtonComponent } from "./button/button.component";
import { ContententProjectionComponent } from "./contentent-projection/contentent-projection.component";
import { CardsComponent } from "./cards/cards.component";
import { StarRatingComponent } from "./star-rating/star-rating.component";
import { CustomDirectivesComponent } from "./custom-directives/custom-directives.component";
import { ServicesComponent } from "./services/services.component";
import { EncapsupationComponent } from "./encapsupation/encapsupation.component";
import { loginComponent } from "./login/login.component";
import { FirebaseHttpComponent } from "./firebase-http/firebase-http.component";
import { RegistrationComponent } from "./registration/registration.component";
import { ToggleParentComponent } from "./toggle-from-parent/toggle-parent.component";
import { GridUseComponent } from "./grid-use/grid-use.component";
import { NgforComponent } from "./ngfor/ngfor.component";
import { FlexComponent } from "./flex/flex.component";
import { InterComponentCommunicationComponent } from "./inter-component-communication/inter-component-communication.component";
import { LearnHttpComponent } from "./learn-http/learn-http.component";
import { FirstComponent } from "./first/first.component";
import { FileUploadComponent } from "./file-upload/file-upload.component";
import { DestructuringComponent } from "./typescript/destructuring/destructuring.component";
    
const APP_ROUTING = [
    {path:'', component:loginComponent},
    { path:'button', component: ButtonComponent },
    {path:'contentprojection',component: ContententProjectionComponent},
    {path:'cards',component:CardsComponent},
    {path:'starrating',component:StarRatingComponent},
    {path:'customderectives',component:CustomDirectivesComponent},
    {path:'service',component:ServicesComponent},
    {path:'viewencapsulation',component:EncapsupationComponent},
    {path:'firebase',component:FirebaseHttpComponent},
    {path:'register',component:RegistrationComponent},
    {path:'togglefromparent',component:ToggleParentComponent},
    {path:'grid',component:GridUseComponent},
    {path:'ngfor',component:NgforComponent },
    {path:'flex',component:FlexComponent },
    {path:'datadelete',component:InterComponentCommunicationComponent },
    {path:'http',component:LearnHttpComponent },
    {path:'first',component:FirstComponent },
    {path:'fileupload',component:FileUploadComponent },
    {path:'destructuring',component:DestructuringComponent },
    
    {path:'providerprofile',loadChildren:'./provider-profile/provider-profile.module#ProviderProfileModule' }    
       
];

export const MyRouterModule = RouterModule.forRoot(APP_ROUTING);