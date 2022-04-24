import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class YoutubeInterceptor implements HttpInterceptor {
  // eslint-disable-next-line class-methods-use-this
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const API_KEY = 'AIzaSyCx_ipA6CGckf9hYTbdGpR-gXRmU9V4GeI';
    const URL = 'https://www.googleapis.com/youtube/v3';
    return next.handle(
      request.clone({
        url: `${URL}/${request.url}`,
        setParams: {
          key: API_KEY,
        },
      }),
    );
  }
}
