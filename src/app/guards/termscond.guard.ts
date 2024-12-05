import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { TermsconditionsComponent } from '../pages/auth/termsconditions/termsconditions.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<TermsconditionsComponent> {
  canDeactivate(component: TermsconditionsComponent): boolean | Observable<boolean> {
    if (!component.formSubmitted) {
      alert('Debe enviar el formulario antes de salir.');
      return false;
    }
    return true;
  }
}