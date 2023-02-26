<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Store;

class StoreController extends Controller
{
    //
    public function SaveStore(Request $request) {
        $storeModel = new Store;
        $storeModel->store_name = $request->name;
        $storeModel->save();
    }
}
