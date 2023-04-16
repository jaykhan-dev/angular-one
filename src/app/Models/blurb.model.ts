export interface Blurb {
  _id: string;
  title: string;
  summary: string;
  image: {
    asset: {
      url: string;
    };
  };
}
