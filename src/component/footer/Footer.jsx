import "./Footer.css";
const Footer = () => {
  return (
      <div className='footer'>
        <footer>
            <div class="top-links">
                <div class="footer-logo">
                    <img src="./logo (1).svg" alt="PiggyVest Logo" width="172.45" height="32" />
                    <img src="./compliance-378fe121550ceac55d0eeb8c5edac2e7.avif" alt="compliance Logo"
                        width="130" />
                </div>
                <div class="products">
                    <p>Products</p>
                    <ul>
                        <li> <a href="">Piggybank</a></li>
                        <li><a href="">Invest</a></li>
                        <li><a href="">Safelock</a></li>
                        <li><a href="">Target Savings</a></li>
                        <li><a href="">Flex Naira</a></li>
                        <li><a href="">Flex Dollar</a></li>
                    </ul>
                </div>
                <div class="company">
                    <p>Company</p>
                    <ul>
                        <li><a href="">About</a></li>
                        <li><a href="">FAQs</a></li>
                        <li><a target="_blank" href="https://blog.piggyvest.com/">Blog</a></li>
                    </ul>
                </div>
                <div class="legal">
                    <p>Legal</p>
                    <ul>
                        <li><a href="">Terms</a></li>
                        <li><a href="">Privacy</a></li>
                        <li><a href="">Security</a></li>
                    </ul>
                </div>
                <div class="socials">
                    <ul>
                        <li>
                            <a target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/PiggyBankNG/">
                                <img src="./facebook.svg" alt="Facebook" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/piggybankng/">
                                <img src="./intagram.svg" alt="Instagram" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer noopener" href="https://mobile.twitter.com/PiggyBankNG/">
                                <img src="./twitter.svg" alt="Twitter" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer noopener"
                                href="https://www.tiktok.com/@piggybank_ng?_t=8cwbLU1TTcs&amp;_r=1">
                                <img src="./tiktok.svg" alt="Tiktok" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer noopener" href="https://www.youtube.com/@PiggyVest">
                                <img src="./youtube.svg" alt="Youtube" />
                            </a>
                        </li>
                    </ul>
                    <a class="text-right" href="https://goo.gl/maps/NpjEYTjJuzxCUM9X7">Tesmot house, Abdulrahman
                        Okene
                        close, Victoria Island, Lagos, Nigeria.</a>
                    <a class="text-right" href="mailto:contact@piggyvest.com">contact@piggyvest.com</a>
                    <a class="text-right" href="tel:+2347009339339">+234 700 933 9339</a>
                </div>
            </div>
            <div class="about">
                <p class="about__body">
                    Piggyvest (formerly piggybank.ng) is the leading online savings &amp; investing platform in
                    Nigeria.
                    For over 9 years, our customers have saved and invested billions of Naira that they would
                    normally
                    be tempted to spend.</p>
                <p class="about__sec-body"> PV Capital Limited is a fund manager duly licensed by the Securities and
                    Exchange Commission
                    (SEC) of Nigeria. </p>
                <p class="primary">2016 - 2025 PiggyTech Global Limited - RC 1405222</p>
            </div>
        </footer>
        </div>
  )
}

export default Footer;
