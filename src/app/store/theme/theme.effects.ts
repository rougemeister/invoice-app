import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadTheme, setTheme, toggleTheme } from './theme.actions';
import { map, tap } from 'rxjs';
import { LocalStorageService } from '../../services/localStorageService/local-storage.service';

@Injectable()
export class themeEffect {
  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService
  ) {}

  toggleTheme$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(toggleTheme),
        tap(() => {
          const currrentTheme = this.localStorageService.getItem('theme');
          const newTheme = currrentTheme === 'light' ? 'dark' : 'light';
          this.localStorageService.setItem('theme', newTheme);
        })
      ),
    { dispatch: false }
  );

  loadTheme$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTheme),
      map(() => {
        const currrentTheme = this.localStorageService.getItem('theme');
        if (currrentTheme === null) {
          this.localStorageService.setItem('theme', 'light');
          const theme = 'light';
          return setTheme({ theme });
        } else {
          const theme = currrentTheme;
          return setTheme({ theme });
        }
      })
    )
  );
}
