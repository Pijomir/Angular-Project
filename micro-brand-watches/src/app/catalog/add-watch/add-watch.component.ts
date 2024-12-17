import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { WatchService } from '../watch.service';

@Component({
  selector: 'app-add-watch',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './add-watch.component.html',
  styleUrl: './add-watch.component.css'
})
export class AddWatchComponent {
  constructor(private watchService: WatchService, private router: Router) { }

  addWatch(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const {name, description, image} = form.value;

    this.watchService.createWatches(name, description, image).subscribe(() => {
      this.router.navigate(['/catalog']);
    });
  }
}
