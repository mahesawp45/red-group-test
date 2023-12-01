import React, { useState } from 'react'
import SaleInput from '../../components/SaleInput.tsx'


interface ItemSale {
  id: string;
  price: number;
  qty: number;
  ppn_nominal: number;
  ppn_percent: number;
  sub_total: number;
}

const AddSalePage = () => {

  const [itemSales, setItemSales] = useState<ItemSale[]>([])
  const [idItem, setIdItem] = useState<number>(1);

  const onAddItem = () => {
    setItemSales(itemSales.concat([{
      id: `${idItem}`,
      price: 0,
      qty: 0,
      ppn_nominal: 0,
      ppn_percent: 10,
      sub_total: 0,
    }]))
    setIdItem(idItem + 1)
  }

  const onDeleteItem = (id: string) => {
    setItemSales(itemSales.filter((item) => item.id !== id))
  }

  const onChangePrice = (price: string, id: string) => {

    setItemSales(itemSales.filter((item) => {
      if (item.id === id && price !== "") {
        item.price = parseInt(price) 
        item.ppn_nominal = (item.price * item.ppn_percent / 100) * item.qty
        item.sub_total = (item.price * item.qty) + item.ppn_nominal
        return item
      } else {
        return item
      }
    }))
    
    
    
  }


  const onChangeQty = (qty: string, id: string) => {

    setItemSales(itemSales.filter((item) => {
      if (item.id === id) {
        if (qty !== "") {
          item.qty = parseInt(qty)
          item.ppn_nominal = (item.price * item.ppn_percent / 100) * item.qty
          item.sub_total = (item.price * item.qty) + item.ppn_nominal
        }
        return item
      } else {
        return item
      }
    }))
    
    
    
  }

  return (
    <div className='my-20 flex px-60 flex-col justify-center items-center w-full'>
      <h1 className='mb-20 text-3xl font-bold'>CI JQUERY Example</h1>
      <div className='w-full space-y-6'>
        <SaleInput label='No Faktur' placeHolder={'XXX-XXX-XXX'} value='' onChange={(e) => { }} />
        <SaleInput label='Tanggal Pembayaran' value='' type={'date'} onChange={(e) => { }} />
        <SaleInput label='Keterangan' value='' onChange={(e) => { }} />
      </div>
      <div className='w-full'>
        <div className="mt-16">
          <button
            onClick={onAddItem}
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            TAMBAH BARANG
          </button>
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                          Barang
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Harga
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Qty
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          PPN (10%)
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Sub Total
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Menu
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {itemSales.map((saleItem, index) => (
                        <tr key={saleItem.id}>
                          <td className="whitespace-nowrap px-3 text-sm text-gray-500">
                            <button
                              type="button"
                              className="block rounded-md self-center bg-indigo-600 px-3 py-2 text-center text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              CARI BARANG
                            </button>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <SaleInput id={`price-${index}`} value={saleItem.price.toString()} type={'number'} onChange={(e) => {
                              onChangePrice(e.target.value, saleItem.id)
                            }} />
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <SaleInput id={`qty-${index}`} value={saleItem.qty.toString()} type={'number'} onChange={(e) => {
                              onChangeQty(e.target.value, saleItem.id)
                             }} />
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                            { saleItem.ppn_nominal }
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                            { saleItem.sub_total }
                          </td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <a onClick={() => onDeleteItem(saleItem.id)} className="text-red-600 hover:text-red-900 cursor-pointer">
                              Hapus<span className="sr-only">, {saleItem.id}</span>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddSalePage
