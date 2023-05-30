interface ISanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
  _type: string;
}

export interface ISocial extends SanityBody {
  link: string;
  name: string;
}

interface IPicture {
  _type: string;
  asset: {
    _type: string;
    _ref: string;
  };
}

export interface ISkill extends SanityBody {
  name: string;
  image: IPicture;
  imageUrl?: string;
}

export interface IJob extends SanityBody {
  jobTitle: string;
  companyName: string;
  image: IPicture;
  imageUrl?: string;
  companyLocation: string;
  jobSummary: string;
  dateStarted: string;
  dateEnded: string;
  techs: ISkill[];
}

export interface IHomePageData extends SanityBody {
  copyrightYear: number;
  profilePic: Picture;
  profilePicUrl?: string;
  header: string;
  subheader: string;
  socials: ISocial[];
}

export interface IAboutPageData extends SanityBody {
  header: string;
  story: string;
  aboutPic: IPicture;
  aboutPicUrl?: string;
}

export interface IExperiencePageData extends SanityBody {
  techListHeader: string;
  jobs: IJob[];
}

export interface ISkillsPageData extends SanityBody {
  mySkills: ISkill[];
  myToolsListHeader: string;
}