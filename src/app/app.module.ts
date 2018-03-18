import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { PdfmakeModule } from 'ng-pdf-make';

/* ------------------- created Components ------------------------- */
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { CardsComponent } from './cards/cards.component';
import { JamboComponent } from './cards/jambo.component';
import { EncapsupationComponent } from './encapsupation/encapsupation.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { ContententProjectionComponent } from './contentent-projection/contentent-projection.component';
import { ServicesComponent } from './services/services.component';
import { ProgressBarComponent } from './services/progress-bar.component';
import { CalcComponent } from './services/calc.component';
// import { LocalStorageService } from './services/local-storage.service';
import { loginComponent } from './login/login.component';
import { PassContentComponent } from './contentent-projection/pass-content.component';
import { CollectContentComponent } from './contentent-projection/collect-content.component';
import { AddRmvChipsComponent } from './add-rmv-chips/add-rmv-chips.component';
import { MatChipsModule, MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from './button/button.component';
// import { HttpClientModule } from '@angular/common/http';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { YcBorderDirective } from './custom-directives/yc-border.directive';
import { MyRouterModule } from './app.routing';
import { FirebaseHttpComponent } from './firebase-http/firebase-http.component';
import { Http } from '@angular/http';
import { FirebaseconnectService } from './firebase-http/firebaseconnect.service';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToggleFromParentComponent } from './toggle-from-parent/toggle-from-parent.component';
import { ToggleParentComponent } from './toggle-from-parent/toggle-parent.component';
import { TestlessComponent } from './testless/testless.component';
import { GridUseComponent } from './grid-use/grid-use.component';
import { CustomDecoretorsComponent } from './custom-decoretors/custom-decoretors.component';
import { CustomCommonModulesModule } from './common-modules/custom-common-modules.module';
import { NgforComponent } from './ngfor/ngfor.component';
import { FlexComponent } from './flex/flex.component';
import { InterComponentCommunicationComponent } from './inter-component-communication/inter-component-communication.component';
import { DeletOperationComponent } from './inter-component-communication/delet-operation/delet-operation.component';
import { DataDisplayComponent } from './inter-component-communication/data-display/data-display.component';
import { DataDeleteService } from './inter-component-communication/data-delete.service';
import { ReadMoreDirective } from './read-more.directive';
import { LearnHttpComponent } from './learn-http/learn-http.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DestructuringComponent } from './typescript/destructuring/destructuring.component';
import { StatePatternComponent } from './calisthenics-rules/state-pattern/state-pattern.component';
import { PdfGenerateComponent } from './pdf-generate/pdf-generate.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    CardsComponent,
    JamboComponent,
    EncapsupationComponent,
    StarRatingComponent,
    ContententProjectionComponent,
    ServicesComponent,
    ProgressBarComponent,
    CalcComponent,
    loginComponent,
    PassContentComponent,
    CollectContentComponent,
    AddRmvChipsComponent,
    CustomDirectivesComponent,
    YcBorderDirective,
    FirebaseHttpComponent,
    RegistrationComponent,
    ToggleFromParentComponent,
    ToggleParentComponent,
    TestlessComponent,
    GridUseComponent,
    CustomDecoretorsComponent,
    NgforComponent,
    FlexComponent,
    InterComponentCommunicationComponent,
    DeletOperationComponent,
    DataDisplayComponent,
    ReadMoreDirective,
    LearnHttpComponent,
    FileUploadComponent,
    DestructuringComponent,
    StatePatternComponent,
    PdfGenerateComponent

  ],
  imports: [
    BrowserModule,
    MatChipsModule, BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatIconModule, MatFormFieldModule,
    HttpClientModule,
    MyRouterModule,
    HttpModule,
    FormsModule,
    CustomCommonModulesModule,
    ReactiveFormsModule,
    PdfmakeModule
  ],
 
    providers: [
    ButtonComponent,
    FirebaseconnectService,
    DataDeleteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }
