import { Inject, Injectable, DOCUMENT } from '@angular/core';

import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Graph } from 'schema-dts';
import { WebPageMetas } from './web-page.interface';

@Injectable({
  providedIn: 'root',
})
export class WebPageService {
  private prefix = '';

  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router,
    @Inject(DOCUMENT) private _document: Document,
  ) {}

  public setMetas(detail: WebPageMetas | undefined, host: string | null = null): void {
    if (!detail) {
      return;
    }

    const title = detail.title ?? null;

    const description = detail.description ?? null;

    const canonical = detail.canonical ?? null;

    const schema = detail.schema ?? null;

    if (title) {
      this.title.setTitle(`${this.prefix}${title}`);
      this.setOgAndTwitterTitle(`${this.prefix}${title}`);

      if (description) {
        this.setDescription(description);
      }

      if (canonical && host) {
        this.setCanonical(canonical, host);
      }

      if (schema) {
        this.setSchema(schema);
      }

      const imageOpenGraphUrl = detail.imageOpenGraphUrl;
      if (imageOpenGraphUrl) {
        this.setOgImage(imageOpenGraphUrl);
      }

      const imageTwitterUrl = detail.imageTwitterUrl;
      if (imageTwitterUrl) {
        this.setTwitterImage(imageTwitterUrl);
      }
    } else {
      this.title.setTitle(`${this.prefix ?? '👋'}`);
    }
  }

  public setDescription(description: string): void {
    // this.meta.addTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'description', content: description });

    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'twitter:description', content: description });
  }

  public setOgAndTwitterTitle(title: string): void {
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'twitter:title', content: title });
  }

  public setOgImage(imageOpenGraphUrl: string): void {
    this.meta.updateTag({ property: 'og:image', content: imageOpenGraphUrl });
  }

  public setTwitterImage(imageTwitterUrl: string): void {
    this.meta.updateTag({ property: 'twitter:image', content: imageTwitterUrl });
  }

  // updateCanonicalUrl(language: string): void {
  //   const url = this.generateCanonicalUrl(language);
  //   const link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  //
  //   if (link) {
  //     link.href = url;
  //   } else {
  //     const head = document.head;
  //     const canonicalLink: HTMLLinkElement = document.createElement('link');
  //     canonicalLink.rel = 'canonical';
  //     canonicalLink.href = url;
  //     head.appendChild(canonicalLink);
  //   }
  // }

  private generateCanonicalUrl(language: string): string {
    // Replace with your logic to construct the canonical URL based on route and language
    // Example: https://www.gilles.dev/ + language + / + current route
    const currentUrl = this.router.url;
    return `https://www.gilles.dev/${language}/${currentUrl.replace(/^\/(.+?)\//, '')}`;
  }

  // private isHomepage(): boolean {
  //   // Replace with your logic to construct the canonical URL based on route and language
  //   // Example: https://www.gilles.dev/ + language + / + current route
  //   return this.router.url === '/';
  // }

  public setSchema(schema: Graph): void {
    const script = this._document.createElement('script');
    script.type = 'application/ld+json';
    script.text = `${JSON.stringify(schema)}`;

    this._document.head.appendChild(script);
  }

  private setCanonical(canonical: string, host: string | null) {
    if (!host) {
      return;
    }

    const hostPrefix = host ? host.replace(/\/$/, '') : '';
    const canonicalSuffix = canonical.startsWith('/') ? canonical.substring(1) : canonical;

    const url = `${hostPrefix}/${canonicalSuffix}`;
    const link = this._document.querySelector('link[rel="canonical"]') as HTMLLinkElement;

    if (link) {
      link.href = url;
    } else {
      const head = this._document.head;
      const canonicalLink: HTMLLinkElement = this._document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = url;
      head.appendChild(canonicalLink);
    }
  }
}
