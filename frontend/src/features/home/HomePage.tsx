import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ADD_SALE, EDIT_SALE } from '../../routes/routes.ts'
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts'
import { deleteSale, filterSales, getSales } from '../sale/saleSlice.ts'
import { Sale } from '../../interfaces/Sale.ts'
import Spinner from '../../components/Spinner.tsx'

const HomePage = () => {

  const dispatch = useAppDispatch()

  const initApp = useCallback(async () => {
    await dispatch(getSales())
  }, [dispatch])

  const { data, loading, isSuccess } = useAppSelector((state) => state.sales)

  useEffect(() => {
    initApp()
  }, [])

  const handleDelete = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sale: Sale) => {
    e.preventDefault();

    filterSales(sale?.id)
    dispatch(deleteSale(sale.id))

  }

  return (
    <div className='w-full relative'>
      <div className='my-20 flex px-20 flex-col justify-center items-center w-full'>
        <h1 className='mb-20 text-3xl font-bold'>CI JQUERY Example</h1>
        <div className="px-4 sm:px-6 lg:px-8 w-full">
          <div className="mt-4 sm:mt-0 sm:flex-none">
            <Link to={ADD_SALE}>
              <button
                type="button"
                className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                TAMBAH PENJUALAN
              </button>
            </Link>
          </div>
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                      >
                        NO
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        NO Faktur
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Tanggal Pembelian
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Keterangan
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Pembayaran
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Total
                      </th>
                      <th scope="col"
                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Menu
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">

                    {
                      data?.map((sale) => (
                        <tr key={sale.id}>
                          <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">{sale.id}</td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                            {sale.no_faktur}
                          </td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">{sale.tanggal_pembayaran}</td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{sale.keterangan}</td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{sale.pembayaran}</td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{sale.total}</td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm flex justify-between">
                            <Link to={`${EDIT_SALE}${sale.id}`}>
                              <a className="text-indigo-600 hover:text-indigo-900 cursor-pointer">
                                Edit<span className="sr-only">, {sale.id}</span>
                              </a>
                            </Link>
                            <a onClick={(e) => {
                              handleDelete(e, sale)
                            }} className="text-red-600 hover:text-red-900 cursor-pointer">
                              Delete<span className="sr-only">, {sale.id}</span>
                            </a>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>


      {
        loading ? <Spinner /> : null
      }
    </div>

  )
}

export default HomePage
