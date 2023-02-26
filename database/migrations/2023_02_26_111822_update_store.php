<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //
        Schema::table('stores', function (Blueprint $table) {
            $table->renameColumn('telephone', 'store_telephone');
            $table->renameColumn('email', 'store_email');
            $table->renameColumn('address', 'store_address');
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        Schema::table('stores', function (Blueprint $table) {
            $table->renameColumn('store_telephone', 'telephone');
            $table->renameColumn('store_email', 'email');
            $table->renameColumn('store_address','address');
        });
    }
};
