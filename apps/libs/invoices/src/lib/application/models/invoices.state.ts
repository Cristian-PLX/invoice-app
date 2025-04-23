import { Invoice } from '../../domain/models/invoice.interface';

export interface InvoicesState {
  pending: boolean;
  isError: boolean;
  data: Invoice[];
  pageIndex: number;
  pageSize: number;
  totalElements: number;
  sortBy: string;
  sortDir: 'asc' | 'desc';
  dataFiltered: [];
}
