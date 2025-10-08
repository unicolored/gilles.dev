import { writeFile, mkdir } from 'node:fs/promises';

// Define the PostList interface to match your Angular project's structure
interface PostList {
  name: string;
  description: string;
  items: Array<{ id: number; title: string }>;
}

// Configuration
const API_BASE_URL: string = process.env['API_BASE_URL'] || 'https://myadmin.unicolo.red/api';
const PORTFOLIO_SLUGS: string[] = ['gilles-dev-visual-identity', 'gilles-dev-development'];
const OUTPUT_PATH: string = './public/assets/portfolio-data.json';

// Log configuration for debugging
console.log('Environment API_BASE_URL:', process.env['API_BASE_URL']);
console.log('Effective API_BASE_URL:', API_BASE_URL);
console.log('Slugs:', PORTFOLIO_SLUGS);
console.log('Output path:', OUTPUT_PATH);

async function generatePortfolioData(): Promise<void> {
  try {
    // Ensure public/assets folder exists
    await mkdir('./public/assets', { recursive: true });
    console.log('Generating portfolio-data.json...');

    // Fetch data for each slug
    const fetchPromises: Promise<Partial<PostList>>[] = PORTFOLIO_SLUGS.map(async (slug: string) => {
      const endpoint: string = `${API_BASE_URL}/post_lists/${slug}`;
      console.log('Requesting endpoint:', endpoint);
      try {
        const response: Response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: Failed to fetch data for slug: ${slug}`);
        }
        return response.json() as Promise<Partial<PostList>>;
      } catch (error: any) {
        console.warn(`Error fetching slug: ${slug}`, error.message);
        return { name: slug, description: `Fallback for ${slug}`, items: [] };
      }
    });

    const portfolioData: Partial<PostList>[] = await Promise.all(fetchPromises);

    // Write data to JSON file
    await writeFile(OUTPUT_PATH, JSON.stringify(portfolioData, null, 2), 'utf-8');
    console.log(`Successfully wrote portfolio data to ${OUTPUT_PATH}`);
  } catch (error: any) {
    console.error('Error generating portfolio-data.json:', error);
    process.exit(1); // Exit with error code to fail the build
  }
}

generatePortfolioData();
