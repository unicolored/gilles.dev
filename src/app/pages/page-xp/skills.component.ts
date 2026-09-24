import { Component, inject, OnInit } from '@angular/core';
import { PageInterface } from '../page.interface';
import { PageIdSlugEnum } from '../../app.global';
import { WEB_PAGE_METAS_MAP, WebPageMetas, WebPageService } from 'ngx-services';
import { environment } from '../../../environments/environment';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
})
export class SkillsComponent implements OnInit, PageInterface {
  pageId = PageIdSlugEnum.skills;
  public year: number = new Date().getFullYear();

  private readonly webPageService = inject(WebPageService);
  private webPageMetasMap = inject<Map<string, WebPageMetas>>(WEB_PAGE_METAS_MAP);
  ngOnInit(): void {
    const metas = this.webPageMetasMap.has(this.pageId);
    console.log('skills metas', metas);
    if (this.webPageMetasMap.has(this.pageId)) {
      this.webPageService.setMetas(this.webPageMetasMap.get(this.pageId), environment.endpoints?.['_self']);
    }
  }
}
