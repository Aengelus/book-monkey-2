import { BookStoreService } from './../shared/book-store.service';
import { Book, Thumbnail } from './../shared/book';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styles: []
})

export class BookListComponent implements OnInit {
  books: Book[];

  constructor(private bs: BookStoreService) {}

  ngOnInit() {
    this.books = this.bs.getAll();
  }

}
