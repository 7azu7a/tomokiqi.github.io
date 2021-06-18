export interface IBlog {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  revisedAt: Date;
  cover: {
    url: string;
    height: number;
    width: number;
  };
  title: string;
  body: string;
}

export interface IBlogList {
  contents: IBlog[];
  totalCount: number;
  offset: number;
  limit: number;
}
