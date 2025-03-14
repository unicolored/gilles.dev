import { Component, Inject, Injectable, InjectionToken, Injector } from '@angular/core';
import { WebPageService } from './web-page.service';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { WordpressService } from '../wordpress/wordpress.service';
import { WebPageMetas } from 'js-interface';

export const WEB_PAGE_ID = new InjectionToken<string>('');
export const WEB_PAGE_METAS_MAP = new InjectionToken<string>('');
export const FONT_AWESOME_ICON_DEFINITION_LIST = new InjectionToken<IconDefinition[]>('');
export const APP_SERVICE = new InjectionToken<Injectable>('');
export const WORDPRESS_SERVICE = new InjectionToken<WordpressService>('');

@Component({
  standalone: true,
  template: ``,
  styles: ``,
  providers: [],
})
/**
 * @deprecated
 */
export class WebPageComponent {
  constructor(
    @Inject(WEB_PAGE_ID) private readonly pageId: string,
    @Inject(WEB_PAGE_METAS_MAP) private readonly webPageMetasMap: Map<string, WebPageMetas>,
    @Inject(FONT_AWESOME_ICON_DEFINITION_LIST) private readonly fontAwesomeIconDefinitionList: IconDefinition[],
    protected readonly service: WebPageService,
    protected readonly injector: Injector,
    library: FaIconLibrary,
  ) {
    if (this.webPageMetasMap.has(this.pageId)) {
      this.service.setMetas(this.webPageMetasMap.get(this.pageId));
    }
    library.addIcons(...this.fontAwesomeIconDefinitionList);
  }
}
