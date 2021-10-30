import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';


ReactDOM.render(
  <>
     <div className="contact_page">
        <div className="contact_head">
             <h2>Get In Touch</h2>
             <p>Just drop us a line. We will be glad to answer your enquries.</p>
        </div>
        
     </div>
     <div className="contact_info">
        <div className="contact">
          <h2>Send us a Message</h2>
           <input type="text" id="input" placeholder="First Name" />
           <input type="text" id="input" placeholder="Last Name" />
           <input type="email" id="input" placeholder="Email" />
           <textarea id="textarea" name="w3review" placeholder="Message"/>
           <input type="button" value="Submit" id="submit"/>
        </div>
     </div>
     <div className="address">
          <div className="row">
                <div className="col">
                  <h2>OFFICE</h2>
                  <hr/>
                  <BusinessIcon/>Corporate Office
                  
                  <p>Rahaman AJ Trade Center,
                   Ka-1/A, Jagnnathpur Bashundhara Road, Bashundhara R/A, Dhaka-1229</p>
                </div>
                <div className="col">
                  <h2>QUICK LINK</h2>
                  <hr/>
                  <h3>Home</h3>
                  <h3>Lands</h3>
                  <h3>Lands For Sale</h3>
                  <h3>Lands For Sharing Sales</h3>
                </div>
                <div className="col">
                  <h2>CONTACT</h2>
                  <hr/>
                  <LocalPhoneIcon/>09890787666,098987600
                  <br/>
                  <br/>
                  <WhatsAppIcon/>09889076890<br/> <br/>
                  <EmailIcon/>admin@gamil.com
                </div>
          </div>
     </div>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
