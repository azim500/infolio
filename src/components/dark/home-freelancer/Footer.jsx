import React from 'react';

function Footer() {
  return (
    <footer className="min-footer sub-bg pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 md-mb15">
            <div className="logo icon-img-100">
              <a href="http://localhost:3000/"><img src="/dark/assets/imgs/logo-light.png" alt="" /></a>
            </div>
          </div>
          <div className="col-lg-8 order-md-6">
            <div className="text-right">
              <p className="fz-14">
                © 2024 Mehedi Hasan Azim. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
