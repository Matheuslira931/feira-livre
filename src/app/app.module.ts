import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalService } from './core/services/global.service';
import { SiteModule } from './site/site.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SiteModule,
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutingModule)
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
