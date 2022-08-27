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
                <li>
                    <span>
                        <NavLink className={activeOrNot}
                                 to={PAGES.LOGIN}>Login</NavLink>
                    </span>
                </li>
                <li>
                    <span>
                        <NavLink className={activeOrNot}
                                 to={PAGES.REGISTER}>Register</NavLink>
                    </span>
                </li>
                <li>
                    <span>
                        <NavLink className={activeOrNot}
                                 to={PAGES.SET_PASSWORD}>Set password</NavLink>
                    </span>
                </li>
                <li>
                    <span>
                        <NavLink className={activeOrNot}
                                 to={PAGES.RESET_PASSWORD}>Reset password</NavLink>
                    </span>
                </li>
                <li>
                    <span>
                        <NavLink className={activeOrNot}
                                 to={PAGES.PROFILE}>Profile</NavLink>
                    </span>
                </li>
                <li>
                    <span>
                        <NavLink className={activeOrNot}
                                 to={PAGES.TEST}>Test</NavLink>
                    </span>
                </li>
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