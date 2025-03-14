import { calendar_v3 } from 'googleapis/build/src/apis/calendar/v3';

export interface CalendarQuery {
  calendarId: string | null;
  numberOfDays: number;
}

export interface CsvCalendarRow {
  jour: string;
  fete: string;
  description?: string;
}

export interface DiffToday {
  diffToday: number;
}

export type EventItem = Partial<calendar_v3.Schema$Event> & DiffToday;
