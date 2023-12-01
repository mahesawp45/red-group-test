import React, { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ItemName } from '../features/interfaces/Sale.ts';

interface Props {
    isOpen: boolean;
    title: string;
    data: ItemName[];
    onClose: () => void;
    onSelectedItem: (itemName: ItemName) => void;
}

const Modal: React.FC<Props> = ({ isOpen, title, data, onClose, onSelectedItem }) => {
    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="absolute z-50" initialFocus={cancelButtonRef} onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:items-start">
                                        <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                {title}
                                            </Dialog.Title>
                                            <div className="mt-8 w-full">
                                                <div className="inline-block min-w-full py-2 align-middle">
                                                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                                        <table className="min-w-full divide-y divide-gray-300">
                                                            <thead className="bg-gray-50">
                                                                <tr>
                                                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                                                        No
                                                                    </th>
                                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                                        Nama Barang
                                                                    </th>
                                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                                        Menu
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="divide-y divide-gray-200 bg-white">
                                                                {data.map((item, index) => (
                                                                    <tr key={item.id}>
                                                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                                            {index + 1}
                                                                        </td>
                                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.title}</td>
                                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                                            <a onClick={() => {
                                                                                onSelectedItem(item)
                                                                                onClose()
                                                                            }
                                                                            } className="text-indigo-600 hover:text-indigo-900 cursor-pointer font-semibold">
                                                                                PILIH<span className="sr-only">, {item.id}</span>
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
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={() => onClose()}
                                        ref={cancelButtonRef}
                                    >
                                        Tutup
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default Modal
