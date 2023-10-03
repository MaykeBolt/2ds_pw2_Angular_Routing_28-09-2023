import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainscreenComponent } from './components/mainscreen/mainscreen.component';
import { BottombarComponent } from './components/widgets/bottombar/bottombar.component';
import { TopbarComponent } from './components/widgets/topbar/topbar.component';
import { UseridentificationComponent } from './components/widgets/useridentification/useridentification.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainscreenComponent,
    BottombarComponent,
    TopbarComponent,
    UseridentificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
