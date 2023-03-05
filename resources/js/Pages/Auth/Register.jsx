import { useEffect, useState } from 'react';

import ApplicationLogo from '@/Components/ApplicationLogo';

import UserRegisterForm from '@/Components/UserRegisterForm';
import StoreRegisterForm from '@/Components/StoreRegisterForm';

import { Link, useForm } from '@inertiajs/react';

export default function Register() {
    
    const [currentTab, clickTab] = useState(0);

    const TabArr = [
        { name: '일반 고객 회원가입', content: <UserRegisterForm />},
        { name: '판매처 회원가입', content: <StoreRegisterForm />},
    ];

    const clickTabHandler = (index) => {
        clickTab(index);
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
                <form>
                    <div id="register-inp-box">
                        {TabArr[currentTab].content}
                    </div>
                </form>
            </div>
        </div>
    );
}
