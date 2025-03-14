import { PagesService } from './pages.service';

export class PageModel {
  constructor(private pagesService: PagesService) {}

  setTitle(pageId: string): void {
    this.pagesService.setTitle(pageId);
  }
}
