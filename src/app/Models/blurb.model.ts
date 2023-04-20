export interface Blurb {
  _id: string;
  title: string;
  summary: string;
  subHeading?: string;
  contenRaw?: string;
  image: {
    asset: {
      url: string;
    };
  };
  button?: string;
}
