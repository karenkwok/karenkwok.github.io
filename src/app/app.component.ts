import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'personal-website';
  firstName = 'K';
  lastName = 'k';
  ngOnInit(): void {
    const fullFirstName = 'Karen';
    const fullLastName = ' Kwok';
    let firstNameIndex = 1;
    let lastNameIndex = 3;
    interval(500)
      .pipe(
        take(4),
        tap(() => {
          this.firstName = this.firstName + fullFirstName[firstNameIndex];
          this.lastName = fullLastName[lastNameIndex] + this.lastName;
          firstNameIndex++;
          lastNameIndex--;
        })
      )
      .subscribe();
  }
}
