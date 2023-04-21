export interface CandidateProfile {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  summary: string;
}

export interface ProfilesBlurb {
  _id: string;
  title: string;
  summary: string;
  image: {
    asset: {
      url: string;
    };
  };
}
