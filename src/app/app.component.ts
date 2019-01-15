import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'pokemon-app',
  templateUrl: './app/app.component.html'
})
export class AppComponent {
  public constructor(private titleService: Title) {}

  public updateTitle(title: string) {
      this.titleService.setTitle(title);
    }
}
