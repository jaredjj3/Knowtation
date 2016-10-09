import React from 'react';
import { Link } from 'react-router';

const Privacy = () => (
  <div className="footer-content">
    <br/>
    <Link to="/library">Back to home</Link>
    <h1>Privacy Policy</h1>
    <p>
      This Privacy Policy governs the manner in which the website collects, uses, maintains and discloses information collected from users (each, a ‘User’) of the website (‘Site’). This privacy policy applies to the Site and all products and services offered by company.
    </p>
    <h2>Personal identification information</h2>
    <p>
      We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, subscribe to the newsletter, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, email address. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.
    </p>
    <h2>Sharing your personal information</h2>
    <p>
      We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.
    </p>
  </div>
);

export default Privacy;
