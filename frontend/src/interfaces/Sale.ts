export interface Sale {
  id?: string | null;
  no_faktur: string;
  tanggal_pembayaran: string;
  keterangan?: string | null;
  pembayaran: number;
  total: number;
  total_kembalian: number;
  items: Item[];
}

export interface Item {
  id: string;
  nama: string;
  harga: number;
  qty: number;
  ppn_nominal: number;
  ppn_percent: number;
  sub_total: number;
}


export interface ItemName {
  id: string;
  title: string;
}