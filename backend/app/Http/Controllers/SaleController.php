<?php

namespace App\Http\Controllers;

use App\Http\Requests\SaleRequest;
use App\Models\ItemSale;
use App\Models\Sale;
use Illuminate\Http\Request;

class SaleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sales = Sale::all();

        return response()->json($sales);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SaleRequest $request)
    {
        $validatedData = $request->validated();

        if (!$validatedData) {
            return response()->json(['message' => $validatedData->errors(), 'isSuccess' => false], 400);
        }

        $sale = Sale::create($validatedData);

        $itemsData = $validatedData['items'];
        $items = [];

        foreach ($itemsData as $itemData) {
            $items[] = new ItemSale($itemData);
        }

        $sale->items()->saveMany($items);

        return response()->json(['message' => 'Data Sale berhasil ditambahkan!'], 201);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Sale  $sale
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $sale = Sale::with(['items'])->find($id);

        if (!$sale) {
            return response()->json(['message' => 'Data Sale tidak ditemukan!', 'isSuccess' => false], 404);
        }

        return response()->json($sale);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Sale  $sale
     * @return \Illuminate\Http\Response
     */
    public function edit(Sale $sale)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Sale  $sale
     * @return \Illuminate\Http\Response
     */
    public function update(SaleRequest $request, $id)
    {

        $validatedData = $request->validated();

        if (!$validatedData) {
            return response()->json(['message' => $validatedData->errors(), 'isSuccess' => false], 400);
        }

        $sale = Sale::find($id);

        if (!$sale) {
            return response()->json(['message' => 'Data Sale tidak ditemukan!', 'isSuccess' => false], 404);
        }


        $sale->update($validatedData);


        $itemsData = $validatedData['items'];
        $items = [];

        foreach ($itemsData as $itemData) {
            $item = ItemSale::updateOrCreate(['id' => $itemData['id']], $itemData);
            $items[] = $item;
        }

        $sale->items()->whereNotIn('id', collect($items)->pluck('id'))->delete();

        return response()->json(['message' => 'Data Sale berhasil diperbarui!']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Sale  $sale
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $sale = Sale::find($id);

        if (!$sale) {
            return response()->json(['message' => 'Data Sale tidak ditemukan!', 'isSuccess' => false], 404);
        }


        foreach ($sale->items() as $item) {
            $item->delete();
        }

        $sale->delete();

        return response()->json(['message' => 'Data Sale berhasil dihapus!', 'isSuccess' => true], 200);
    }
}
