<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\Request;

use App\Http\Conrollers\StoreController;
use App\Models\Store;
use Tests\TestCase;

class StoreControllerTest extends TestCase
{
    use DatabaseTransactions, WithFaker;

    /** @test */
    public function givenStoreRequest_thenSaveStore(): void
    {
        $response = $this->withHeaders([
            'X-Header' => 'Value',
        ])->post('/store/save', ["name" => "qqq", "telephone" => "02-525-5398", "email" => "qqq@qqq.com", "address" => "qqq"]);

        // dd($response);
    
        $response->assertStatus(200);
    }
}
