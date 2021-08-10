export interface IUser {
  login: string;
  id: number;
  avatar_url: string;
}

export interface IOneUser {
  login: string;
  name: string;
  id: number;
  avatar_url: string;
  repos_url?: string;
  location?: string;
  email?: string;
  followers?: number;
  following?: number;
  created_at?: string;
  bio?: any;
}

export interface IRepos {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  forks: number;
  stargazers_count: number;
  html_url: string;
}
