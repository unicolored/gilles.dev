import { Component, inject, OnInit } from '@angular/core';
import { PageInterface } from '../page.interface';
import { CloudinaryImage } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { PageIdSlugEnum } from '../../app.global';
import { WEB_PAGE_METAS_MAP, WebPageMetas, WebPageService } from 'ngx-services';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { CloudinaryModule } from '@cloudinary/ng/dist';

@Component({
  standalone: true,
  imports: [CommonModule, CloudinaryModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, PageInterface {
  pageId = PageIdSlugEnum.about;
  // myImage =  new CloudinaryImage('photo500_2024_067133a99d', {cloudName: 'unicolored'}).resize(fill().width(100).height(150));
  myPhoto = new CloudinaryImage('photo500_2024_067133a99d', { cloudName: 'unicolored' }).resize(
    fill().width(233).height(233),
  );
  year: number = new Date().getFullYear();
  avatarSrc: string = this.myPhoto.toURL();

  private readonly webPageService = inject(WebPageService);
  private webPageMetasMap = inject<Map<string, WebPageMetas>>(WEB_PAGE_METAS_MAP);
  ngOnInit(): void {
    if (this.webPageMetasMap.has(this.pageId)) {
      this.webPageService.setMetas(this.webPageMetasMap.get(this.pageId), environment.endpoints?.['_self']);
    }
  }
}
