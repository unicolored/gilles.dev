export interface MeiliPost {
  content: string;
  objectID: string;
  published_at: number;
  title: string;
  name: string;
  slug: string;
  markdown: string;
  cloudinaryId: string;
  description: string;
  type: string;
  attachments: string[];
  status: 'draft' | 'pending' | 'publish';
}

export interface MeiliAttachment extends MeiliPost {
  mimeType: string;
}
