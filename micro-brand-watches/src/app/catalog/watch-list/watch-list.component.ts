import { Component, OnInit } from '@angular/core';
import { Watch } from '../../types/watch';
import { WatchService } from '../watch.service';
import { RouterLink } from '@angular/router';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [RouterLink, SlicePipe],
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.css'
})
export class WatchListComponent implements OnInit {
  watches: Watch[] = [];
  isThereWatches: Boolean = false;
  constructor(private watchService: WatchService) { }

  ngOnInit(): void {
    this.watchService.getWatches().subscribe(w => {
      this.watches = w;
      this.isThereWatches = this.watches.length > 0;
    });
  }

}
