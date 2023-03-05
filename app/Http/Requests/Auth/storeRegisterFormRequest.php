<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

use App\Models\User;
use App\Models\Store;

class storeRegisterFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'company' => ['required', 'string'],
            'name' => ['required', 'string'],
            'user_id' => ['required', 'string', 'unique:' . User::class],
            'password' => ['required', 'string', 'confirmed', 'min:8'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:' . User::class],
            'registration' => ['required', 'string'],
            'phone' => ['required', 'numeric'],
            'address' => ['required', 'string'],
        ];
    }

    // 오류 메시지 커스터마이징
    public function messages()
    {
        return [
            'name.required' => '사용자명을 입력해주세요.',
            'user_id.required' => '사용자 아이디를 입력해주세요.',
        ];
    }
}
