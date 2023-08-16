import { TestBed } from '@angular/core/testing';

import { CookieTokenInterceptor } from './cookie-token.interceptor';

describe('CookieTokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CookieTokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CookieTokenInterceptor = TestBed.inject(CookieTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
