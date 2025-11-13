
export interface PageContent {
  title: string;
  html: string;
}

export interface SchemeContent {
  title: string;
  subtitle: string;
  overview: string;
  eligibility: string;
  documents: string;
  howto: string;
}

export interface ContentData {
  pages: Record<string, PageContent>;
  schemes: Record<string, SchemeContent>;
}
