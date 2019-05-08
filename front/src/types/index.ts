export type Picture = {
  src: string,
  alt: string,
  artist?: string,
  title?: string,
  technique?: string,
}

export type MenuItem = {
  title: string,
  year: string,
}

export type ApiCategory = {
  theme: string,
  category: string
};

export type ApiPicture = {
  category: string,
  comment: string,
  file_name: string,
  file_path: string,
  inserted_at: string,
  theme: string,
  updated_at: string,
}
