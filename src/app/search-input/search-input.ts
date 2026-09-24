import {
  AfterContentInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  imports: [FormsModule],
  templateUrl: `search-input.html`,
  encapsulation: ViewEncapsulation.None,
})
export class SearchInput implements AfterContentInit {
  searchQuery: string = '';
  searchInput = viewChild.required<ElementRef<HTMLInputElement>>('searchInput');
  @Output() search = new EventEmitter<string>();
  @Output() inputChange = new EventEmitter<string>();

  ngAfterContentInit(): void {
    this.searchInput().nativeElement.focus();
  }

  onSearchInput() {
    this.inputChange.emit(this.searchQuery);
  }

  onSearch() {
    this.search.emit(this.searchQuery.trim());
  }

  clearSearch() {
    this.searchQuery = '';
    this.inputChange.emit('');
  }
}
