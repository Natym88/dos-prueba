import {IPagedQuery} from './paged-query.dto';
import {ISort} from './sort.dto';

export interface ISortPagedQuery extends IPagedQuery, ISort {
}
