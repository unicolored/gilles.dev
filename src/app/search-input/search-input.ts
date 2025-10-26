import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  imports: [FormsModule],
  templateUrl: `search-input.html`,
  styleUrl: `search-input.css`,
})
export class SearchInput {
  searchQuery: string = '';
  @Output() search = new EventEmitter<string>();
  @Output() inputChange = new EventEmitter<string>();

  onSearchInput() {
    this.inputChange.emit(this.searchQuery);
  }

  onSearch() {
    if (this.searchQuery.trim()) {
      this.search.emit(this.searchQuery.trim());
    }
  }

  clearSearch() {
    this.searchQuery = '';
    this.inputChange.emit('');
  }
}
