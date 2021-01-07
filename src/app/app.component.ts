import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { delay, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'personal-website';
  firstName = 'K';
  lastName = 'k';
  showHover = false;
  ngOnInit(): void {
    const fullFirstName = 'Karen';
    const fullLastName = ' Kwok';
    let firstNameIndex = 1;
    let lastNameIndex = 3;
    interval(200)
      .pipe(
        delay(1000),
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
  showHoverBlack(): void {
    this.showHover = true;
  }
  hideHoverBlack(): void {
    this.showHover = false;
  }
}
