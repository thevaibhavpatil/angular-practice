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
    CalcComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
