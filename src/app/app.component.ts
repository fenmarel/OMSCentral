import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from './core/settings.service';
import { Store } from '@ngrx/store';
import { AuthState } from './state/auth/reducers';
import { GetUser } from './state/auth/actions/auth';
import { getLoading } from './state/auth/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'oms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'oms';
  downloaded = false;
  maintenance = false;
  loading$: Promise<boolean> | Observable<boolean>;
  constructor(public router: Router, private settingsService: SettingsService, private store: Store<AuthState>) {
    this.loading$ = this.store.select(getLoading)
    this.settingsService.settings$.subscribe(settings => {
      if (settings !== null) {
        this.downloaded = true;
        this.maintenance = settings.maintenance || false;
      }
    });
  }

  ngOnInit() {
    this.store.dispatch(new GetUser());
  }

}
