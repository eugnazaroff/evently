import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import { useSelector } from 'react-redux'
const Navbar = () => {
    const isAuth = useSelector((state) => state.users.isAuth)
    const isLoading = useSelector((state) => state.users.isLoading)

    const userLinks = (
        <nav className="navbar__menu">
            <Link className="navbar__link" to="#">
                Ваш город
            </Link>
            <Link className="navbar__link" to="#">
                Добавить
            </Link>
            <Link className="navbar__link" to="#">
                Личный кабинет
            </Link>
            <Link className="navbar__link" to="#">
                Выход
            </Link>
        </nav>
    )

    const guestLinks = (
        <nav className="navbar__menu">
            <Link className="navbar__link" to="#">
                Вход
            </Link>
            <Link className="navbar__link" to="/register">
                Регистрация
            </Link>
        </nav>
    )

    return (
        <div className="navbar">
            <div className="navbar__container">
                <h1 className="navbar__logo">Evently</h1>
                {!isLoading && (isAuth ? userLinks : guestLinks)}
            </div>
        </div>
    )
}

export default Navbar
