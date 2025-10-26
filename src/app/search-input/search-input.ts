import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  imports: [FormsModule],
  templateUrl: `search-input.html`,
  encapsulation: ViewEncapsulation.None,
})
export class SearchInput {
  searchQuery: string = '';
  @Output() search = new EventEmitter<string>();
  @Output() inputChange = new EventEmitter<string>();

  onSearchInput() {
    this.inputChange.emit(this.searchQuery);
  }

  onSearch() {
    console.log('onSearch query', this.searchQuery);
    if (this.searchQuery.trim()) {
      this.search.emit(this.searchQuery.trim());
    }
  }

  clearSearch() {
    this.searchQuery = '';
    this.inputChange.emit('');
  }
}
