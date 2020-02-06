import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppFacade } from '@mdv10/core-state';
import { AuthFacade } from '@mdv10/core-state';

@Component({
  selector: 'mdv10-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  initialized$;
  title = 'dashboard';

  links = [
    {path: '', title: 'home', icon: 'home'}
  ];

  constructor(
    private facade: AppFacade,
    private authFacade: AuthFacade,
    private appFacade: AppFacade,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initialized$ = this.facade.initialized$;
    this.facade.initialize();
  }

  get authenticated() {
    return this.authFacade.authenticated$;
  }

  get loading$() {
    return this.appFacade.loading$
  }

  onLogout() {
    this.authFacade.logout();
  }

  onCreate() {

    this.router.navigateByUrl('kicks/create');
  }

}
