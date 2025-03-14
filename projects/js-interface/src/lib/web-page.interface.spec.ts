import { WebPageMetas } from './web-page.interface';

describe('containers', () => {
  it('should accept a valid WebPageMetas object', () => {
    const validMeta: WebPageMetas = {
      isHome: true,
      title: 'Home Page',
      description: 'This is the homepage.',
      canonical: 'https://www.homepage.com',
      imageOpenGraphUrl: 'https://www.homepage.com/og-image.png',
      imageTwitterUrl: 'https://www.homepage.com/twitter-image.png',
    };
    expect(validMeta.title).toBe('Home Page');
  });

  // Test case for optional properties
  it('should handle optional properties correctly', () => {
    const partialMeta: WebPageMetas = {
      title: 'Partial Page',
    };
    expect(partialMeta.title).toBe('Partial Page');
    expect(partialMeta.isHome).toBeUndefined();
  });
});
