<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SaleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        $shouldNumeric = 'required|numeric';

        return [
            'no_faktur' => 'required',
            'tanggal_pembayaran' => 'required|date',
            'keterangan' => 'max:255',
            'pembayaran' => $shouldNumeric,
            'total' => $shouldNumeric,
            'total_kembalian' => $shouldNumeric,
            'items' => 'required|array',
        ];
    }

    public function messages()
    {
        return [
            'no_faktur.required' => 'Nomor faktur wajib diisi.',
            'tanggal_pembayaran.required' => 'Tanggal pembayaran wajib diisi.',
            'tanggal_pembayaran.date' => 'Tanggal pembayaran harus berupa tanggal yang valid.',
            'keterangan.max' => 'Deskripsi tidak boleh lebih dari :max karakter.',
            'pembayaran.required' => 'Jumlah pembayaran wajib diisi.',
            'pembayaran.numeric' => 'Jumlah pembayaran harus berupa nilai numerik.',
            'total.required' => 'Jumlah total wajib diisi.',
            'total.numeric' => 'Jumlah total harus berupa nilai numerik.',
            'total_kembalian.required' => 'Jumlah kembalian total wajib diisi.',
            'total_kembalian.numeric' => 'Jumlah kembalian total harus berupa nilai numerik.',
            'items.*.nama' => 'required',
            'items.*.harga' => 'required|numeric',
            'items.*.qty' => 'required|integer',
            'items.*.ppn_nominal' => 'required|numeric',
            'items.*.ppn_percent' => 'nullable|numeric',
            'items.*.sub_total' => 'required|numeric',
        ];
    }
}
