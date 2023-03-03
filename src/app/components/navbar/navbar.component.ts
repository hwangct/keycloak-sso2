import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { authConfig } from 'src/app/sso.config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private oauthService: OAuthService, private router: Router) {}
  username: string = '';

  ngOnInit(): void {
    this.configureSingleSignOn();
    let userClaims: any = this.oauthService.getIdentityClaims();
    this.username = userClaims.preferred_username
      ? userClaims.preferred_username
      : '';
  }

  configureSingleSignOn() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oauthService.initCodeFlow();
  }
  logout() {
    this.oauthService.logOut();
  }
  showInfo() {
    this.router.navigate(['/home']);
  }

  get token() {
    let claims: any = this.oauthService.getIdentityClaims();
    return claims ? claims : null;
  }
}
