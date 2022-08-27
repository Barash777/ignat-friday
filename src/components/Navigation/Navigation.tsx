import React from 'react';
import {NavLink} from 'react-router-dom';
import {PAGES} from '../Pages/Pages';
import css from './Navigation.module.css'


const Navigation = () => {

    const activeClassName = css.activeLink
    const usualClassName = css.usualLink

    const activeOrNot = ((props: { isActive: boolean }) => props.isActive ? activeClassName : usualClassName)


    return (
        <div>
            <ul>
                <NavLink className={activeOrNot}
                         to={PAGES.LOGIN}>
                    <li>
                        <span>Login</span>
                    </li>
                </NavLink>

                <NavLink className={activeOrNot}
                         to={PAGES.REGISTER}>
                    <li>
                        <span>Register</span>
                    </li>
                </NavLink>


                <NavLink className={activeOrNot}
                         to={PAGES.SET_PASSWORD}>
                    <li>
                        <span>Set password</span>
                    </li>
                </NavLink>


                <NavLink className={activeOrNot}
                         to={PAGES.RESET_PASSWORD}>
                    <li>
                        <span>Reset password</span>
                    </li>
                </NavLink>


                <NavLink className={activeOrNot}
                         to={PAGES.PROFILE}>
                    <li>
                        <span>Profile</span>
                    </li>
                </NavLink>

                <NavLink className={activeOrNot}
                         to={PAGES.TEST}>
                    <li>
                        <span>Test</span>
                    </li>
                </NavLink>
            </ul>

            {/*<NavLink to={PAGES.LOGIN}>Login</NavLink>
            <NavLink to={PAGES.PROFILE}>Profile</NavLink>
            <NavLink to={PAGES.REGISTER}>Register</NavLink>
            <NavLink to={PAGES.RESET_PASSWORD}>Reset Password</NavLink>
            <NavLink to={PAGES.SET_PASSWORD}>Set Password</NavLink>
            <NavLink to={PAGES.TEST}>Test</NavLink>*/}
        </div>
    );
};

export default Navigation;