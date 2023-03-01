<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'store_id',
        'name',
        'password',
        'registration',
        'telephone',
        'email',
        'address',
        'created_at',
    ];

    protected $hidden = [
        'password',
        'registration',
    ];
}