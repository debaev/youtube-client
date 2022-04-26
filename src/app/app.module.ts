import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import CoreModule from './core/core.module';
import { YoutubeInterceptor } from './youtube/interceptors/youtube.interceptor';
import { reducers, metaReducers } from './redux/reducers';
import { environment } from '../environments/environment';
import { AppEffects } from './redux/effects/app.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: YoutubeInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export default class AppModule { }
