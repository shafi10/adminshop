export type Home = {
  message: string;
  status: string;
};

export type InitialLoginValue = {
  email: string;
  password: string;
};

export type InitialCategoryValue = {
  _id?: string;
  name: string;
  image: string;
  is_active: boolean;
  is_visible: boolean;
};

export type AdminInfo = {
  _id: string;
  name: string;
  email: string;
  roles: string[];
};

export type Category = {
  _id: string;
  name: string;
  image: string;
  is_active: boolean;
  is_visible: boolean;
  createdAt: string;
};

export type TableHead = { label: string; width: string };
