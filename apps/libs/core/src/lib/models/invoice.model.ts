import { Address } from "./address.model";
import { InvoiceItem } from "./invoice-item.model";

export interface Invoice {
  id: string;
  createdAt: string;
    paymentDue: string;
    description: string;
    paymentTerms: number;
    clientName: string;
    clientEmail: string;
    status: string;
    senderAddress: Address;
    clientAddress: Address;
    items: InvoiceItem[];
    total: number;
}
