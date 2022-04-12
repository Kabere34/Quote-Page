import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
<<<<<<< HEAD
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { NavbarComponent } from './navbar/navbar.component';
=======
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteTextComponent } from './quote-text/quote-text.component';
import { DatePassedPipe } from './date-passed.pipe';

>>>>>>> ff82ff582d32e6594beafc5dbb1522aaa9724588

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
<<<<<<< HEAD
    QuoteDetailComponent,
    QuoteFormComponent,
    NavbarComponent
=======
    QuoteFormComponent,
    QuoteTextComponent,
    DatePassedPipe,

>>>>>>> ff82ff582d32e6594beafc5dbb1522aaa9724588
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
