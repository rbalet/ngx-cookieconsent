/* tslint:disable:no-unused-variable */

import { TestBed, waitForAsync } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { AppSharedModule } from './shared/shared.module';
import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent';
import { TranslateService } from '@ngx-translate/core';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: 'localhost'
  }
};
describe('App: ngx-cookieconsent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppSharedModule,
        RouterModule.forRoot(appRoutes),
        NgcCookieConsentModule.forRoot(cookieConfig)],
      declarations: [
        AppComponent,
        GettingStartedComponent,
        HomeComponent],
      providers: [
        { provide: TranslateService, useValue: class {}},
        { provide: APP_BASE_HREF, useValue: '/' }]
    });
  });

  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
