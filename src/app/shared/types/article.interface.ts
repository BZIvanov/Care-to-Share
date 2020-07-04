import { ProfileInterface } from './profile.interface';
import { PopularTagType } from './popular-tag.type';

export interface ArticleInterface {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: PopularTagType[];
  description: string;
  author: ProfileInterface;
  favorited: boolean;
  favoritesCount: number;
}
