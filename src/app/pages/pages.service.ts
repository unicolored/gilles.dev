// Angular service
import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
// import { $localize } from '@angular/localize/init';

// Create a type for the titles object
export type Titles = {
  [key: string]: {
    title: string;
    description?: string | null;
    imageOpenGraphUrl?: string | null;
    imageTwitterUrl?: string | null;
  };
};

@Injectable({
  providedIn: 'root',
})
export class PagesService {
  prefix = 'Gilles Hoarau ≈';

  titles: Titles = {
    404: {
      title: '404',
      description: null,
    },
    home: {
      title: $localize`Developer`,
      description: $localize`Meet Gilles, a self-taught creator of web apps, imagery, and 3D experiences. Discover his developer toolkit, creative media design skills, and more.`,
      imageOpenGraphUrl: null,
      imageTwitterUrl: null,
    },
    about: {
      title: $localize`About`,
      description: $localize`Learn more about Gilles Hoarau, a self-taught web developer and designer with over 15 years of experience. Discover his journey from writing a book on photo manipulation to developing AI-driven web apps, his work in diverse development and graphic design projects, and his hobbies.`,
      imageOpenGraphUrl: null,
      imageTwitterUrl: null,
    },
    contact: {
      title: $localize`Contact`,
      description: $localize`Get in touch with Gilles Hoarau, a seasoned web developer and designer. Call directly, send an email, or book a call to discuss creative ventures or everyday challenges. Gilles is ready to help with your project needs.`,
      imageOpenGraphUrl: null,
      imageTwitterUrl: null,
    },
  };

  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router,
  ) {}

  /**
   * @deprecated Use WebPageService instead
   * @param pageId
   */
  public setTitle(pageId: string): void {
    const title = this.titles[pageId]?.title ?? null;

    const description = this.titles[pageId]?.description ?? null;
    if (title) {
      this.title.setTitle(`${this.prefix} ${title}`);
      this.setOgAndTwitterTitle(`${this.prefix} ${title}`);

      if (description) {
        this.setDescription(description);
      }

      const imageOpenGraphUrl = this.titles[pageId].imageOpenGraphUrl;

      if (imageOpenGraphUrl) {
        this.setOgImage(imageOpenGraphUrl);
      }

      const imageTwitterUrl = this.titles[pageId].imageTwitterUrl;
      if (imageTwitterUrl) {
        this.setTwitterImage(imageTwitterUrl);
      }
    } else {
      this.title.setTitle(`${this.prefix} ${pageId.toLocaleUpperCase()}`);
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

  updateCanonicalUrl(language: string): void {
    const url = this.generateCanonicalUrl(language);
    const link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;

    if (link) {
      link.href = url;
    } else {
      const head = document.head;
      const canonicalLink: HTMLLinkElement = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = url;
      head.appendChild(canonicalLink);
    }
  }

  private generateCanonicalUrl(language: string): string {
    // Replace with your logic to construct the canonical URL based on route and language
    // Example: https://www.gilles.dev/ + language + / + current route
    const currentUrl = this.router.url;
    return `https://www.gilles.dev/${language}/${currentUrl.replace(/^\/(.+?)\//, '')}`;
  }
}
