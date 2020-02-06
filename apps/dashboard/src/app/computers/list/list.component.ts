import { Component, OnInit } from '@angular/core';
import { Computer } from '@mdv10/core-data';
import { ComputersFacade } from '@mdv10/core-state';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'mdv10-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  data: Computer[];
  data$: Observable<Computer[]>;
  destroy$: Subject<true> = new Subject();
  loading$: Observable<boolean>;

  constructor( private facade: ComputersFacade, private router: Router ) {}

  ngOnInit(): void {
    this.loading$ = this.facade.loading$;
    this.data$ = this.facade.data$.pipe( map(data => {
      this.data = data;
      return data;
    }));
    this.facade.load();
  }

  onDelete(entity: Computer) {
    this.facade.delete(entity);
  }

  onEdit(entity: Computer) {
    this.facade.select(entity);
  }
}
