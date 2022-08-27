import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Login from './pages/Login/Login';
import Page404 from './pages/Page-404/Page-404';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import SetPassword from './pages/SetPassword/SetPassword';
import Test from './pages/Test/Test';

// 4. Сделать роутинг на пустые страницы (вывести название страниц):
// логинизация
// регистрация
// профайл
// 404 (можно застилизовать заранее)
// восстановление пароля
// ввод нового пароля
// тестовая - отобразить/продемонстрировать все SuperКопмоненты

export const PAGES = {
    LOGIN: '/login',
    REGISTER: '/register',
    PROFILE: '/profile',
    PAGE_404: '/page-404',
    RESET_PASSWORD: '/reset-password',
    SET_PASSWORD: '/set-password',
    TEST: '/test',
}

const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate to={PAGES.TEST}/>}/>
                <Route path={PAGES.LOGIN} element={<Login/>} />
                <Route path={PAGES.PROFILE} element={<Profile/>} />
                <Route path={PAGES.REGISTER} element={<Register/>} />
                <Route path={PAGES.RESET_PASSWORD} element={<ResetPassword/>} />
                <Route path={PAGES.SET_PASSWORD} element={<SetPassword/>} />
                <Route path={PAGES.TEST} element={<Test/>} />
                <Route path={'/*'} element={<Page404/>}/>
            </Routes>
        </div>
    );
};

export default Pages;