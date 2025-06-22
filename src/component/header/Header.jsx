import "./Header.css"
const Header = () => {
    return (
        <div className="header">
                <header>
            <div class="header-container">
                <div class="logo">
                    <img src="./logo.svg" alt="logo" />
                </div>
                <div class="navbar">
                    <nav>
                        <ul>
                            <li><a href="#">Save</a></li>
                            <li><a href="#">Invest</a></li>
                            <li><a href="#">Stories</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Resources</a></li>
                        </ul>
                    </nav>
                    <div class="user-accounts">
                        <ul>
                            <li class="sign-in-btn"><a href="#">Sign-in</a></li>
                            <li class="create-btn"><a href="#">Create Free Account</a></li>
                        </ul>
                    </div>
                </div>
                <div class="hamburger"><i class="fa-solid fa-bars"></i></div>
            </div>

        </header>
        </div>
    )
}

export default Header;