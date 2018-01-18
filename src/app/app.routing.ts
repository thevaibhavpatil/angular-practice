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
    
const APP_ROUTING = [
    {path:'', component:loginComponent},
    { path:'button', component: ButtonComponent },
    {path:'content_projection',component: ContententProjectionComponent},
    {path:'cards',component:CardsComponent},
    {path:'star_rating',component:StarRatingComponent},
    {path:'custom_derectives',component:CustomDirectivesComponent},
    {path:'service',component:ServicesComponent},
    {path:'view_encapsulation',component:EncapsupationComponent},
    {path:'firebase',component:FirebaseHttpComponent},
    {path:'register',component:RegistrationComponent},
    {path:'togglefromparent',component:ToggleParentComponent}
    
];

export const MyRouterModule = RouterModule.forRoot(APP_ROUTING);