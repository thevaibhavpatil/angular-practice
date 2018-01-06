import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { ButtonComponent } from './button/button.component';
import { HttpClientModule } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http/src/module';

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
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    MatChipsModule,BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatIconModule,MatFormFieldModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }
