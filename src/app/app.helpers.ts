export function extractText(inputUrl: string): string | null {
  const match = inputUrl.match(/\/([^/]+?)-\d+x\d+\.[a-z]{3,4}$/i);

  return match ? match[1] : null;
}
