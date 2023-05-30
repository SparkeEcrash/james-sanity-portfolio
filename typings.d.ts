interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
  _type: string;
}

interface Social {
  _ref: string;
  _type: string;
  _key: string;
}

interface Picture {
  _type: string;
  asset: {
    _type: string;
    _ref: string;
  };
}

export interface HomePageData extends SanityBody {
  copyrightYear: number;
  profilePic: Picture;
  header: string;
  subheader: string;
  socials: Social[];
}

export interface AboutPageData extends SanityBody {
  header: string;
  story: string;
  aboutPic: Picture;
}
