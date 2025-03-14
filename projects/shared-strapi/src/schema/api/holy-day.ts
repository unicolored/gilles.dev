// Interface automatically generated by schemas-to-ts

import { FetesComponent } from '../components/shared/FetesComponent';
import { TagsComponent } from '../components/shared/TagsComponent';
import { UrlLabelComponent } from '../components/shared/UrlLabelComponent';
import { EmailLabelComponent } from '../components/shared/EmailLabelComponent';
import { FetesComponent_Plain } from '../components/shared/FetesComponent';
import { TagsComponent_Plain } from '../components/shared/TagsComponent';
import { UrlLabelComponent_Plain } from '../components/shared/UrlLabelComponent';
import { EmailLabelComponent_Plain } from '../components/shared/EmailLabelComponent';
import { FetesComponent_NoRelations } from '../components/shared/FetesComponent';
import { TagsComponent_NoRelations } from '../components/shared/TagsComponent';
import { UrlLabelComponent_NoRelations } from '../components/shared/UrlLabelComponent';
import { EmailLabelComponent_NoRelations } from '../components/shared/EmailLabelComponent';

export interface HolyDay {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    name: string;
    dates: FetesComponent[];
    title?: string;
    calendar?: string;
    uniqueFilename: string;
    names: TagsComponent[];
    tags: TagsComponent[];
    information?: string;
    calendarUrls: UrlLabelComponent[];
    slug: string;
    calendarIds: EmailLabelComponent[];
    locale: string;
    localizations?: { data: HolyDay[] };
  };
}
export interface HolyDay_Plain {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  name: string;
  dates: FetesComponent_Plain[];
  title?: string;
  calendar?: string;
  uniqueFilename: string;
  names: TagsComponent_Plain[];
  tags: TagsComponent_Plain[];
  information?: string;
  calendarUrls: UrlLabelComponent_Plain[];
  slug: string;
  calendarIds: EmailLabelComponent_Plain[];
  locale: string;
  localizations?: HolyDay_Plain[];
}

export interface HolyDay_NoRelations {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  name: string;
  dates: FetesComponent_NoRelations[];
  title?: string;
  calendar?: string;
  uniqueFilename: string;
  names: TagsComponent_NoRelations[];
  tags: TagsComponent_NoRelations[];
  information?: string;
  calendarUrls: UrlLabelComponent_NoRelations[];
  slug: string;
  calendarIds: EmailLabelComponent_NoRelations[];
  locale: string;
  localizations?: HolyDay[];
}

export interface HolyDay_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  name: string;
  dates: FetesComponent_Plain[];
  title?: string;
  calendar?: string;
  uniqueFilename: string;
  names: TagsComponent_Plain[];
  tags: TagsComponent_Plain[];
  information?: string;
  calendarUrls: UrlLabelComponent_Plain[];
  slug: string;
  calendarIds: EmailLabelComponent_Plain[];
  locale: string;
  localizations?: HolyDay[];
}
