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
    loginComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
