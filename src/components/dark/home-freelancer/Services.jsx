import React from 'react';

function Services() {
  return (
    <section className="portfolio-tab crev section-padding"  data-scroll-index="1">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">My Expertise</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600 text-u ls1">
              What You Can <span className="fw-200">Expect from Me </span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 d-flex align-items-center justify-content-center">
            <div className="glry-img">
              <div
                id="tab-1"
                className="bg-img tab-img current"
                data-background="/dark/assets/imgs/intro/CTD.jpg"
              ></div>
              <div
                id="tab-2"
                className="bg-img tab-img"
                data-background="/dark/assets/imgs/intro/Maintenance-and-Updates.jpg"
              ></div>
              <div
                id="tab-3"
                className="bg-img tab-img"
                data-background="/dark/assets/imgs/intro/Troubleshooting-and-Support.jpg"
              ></div>
              <div
                id="tab-4"
                className="bg-img tab-img"
                data-background="/dark/assets/imgs/intro/E-commerce-Solutions.jpg"
              ></div>
              <div
                id="tab-5"
                className="bg-img tab-img"
                data-background="/dark/assets/imgs/intro/Performance-Optimization.jpg"
              ></div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 content">
            <div className="cluom mb-30 current" data-tab="tab-1">
              <div className="info">
                <h6 className="sub-title opacity-7">Development</h6>
                <h4>Custom Theme Development</h4>
              </div>
              <div className="img">
                <img src="/dark/assets/imgs/intro/CTD.jpg" alt="" />
              </div>
{/*         <div className="more text-u ls1 fz-12">
                <a href="/dark/page-services-details">
                  View Details <i className="ml-15 ti-arrow-top-right"></i>
                </a>
              </div>			*/}
            </div>
            <div className="cluom mb-30" data-tab="tab-2">
              <div className="info">
                <h6 className="sub-title opacity-7">Maintenance</h6>
                <h4>Maintenance and Updates</h4>
              </div>
              <div className="img">
                <img src="/dark/assets/imgs/intro/Maintenance-and-Updates.jpg" alt="" />
              </div>
{/*         <div className="more text-u ls1 fz-12">
                <a href="/dark/page-services-details">
                  View Details <i className="ml-15 ti-arrow-top-right"></i>
                </a>
			</div>	*/}
            </div>
            <div className="cluom mb-30" data-tab="tab-3">
              <div className="info">
                <h6 className="sub-title opacity-7">Bug Fixing</h6>
                <h4>Troubleshooting and Support</h4>
              </div>
              <div className="img">
                <img src="/dark/assets/imgs/intro/Troubleshooting-and-Support.jpg" alt="" />
              </div>
{/*           <div className="more text-u ls1 fz-12">
                <a href="/dark/page-services-details">
                  View Details <i className="ml-15 ti-arrow-top-right"></i>
                </a>
              </div>		*/}
            </div>
            <div className="cluom mb-30" data-tab="tab-4">
              <div className="info">
                <h6 className="sub-title opacity-7">WooCommerce</h6>
                <h4>E-commerce Solutions</h4>
              </div>
              <div className="img">
                <img src="/dark/assets/imgs/intro/E-commerce-Solutions.jpg" alt="" />
              </div>
{/*               <div className="more text-u ls1 fz-12">
                <a href="/dark/page-services-details">
                  View Details <i className="ml-15 ti-arrow-top-right"></i>
                </a>
              </div> 			*/}
            </div>
            <div className="cluom" data-tab="tab-5">
              <div className="info">
                <h6 className="sub-title opacity-7">Optimization</h6>
                <h4>Performance Optimization</h4>
              </div>
              <div className="img">
                <img src="/dark/assets/imgs/intro/Performance-Optimization.jpg" alt="" />
              </div>
{/*           <div className="more text-u ls1 fz-12">
                <a href="/dark/page-services-details">
                  View Details <i className="ml-15 ti-arrow-top-right"></i>
                </a>
              </div> 			*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;