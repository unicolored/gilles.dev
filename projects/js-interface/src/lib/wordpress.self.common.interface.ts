export interface MediaDetails {
  width: number;
  height: number;
  file: string;
  filesize?: number;
  sizes: Sizes;
  image_meta: ImageMeta;
  ewww_image_optimizer?: string;
  yoimg_attachment_metadata?: YoimgAttachmentMetadata;
}

export interface ImageMeta {
  aperture: string;
  credit: string;
  camera: string;
  caption: string;
  created_timestamp: string;
  copyright: string;
  focal_length: string;
  iso: string;
  shutter_speed: string;
  title: string;
  orientation: string;
  keywords: any[];
}

export interface Sizes {
  thumbnail: SizeDetails;
  medium: SizeDetails;
  large: SizeDetails;
  twittersm: SizeDetails;
  carre: SizeDetails;
  vertical: SizeDetails;
  twitter: SizeDetails;
  full: SizeDetails;
}

export interface SizeDetails {
  file: string;
  width: number;
  height: number;
  filesize?: number;
  ewww_image_optimizer?: string;
  mime_type: string;
  source_url: string;
}

export interface Rendered {
  rendered: string;
  protected?: boolean;
}

export interface Meta {
  footnotes: string;
  _cloudinary_featured_overwrite: boolean;
}

export interface Links {
  self: About[];
  collection: About[];
  about: About[];
  author: Author[];
  replies: Author[];
}

export interface About {
  href: string;
}

export interface Author {
  embeddable: boolean;
  href: string;
}

export enum MIMEType {
  ImagePNG = 'image/png',
  ImageJPG = 'image/jpg',
}

export interface YoimgAttachmentMetadata {
  crop: Crop;
}

export interface Crop {
  thumbnail: CropDetails;
  twittersm: CropDetails;
  twitter: CropDetails;
  carre: CropDetails;
  vertical: CropDetails;
}

export interface CropDetails {
  x: string;
  y: string;
  width: string;
  height: string;
}
