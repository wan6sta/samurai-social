export interface IUserPhotos {
  small: string;
  large: string;
}

export interface IUser {
  name: string;
  id: number;
  uniqueUrlName?: any;
  photos: IUserPhotos;
  status: string;
  followed: boolean;
}

export interface fetchUsersResponse<T> {
  items: T[];
  totalCount: number;
  error?: any;
}

export interface fetchUsers {
  count: number;
  page: number;
  term?: string;
}