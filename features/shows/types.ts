// Show types
export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite?: string;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number | null;
  };
  weight: number;
  network?: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    officialSite?: string;
  };
  webChannel?: any;
  dvdCountry?: any;
  externals: {
    tvrage?: number;
    thetvdb?: number;
    imdb?: string;
  };
  image?: {
    medium: string;
    original: string;
  };
  summary?: string;
  updated: number;
  _links: {
    self: { href: string };
    previousepisode?: { href: string; name?: string };
  };
}

// Crew types
export interface CrewPerson {
  id: number;
  url: string;
  name: string;
  country?: {
    name: string;
    code: string;
    timezone: string;
  } | null;
  birthday?: string | null;
  deathday?: string | null;
  gender?: string | null;
  image?: {
    medium: string;
    original: string;
  } | null;
  updated: number;
  _links: {
    self: { href: string };
  };
}

export interface Crew {
  type: string;
  person: CrewPerson;
}
