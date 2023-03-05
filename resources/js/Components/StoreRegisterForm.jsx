import { forwardRef, useEffect, useRef } from 'react';
import axios from "axios";

import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react';

export default forwardRef(function StoreRegisterForm({...props }, ref) {

    const { data, setData, processing, errors, reset } = useForm({
        company: '',
        name: '',
        user_id: '',
        email: '',
        password: '',
        password_confirmation: '',
        registration: '',
        phone: '',
        address: '',
    });

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post(
            route('registerStore'),
            data,
            {headers: { 'Content-Type': 'application/json' }}
        ).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
        return false;
    }

    return (
        <>
            <Head title="판매처 회원가입" />
            <div>
                
                <InputLabel htmlFor="company" value="판매처명" />

                <TextInput
                    id="company"
                    name="company"
                    value={data.company}
                    className="mt-1 block w-full"
                    autoComplete="company"
                    isFocused={true}
                    onChange={handleOnChange}
                    required
                />

                <InputError message={errors.company} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="name" value="담당자명" />

                <TextInput
                    id="name"
                    name="name"
                    value={data.name}
                    className="mt-1 block w-full"
                    autoComplete="username"
                    onChange={handleOnChange}
                    required
                />

                <InputError message={errors.name} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="user_id" value="아이디" />

                <TextInput
                    id="user_id"
                    name="user_id"
                    value={data.user_id}
                    className="mt-1 block w-full"
                    autoComplete="user_id"
                    onChange={handleOnChange}
                    required
                />

                <InputError message={errors.user_id} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="password" value="패스워드" />

                <TextInput
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    className="mt-1 block w-full"
                    autoComplete="password"
                    onChange={handleOnChange}
                    required
                />

                <InputError message={errors.password} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="password_confirmation" value="패스워드 재확인" />

                <TextInput
                    id="password_confirmation"
                    type="password"
                    name="password_confirmation"
                    value={data.password_confirmation}
                    className="mt-1 block w-full"
                    autoComplete="password_confirmation"
                    onChange={handleOnChange}
                    required
                />

                <InputError message={errors.password_confirmation} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="registration" value="사업자등록번호" />

                <TextInput
                    id="registration"
                    name="registration"
                    value={data.registration}
                    className="mt-1 block w-full"
                    autoComplete="name"
                    isFocused={true}
                    onChange={handleOnChange}
                    required
                />

                <InputError message={errors.registration} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="phone" value="휴대폰 번호" />

                <TextInput
                    id="phone"
                    type="tel"
                    name="phone"
                    value={data.phone}
                    className="mt-1 block w-full"
                    autoComplete="username"
                    onChange={handleOnChange}
                    required
                />

                <InputError message={errors.phone} className="mt-2" />
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
                <InputLabel htmlFor="address" value="주소" />

                <TextInput
                    id="address"
                    name="address"
                    value={data.address}
                    className="mt-1 block w-full"
                    autoComplete="username"
                    onChange={handleOnChange}
                    required
                />

                <InputError message={errors.address} className="mt-2" />
            </div>
            <div className="flex items-center justify-end mt-4">
                <Link
                    href={route('login')}
                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Already registered?
                </Link>

                <PrimaryButton
                    className="ml-4"
                    onClick={onSubmitHandler}
                    disabled={processing}>
                    Register
                </PrimaryButton>
            </div>
        </>
    );
});
