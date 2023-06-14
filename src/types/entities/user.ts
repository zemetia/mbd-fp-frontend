export type User = {
  name: string;
  photo_url: string;
  role: string;
  email: string;
  token: string;
  membership: string;
};

export type LoginRespond = {
  name: string;
  photo_url: string;
  role: string;
  email: string;
  membership: string;
};

// User page
export type UserColumn = {
  id: string;
  name: string;
  email: string;
  no_telp: string;
  role: string;
  membership: string;
};
