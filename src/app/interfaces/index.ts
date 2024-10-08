// Generated by https://quicktype.io
export interface NewsResp {
    status:       string;
    totalResults: number;
    articles:     Article[];
}
export interface Article {
    source:      Source;
    author:      string;
    title:       string;
    description: string;
    url:         string;
    urlToImage:  string;
    publishedAt: string;
    content:     string;
}
export interface Source {
    id:   ID;
    name: Name;
}
export enum ID {
  // eslint-disable-next-line @typescript-eslint/naming-convention
    Techcrunch = 'techcrunch',
}
export enum Name {
  // eslint-disable-next-line @typescript-eslint/naming-convention
    TechCrunch = 'TechCrunch',
}
