import "./Hero.css"
const Hero = () => {
    return (
        <div className="hero">
        <div class="hero-text">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <p class="report"><span class="saving-box"></span>The 2024 PiggyVest Savings Report</p>
                    </a>
                    <div class="hero-text-header">
                        <h1>The Better Way to Save &amp; Invest</h1>
                        <p>Piggyvest helps over 5 million customers achieve their financial goals by helping them save
                            and
                            invest with ease.</p>
                    </div>
                    <div class="download-apps">
                        <a target="_blank" href="https://apps.apple.com/ng/app/piggyvest/id1263117994">
                            <img src="assets/whiteAppleLogo.svg" alt="download-apple" /> Get on
                            iPhone</a>

                        <a target="_blank" href="https://play.google.com/store/apps/details?id=com.piggybankng.piggy">
                            <img src="assets/google-icon.svg" alt="download-google" />Get on
                            Android</a>
                    </div>

                </div>
                <div class="hero-img">
                    <img src="./home-img.avif" alt="main home page image" class="main-img" />
                    <div class="hero-cards">
                        <img src="./card-1.png" alt="piggyvest card" class="card-1" />
                        <img src="./card-2.png" alt="piggyvest card" class="card-3" />
                        <img src="./card-6.png" alt="piggyvest card" class="card-6" />
                        <img src="./card-4.png" alt="piggyvest card" class="card-2" />
                        <img src="./card-5.png" alt="piggyvest card" class="card-4" />
                        <img src="./card-3.png" alt="piggyvest card" class="card-5" />
                    </div>
                </div>
        </div>
    )
}

export default Hero;