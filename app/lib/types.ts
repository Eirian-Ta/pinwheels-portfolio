export type TagGroup = {
  groupName: string;
  tags: string[];
};

export type ProjectTagPair = {
  id: string;
  app_code: string;
  tag_id: string;
};

export type ProjectUrlPair = {
  id: string;
  app_code: string;
  link_type: string;
  link_url: string;
};
