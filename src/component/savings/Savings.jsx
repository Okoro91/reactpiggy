import "./Savings.css";

const Savings = () => {
  return (
      <div className='savings'>
        <div class="save-text">
                    <h1>Many ways to build your savings</h1>
                    <p>Earn 12%-22% when you save with any of these PiggyVest plans.</p>
                </div>
                <div class="saving-options">
                    <div class="saving-card">
                        <div class="card-text">
                            <h1>Automated Savings</h1>
                            <p>Build a dedicated savings faster on your terms, automatically or manually.</p>
                        </div>
                        <div class="card-link">
                            <a href="">Piggybank</a>
                        </div>

                        <div class="saving-card-img">
                            <img src="./PB 18 Small.png" alt=""/>
                        </div>
                    </div>
                    <div class="saving-card">
                        <div class="card-text">
                            <h1>Fixed Savings</h1>
                            <p>Lock money away for a fixed duration without having access to it until maturity. It's
                                like
                                having
                                a custom fixed deposit.</p>
                        </div>
                        <div class="card-link">
                            <a href="">Safelock</a>
                        </div>

                        <div class="saving-card-img">
                            <img src="./SL 22 Small.png" alt=""/>
                        </div>
                    </div>
                    <div class="saving-card">
                        <div class="card-text">
                            <h1>Goal-oriented Savings</h1>
                            <p>Reach all your savings goals faster. Save towards multiple goals on your own or with a
                                group.
                            </p>
                        </div>
                        <div class="card-link">
                            <a href="">Target Savings</a>
                        </div>

                        <div class="saving-card-img">
                            <img src="./target-saving.avif" alt=""/>
                        </div>
                    </div>
                    <div class="saving-card">
                        <div class="card-text">
                            <h1>Flex Naira</h1>
                            <p>Save, transfer, manage, organise, and withdraw your money at any time.</p>
                        </div>
                        <div class="card-link">
                            <a href="">Flex Naira</a>
                        </div>

                        <div class="saving-card-img">
                            <img src="./flex-naira.avif" alt=""/>
                        </div>
                    </div>
                    <div class="saving-card">
                        <div class="card-text">
                            <h1>Flex Dollar</h1>
                            <p>Save and grow your money in foreign currencies such as Dollars.</p>
                        </div>
                        <div class="card-link">
                            <a href="">Flex Dollar</a>
                        </div>

                        <div class="saving-card-img">
                            <img src="./flexdollar-img.avif" alt=""/>
                        </div>
                    </div>
                    <div class="saving-card">
                        <div class="card-text">
                            <h1>HouseMoney</h1>
                            <p>Plan for your rent and household expenses</p>
                        </div>
                        <div class="card-link">
                            <a href="">House Money</a>
                        </div>

                        <div class="saving-card-img">
                            <img src="./house-money.png" alt=""/>
                        </div>
                    </div>
                </div>
      </div>
  )
}

export default Savings;