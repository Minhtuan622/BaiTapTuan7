import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ContentComponent} from "./Bai_1/content/content.component";
import {BannerComponent} from "./Bai_1/banner/banner.component";
import { Bai2Component } from './Bai_2/bai2/bai2.component';
import { TruyenCuoiComponent } from './Bai_3/truyen-cuoi/truyen-cuoi.component';
import { ThoiSuComponent } from './Bai_4/thoi-su/thoi-su.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    BannerComponent,
    Bai2Component,
    TruyenCuoiComponent,
    ThoiSuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
