import React from 'react';

function Brokerage() {
    return ( 
        <div className='container '>
       
        
            <div className='row p-5 mt-5 '>
            <div className='col-8 p-4 border-top'>
           
            <a href=" " style={{textDecoration:"none"}}> <h3 className='f-5'>Brokerage calculator</h3></a>
            <ul className='text-muted ' style={{lineHeight:"1.8"}}>
                <li>Calls & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                <li>Digital contract notes wiil ne sent via e-mail.</li>
                <li>Physical copiies of contract notes, if required shall be charged ₹20 per contract note.Courier charge apply.</li>
                <li>For NRI account (non-PSI),0.5% 0r ₹100 per executed order for equity (which is lower). </li>
                <li>For NRI account (PSI),0.5% 0r ₹200 per executed order for equity (which is lower). </li>
                <li> if the account is in dept balance, any order palced will be charged  ₹40 per executed order instead ₹20 per executed order.</li>
            </ul>
            </div>
            <div className='col-4 p-4'>
            <a href=" " style={{textDecoration:"none"}}><h3 className='f-5'>List of charges</h3></a>
            </div>
           
           
        </div>
    </div>
     );
}

export default Brokerage;