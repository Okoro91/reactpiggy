import "./Customers.css"
const Customers = () => {
  return (
      <div className='customers'>
       <div class="customers-img">
                    <img src="./customerImg.png" alt="" />
                </div>
                <div class="customers-text">
                    <h4>Join 5+ million people who save and invest with us</h4>
                    <div class="get-apps">
                        <a target="_blank" href="https://apps.apple.com/ng/app/piggyvest/id1263117994">
                            <img src="./apple-icon.svg" alt="download-apple" /> Get on iPhone</a>
                        <a class="download-btn-full" target="_blank"
                            href="https://play.google.com/store/apps/details?id=com.piggybankng.piggy">
                            <img src="./google-icon.svg" alt="download-google" /> Get on Android</a>
                    </div>
                </div>
      </div>
  )
}

export default Customers;