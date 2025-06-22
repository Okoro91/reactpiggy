import "./Security.css"
const Security = () => {
  return (
      <div className='security'>
       <div class="lock-img">
                    <img src="./securitylock.svg" alt="" />
                </div>
                <div class="content">
                    <h4>
                        Your security is our priority
                    </h4>
                    <p>
                        PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security
                        encryption to ensure that your information is comepletely protected from fraud.
                    </p>
                    <div class="more">
                        <img src="./arrow-turn-down-right-svgrepo-com.svg" alt="" />
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            More on our security measures
                        </a>
                    </div>
                </div>
      </div>
  )
}

export default Security;