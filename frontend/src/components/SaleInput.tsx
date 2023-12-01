import React from 'react'

type onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;

interface Props {
    id?: string | null;
    label?: string | null;
    value: string;
    placeHolder?: string | null;
    type?: string | null;
    onChange?: onChangeHandler;

}

const SaleInput: React.FC<Props> = ({ id ,label, value, placeHolder, onChange, type }) => {
    return (
        <div className='w-full'>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                { label }
            </label>
            <div className="mt-2">
                <input
                    type={type ?? "text"}
                    name={label ?? ""}
                    id={id ?? ""}
                    min={0}
                    value={value}
                    onChange={onChange}
                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder={placeHolder ?? ""}
                />
            </div>
        </div>
    )
}

export default SaleInput
