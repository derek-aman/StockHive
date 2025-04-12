import React from 'react';

function Universe() {
    return ( 
        <div className='container'>
            <div className='row text-center'>
                <h1>The Zerodha Universe</h1>
                <p className='text-center mt-5 mb-5'>
                    Extend your trading and investment experience even further with our partner platforms
                </p>
                
                <div className='col-4 p-3 mt-5'>
                    <img src="/media/images/smallcaseLogo.png" className="partner-logo" alt="Smallcase" />
                    <p className='text-small text-muted'>
                        Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.
                    </p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="/media/images/streakLogo.png" className="partner-logo" alt="Streak" />
                    <p className='text-small text-muted'>
                    Systematic trading platform
that allows you to create and backtest
strategies without coding.
                    </p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="/media/images/sensibullLogo.svg" className="partner-logo" alt="Sensibull" />
                    <p className='text-small text-muted'>
                    Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.

                    </p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="/media/images/zerodhaFundhouse.png" className="partner-logo" alt="Zerodha Fund House" />
                    <p className='text-small text-muted'>
                    Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.

                    </p>
                    
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="/media/images/goldenPiLogo.png" className="partner-logo" alt="GoldenPi" />
                    <p className='text-small text-muted'>
                    Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.
                    </p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="/media/images/dittoLogo.png" className="partner-logo" alt="Ditto" />
                    <p className='text-small text-muted'>
                    Personalized advice on life
and health insurance. No spam
and no mis-selling.
                    </p>
                </div>

                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"30%", margin:"0 auto"}}>
                    Show Now
                </button>
            </div>
        </div>
    );
}

export default Universe;
