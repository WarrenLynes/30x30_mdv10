import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppFacade } from '@mdv10/core-state';
import { AuthFacade } from '@mdv10/core-state';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'mdv10-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  destroy$: Subject<true> = new Subject();
  initialized$;
  title = 'dashboard';
  loading: boolean;

  links = [
    {path: '', title: 'home', icon: 'home'}
  ];

  constructor(
    private facade: AppFacade,
    private authFacade: AuthFacade,
    private appFacade: AppFacade,
    private router: Router,
    private cdRef : ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.initialized$ = this.facade.initialized$;
    this.facade.initialize();

    this.facade.loading$.pipe(takeUntil(this.destroy$)).subscribe((x) => {
      if(x !== this.loading) {
        this.loading = x;
        this.cdRef.detectChanges();
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  onLogout() {
    this.authFacade.logout();
  }

  onCreate() {

    this.router.navigateByUrl('kicks/create');
  }

}
