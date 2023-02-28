@extends('layouts.default')
@section('content')
<div>
   <span>판매처 관리</span>
   <button class="btn btn-primary">상점 등록</button>
</div>
<div class="store_list">
   <table class="table">
      <thead>
         <tr>
            <th>No</th>
            <th>Name</th>
            <th>TEL</th>
            <th>Email</th>
            <th>Address</th>
            <th>Upload Time</th>
         </tr>
      </thead>
      <tbody>
      @foreach($stores as $store)
      <tr>
         <td>1</td>
         <td>{{$store->store_name}}</td>
         <td>{{$store->store_telephone}}</td>
         <td>{{$store->store_email}}</td>
         <td>{{$store->store_address}}</td>
         <td>{{$store->created_at}}</td>
      </tr>
      @endforeach
      </tbody>
   </table>
</div>
@stop