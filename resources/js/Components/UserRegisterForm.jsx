import { forwardRef, useEffect, useRef } from 'react';

import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';

export default forwardRef(function UserRegisterForm({...props }, ref) {

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        id: '',
        email: '',
        password: '',
        password_confirmation: '',
        phone_number: '',
        address: '',
    });

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    return (
        <>
            <div>
                <InputLabel htmlFor="name" value="이름" />

                <TextInput
                    id="name"
                    name="name"
                    value={data.name}
                    className="mt-1 block w-full"
                    autoComplete="name"
                    isFocused={true}
                    onChange={handleOnChange}
                    required
                />

                <InputError message={errors.name} className="mt-2" />
            </div>
            
            <div className="mt-4">
                <InputLabel htmlFor="id" value="아이디" />

                <TextInput
                    id="id"
                    name="id"
                    value={data.id}
                    className="mt-1 block w-full"
                    autoComplete="id"
                    isFocused={true}
                    onChange={handleOnChange}
                    required
                />

                <InputError message={errors.id} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="email" value="이메일" />

                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    autoComplete="username"
                    onChange={handleOnChange}
                    required
                />

                <InputError message={errors.email} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="password" value="패스워드" />

                <TextInput
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    className="mt-1 block w-full"
                    autoComplete="new-password"
                    onChange={handleOnChange}
                    required
                />

                <InputError message={errors.password} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="password_confirmation" value="패스워드 확인" />

                <TextInput
                    id="password_confirmation"
                    type="password"
                    name="password_confirmation"
                    value={data.password_confirmation}
                    className="mt-1 block w-full"
                    autoComplete="new-password"
                    onChange={handleOnChange}
                    required
                />

                <InputError message={errors.password_confirmation} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="phone_number" value="휴대폰 번호" />

                <TextInput
                    id="phone_number"
                    type="tel"
                    name="phone_number"
                    value={data.phone_number}
                    className="mt-1 block w-full"
                    autoComplete="phone_number"
                    isFocused={true}
                    onChange={handleOnChange}
                    required
                />

                <InputError message={errors.password_confirmation} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="address" value="주소" />

                <TextInput
                    id="address"
                    name="address"
                    value={data.address}
                    className="mt-1 block w-full"
                    autoComplete="address"
                    isFocused={true}
                    onChange={handleOnChange}
                    required
                />

                <InputError message={errors.password_confirmation} className="mt-2" />
            </div>
        </>
    );
});
