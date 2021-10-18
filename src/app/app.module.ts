import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BtnComponent } from './components/btn/btn.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { MessageComponent } from './components/message/message.component';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [AppComponent, BtnComponent, DialogComponent, MessageComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
