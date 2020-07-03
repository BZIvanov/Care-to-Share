import { PopularTagType } from '../../../../shared/types/popular-tag.type';

export interface PopularTagsStateInterface {
  data: PopularTagType[] | null;
  isLoading: boolean;
  error: string | null;
}
