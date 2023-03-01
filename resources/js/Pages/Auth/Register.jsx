import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import ApplicationLogo from '@/Components/ApplicationLogo';

import PrimaryButton from '@/Components/PrimaryButton';
import UserRegisterForm from '@/Components/UserRegisterForm';
import StoreRegisterForm from '@/Components/StoreRegisterForm';
import { Head, Link } from '@inertiajs/react';

export default function Register() {
    
    const [currentTab, clickTab] = useState(0);

    const TabArr = [
        { name: '일반 고객 회원가입', content: <UserRegisterForm />, href: "" },
        { name: '판매처 회원가입', content: <StoreRegisterForm />, href: "" },
    ];

    const clickTabHandler = (index) => {
        // parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않는다
        // 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신.
        clickTab(index);
    };

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    function loadUserRegister() {
        return (
            <>
                
            </>
        )
    }

    function loadStoreRegister() {
        return (
            <>
                
            </>
        )
    }

    const container = document.getElementById('register-inp-box');
    
    const chgRegisterTab = (e, data) => {
        const active = e.target.id;
        const root = ReactDOM.createRoot(
            document.getElementById('register-inp-box')
        );

        var elems = document.querySelectorAll(".register_tab");
        [].forEach.call(elems, function(el) {
            el.classList.remove("active");
        });
        
        switch (active) {
            case "user" :
                root.render();
                break;
            case "store" :
                root.render(loadStoreRegister());
                break;
        }

        e.target.classList.add('active');
    }

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div className="mt-6">
                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500">
                    {TabArr.map((el,index) => (
                        <li key={el.name} className="tab_li">
                            <a href="#"
                                className={"register_tab inline-block p-4 text-gray-500 rounded-t-lg w-36 bg-gray-200 hover:bg-gray-300 " + (index === currentTab ? "active" : "") }
                                onClick={() => clickTabHandler(index)}>{el.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full sm:max-w-md px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                <Head title="회원가입" />
                <form onSubmit={submit}>
                    <div id="register-inp-box">
                        {TabArr[currentTab].content}
                    </div>
                    <div className="flex items-center justify-end mt-4">
                        <Link
                            href={route('login')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Already registered?
                        </Link>

                        <PrimaryButton className="ml-4" disabled={TabArr[currentTab].content.processing}>
                            Register
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
}
