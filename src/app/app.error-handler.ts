import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from './shared/messages';
import { LoginService } from './security';

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {

  constructor(
    private notificationService: NotificationService,
    private injector: Injector,
    private zone: NgZone
  ) {
    super();
  }

  handleError(error: HttpErrorResponse | any) {
   if (error instanceof HttpErrorResponse) {
     const message = error.message;
     this.zone.run(() => {
      switch (error.status) {
        case 401:
         this.injector.get(LoginService).handleLogin();
         break;
        case 403:
         this.notificationService.notify(message || 'Não Autorizado.');
         break;
        case 404:
        console.log(message)
         this.notificationService.notify(message || 'Recurso não encontrado, entre em contato com o administrador do sistema');
         break;
      }
     })
   }
   super.handleError(error);
  }
}
