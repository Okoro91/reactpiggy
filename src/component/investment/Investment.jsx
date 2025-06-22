import "./Investment.css"
const Investment = () => {
  return (
      <div className='investment'>
        <div class="invest-text">
                    <h1>Diverse ways to Invest</h1>
                    <p>Grow your money and invest for your future confidently.</p>
                </div>
                <div class="invest-card">
                    <div class="card-text">
                        <div class="text">
                            <h1>
                                Earn Up to 35% returns
                            </h1>
                            <p>
                                Invest securely and confidently on the go. Grow your money confidently by investing in
                                pre-vetted investment opportunities.
                            </p>
                        </div>
                        <div class="card-link">
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                Learn about Investments</a>
                        </div>
                    </div>
                    <div class="invest-card-img">
                        <img src="./Invest.avif" alt="" />
                    </div>
                </div>
      </div>
  )
}

export default Investment;