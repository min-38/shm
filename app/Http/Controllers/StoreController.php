<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRequest;
use Illuminate\Http\Request;

use App\Models\Store;

class StoreController extends Controller
{
    //

    public function getStore() {
        $stores = Store::all();
        return view('pages.store.list', compact('stores'));
    }

    public function SaveStore(StoreRequest $request) {
        $storeModel = new Store;
        $storeModel->store_name = $request->name;
        $storeModel->store_telephone = $request->telephone;
        $storeModel->store_email = $request->email;
        $storeModel->store_address = $request->address;
        $storeModel->save();
    }
}