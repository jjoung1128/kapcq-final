import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import {
  routeAnimations,
  selectIsAuthenticated
} from '../../../core/core.module';

import { State } from '../examples.state';

@Component({
  selector: 'kw-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  examples = [
    { link: 'todos', label: 'kw.examples.menu.todos' },
    { link: 'stock-market', label: 'kw.examples.menu.stocks' },
    { link: 'theming', label: 'kw.examples.menu.theming' },
    { link: 'crud', label: 'kw.examples.menu.crud' },
    {
      link: 'simple-state-management',
      label: 'kw.examples.menu.simple-state-management'
    },
    { link: 'form', label: 'kw.examples.menu.form' },
    { link: 'notifications', label: 'kw.examples.menu.notifications' },
    { link: 'elements', label: 'kw.examples.menu.elements' },
    { link: 'authenticated', label: 'kw.examples.menu.auth', auth: true }
  ];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }
}
