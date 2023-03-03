import { Component } from '@angular/core';
import { take } from 'rxjs';
import { FixerService } from 'src/app/services/fixer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../app.component.css'],
})
export class HeaderComponent {
  constructor(private fixerService: FixerService) {}
  ngOnInit(): void {
    this.fixerService
      .getUAHCurrent()
      .pipe(take(1))
      .subscribe((data) => {
        this.usd = 1 / data.rates['USD'];
        this.eur = 1 / data.rates['EUR'];
      });
  }
  usd = 0;
  eur = 0;
}
