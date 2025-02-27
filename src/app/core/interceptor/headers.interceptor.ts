import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenManagerService } from '../../shared/services/token-manager.service';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  const _TokenManagerService = inject(TokenManagerService)

  const token = _TokenManagerService.getToken();

  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    },
  });

  return next(req);
};
