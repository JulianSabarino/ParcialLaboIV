import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideToastr } from 'ngx-toastr';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(), //loading spinner and toastr
    provideToastr({timeOut:4000,preventDuplicates:true}),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideFirebaseApp(() => 
      initializeApp({"projectId":"parcialsabarino",
      "appId":"1:915062825478:web:d0d5a512218fb531d85987",
      "storageBucket":"parcialsabarino.appspot.com",
      "apiKey":"AIzaSyB3GPFTNV5cTf1arc1QqEJrAQR9hQMdfxs",
      "authDomain":"parcialsabarino.firebaseapp.com",
      "messagingSenderId":"915062825478"})),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
  ]
};
