export type CacheMetrics = {
  hits: number;
  misses: number;
  keys: number;
  ksize: number;
  vsize: number;
};

export type TimingMetrics = {
  init: number;
  NlpDetectIntent: number;
  IntentSearch: number;
  SpellCheck: number;
  SaveSuggestions: number;
  total: number;
};

export type Measure<TimingMetrics> = {
  [P in keyof TimingMetrics]: {
    start: number;
    end: number;
  };
};

export type MeasureTimingMetrics = Measure<TimingMetrics>;

export interface PerformanceMetrics {
  timestamp: number;
  cached: boolean;
  dump: boolean;
  log: boolean;
  endpoint: string;
  environment: string;
  parameters: RequestParameters;
  timing: TimingMetrics;
  cache: CacheMetrics;
}

export type RequestParameters = {
  query: string;
  sessionID: string | null;
  brands: string | null;
};
