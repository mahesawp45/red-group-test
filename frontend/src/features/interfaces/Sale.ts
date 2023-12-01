export interface Sale {
  total: number;
  no_faktur: string;
  tanggal_pembayaran: string;
  items: Item[];
  pembayaran: number;
  keterangan: string;
  total_kembalian: number;
}

export interface Item {
  id: string;
  title: string;
  price: number;
  qty: number;
  ppn_nominal: number;
  ppn_percent: number;
  sub_total: number;
}


export interface ItemName {
  id: string;
  title: string;
}