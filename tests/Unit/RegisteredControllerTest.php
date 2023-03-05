<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use App\Http\Controllers\Auth\RegisteredController;
use App\Http\Requests\Auth\storeRegisterFormRequest;
use Tests\TestCase;

class RegisteredControllerTest extends TestCase
{
    use DatabaseTransactions;
    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    /** @test */
    // 판매처 회원가입 테스트
    public function givenRegisterForm_whenStoreRegister_thenInsertUser(): void
    {
        $formData = [
            'company' => 'Test Company',
            'name' => '김실장1',
            'user_id' => 'kimshiljang',
            'email' => 'test@test.com',
            'registration' => '1234',
            'phone' => '01012345678',
            'address' => '테스트 주소',
            'password' => 'passwordtest',
            'password_confirmation' => 'passwordtest'
        ];

        $response = $this->post(route("registerStore"), $formData);

        $response->assertOk();

        //Remove password and password_confirmation from array
        // array_splice($user,4, 2);

        // $this->assertDatabaseHas('users', $user);
    }
}
