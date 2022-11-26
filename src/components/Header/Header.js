import './Header.scss'

export const Header = () => {

    return (
        <header className="header">
            <div className="header__container">
                <div className='header__logo'>
                    <a><img src='../public/assets/logo.png'></img></a>
                </div>

                <nav className="header__navbar">
                    <p className="header__link">Enlace 1</p>
                    <p className="header__link">Enlace 2</p>
                    <p className="header__link">Enlace 3</p>
                </nav>

                {/* <CartWidget /> */}
            </div>
        </header>
    )
}