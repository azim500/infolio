import React, { useLayoutEffect } from 'react';
import initIsotope from '../../../common/initIsotope';

function Portfolio() {
  useLayoutEffect(() => {
    initIsotope('gallery2');
  }, []);
  return (
    <section className="work-minimal section-padding sub-bg"  data-scroll-index="3">
      <div className="container-xxl">
        <div className="row">
          <div className="filtering col-12 mb-50 text-center">
            <div className="filter">
              <span className="text">Filter By :</span>
              <span dataFilter="*" className="active">
                Show All
              </span>
              <span dataFilter=".bug">Bug Fixing</span>
              <span dataFilter=".customization">Customization</span>
              <span dataFilter=".woocommerce">WooCommerce</span>
              <span dataFilter=".design">Website Design</span>
              <span dataFilter=".maintanence">Maintanence</span>
              <span dataFilter=".seo">SEO</span>
            </div>
          </div>
        </div>
        <div className="gallery2 row sm-marg">
          <div className="col-lg-6 items design seo">
            <div className="item mt-10">
              <div className="img">
                <img src="/dark/assets/imgs/works/4/Aceworkz.jpg" alt="" />
                <div className="cont inline d-flex align-items-center">
                  <div>
                    <h5>
                      <a href="https://www.aceworkz.com/" target="_blank">Aceworkz</a>
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <p>
                      <a href="/dark/portfolio-standard">Website Design</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 items width2 woocommerce maintanence">
            <div className="item mt-10">
              <div className="img">
                <img src="/dark/assets/imgs/works/4/Amanda-Bloxsom-Photography.jpg" alt="" />
                <div className="cont">
                  <h5>
                  <a href="https://www.amandabloxsomphotography.com.au/" target="_blank">Amanda Bloxsom Photography</a>
                  </h5>
                  <p>
                    <a href="/dark/portfolio-standard">Bug Fixing</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 items width2 customization woocommerce design">
            <div className="item mt-10">
              <div className="img">
                <img src="/dark/assets/imgs/works/4/ambientec.com.jpg" alt="" />
                <div className="cont">
                  <h5>
                  <a href="ambientec.com.mx" target="_blank">Ambientec</a>
                  </h5>
                  <p>
                    <a href="/dark/portfolio-standard">Website Design</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 items width2 bug seo woocommerce">
            <div className="item mt-10">
              <div className="img">
                <img src="/dark/assets/imgs/works/4/Atunsostenible.jpg" alt="" />
                <div className="cont">
                  <h5>
                  <a href="atunsostenible.com" target="_blank">Atunsostenible</a>
                  </h5>
                  <p>
                    <a href="/dark/portfolio-standard">Bug Fixing</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 items width2 bug seo">
            <div className="item mt-10">
              <div className="img">
                <img src="/dark/assets/imgs/works/4/Bnb-Specialist.jpg" alt="" />
                <div className="cont">
                  <h5>
                  <a href="#" target="_blank">Bnb-Specialist</a>
                  </h5>
                  <p>
                    <a href="/dark/portfolio-standard">Bug Fixing</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 items width2 design seo maintanence">
            <div className="item mt-10">
              <div className="img">
                <img src="/dark/assets/imgs/works/4/Brian-+-Lindsey-Photography.jpg" alt="" />
                <div className="cont inline d-flex align-items-center">
                  <div>
                    <h5>
                    <a href="brianpluslindsey.com" target="_blank">Brian + Lindsey Photography</a>
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <p>
                      <a href="/dark/portfolio-standard">Customization</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 items width2 design maintanence">
            <div className="item mt-10">
              <div className="img">
                <img src="/dark/assets/imgs/works/4/Byråvelgeren.jpg" alt="" />
                <div className="cont inline d-flex align-items-center">
                  <div>
                    <h5>
                    <a href="www.byravelgeren.no" target="_blank">Byråvelgeren</a>
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <p>
                      <a href="/dark/portfolio-standard">Landing Page</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 items">
            <div className="item mt-10">
              <div className="img">
                <img src="/dark/assets/imgs/works/4/Ekomode.jpg" alt="" />
                <div className="cont inline d-flex align-items-center">
                  <div>
                    <h5>
                    <a href="#" target="_blank">Ekomode</a>
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <p>
                      <a href="/dark/portfolio-standard">Performance Optimization</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 items">
            <div className="item mt-10">
              <div className="img">
                <img src="/dark/assets/imgs/works/4/Lavajato-Ilimitado.jpg" alt="" />
                <div className="cont inline d-flex align-items-center">
                  <div>
                    <h5>
                    <a href="lavajatoilimitado.com.br" target="_blank">Lavajato Ilimitado</a>
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <p>
                      <a href="/dark/portfolio-standard">Website Development</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 items">
            <div className="item mt-10">
              <div className="img">
                <img src="/dark/assets/imgs/works/4/Maxim-Edu-Performance-report.jpg" alt="" />
                <div className="cont inline d-flex align-items-center">
                  <div>
                    <h5>
                    <a href="#" target="_blank">Maxim Edu</a>
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <p>
                      <a href="/dark/portfolio-standard">Performance Optimization</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 items">
            <div className="item mt-10">
              <div className="img">
                <img src="/dark/assets/imgs/works/4/Path-Finder-Crypto.jpg" alt="" />
                <div className="cont inline d-flex align-items-center">
                  <div>
                    <h5>
                    <a href="#" target="_blank">Path Finder Crypto</a>
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <p>
                      <a href="/dark/portfolio-standard">Website Development</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 items">
            <div className="item mt-10">
              <div className="img">
                <img src="/dark/assets/imgs/works/4/National-Courses-Performance-report.jpg" alt="" />
                <div className="cont inline d-flex align-items-center">
                  <div>
                    <h5>
                    <a href="nationalcourses.edu.au" target="_blank">National Courses</a>
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <p>
                      <a href="/dark/portfolio-standard">Performance Optimization</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 items">
            <div className="item mt-10">
              <div className="img">
                <img src="/dark/assets/imgs/works/4/Smart-Wealth-Bug-Fix.jpg" alt="" />
                <div className="cont inline d-flex align-items-center">
                  <div>
                    <h5>
                      <a href="#" target="_blank">Smart Wealth</a>
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <p>
                      <a href="/dark/portfolio-standard">Bug Fixing</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 items">
            <div className="item mt-10">
              <div className="img">
                <img src="/dark/assets/imgs/works/4/TTT-Jewelry.jpg" alt="" />
                <div className="cont inline d-flex align-items-center">
                  <div>
                    <h5>
                      <a href="tttjewelry.com" target="_blank">TTT Jewelry</a>
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <p>
                      <a href="/dark/portfolio-standard">Website Customization</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 items">
            <div className="item mt-10">
              <div className="img">
                <img src="/dark/assets/imgs/works/4/Vapestation.jpg" alt="" />
                <div className="cont inline d-flex align-items-center">
                  <div>
                    <h5>
                      <a href="vapestation.de" target="_blank">Vapestation</a>
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <p>
                      <a href="/dark/portfolio-standard">Website Development</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 items">
            <div className="item mt-10">
              <div className="img">
                <img src="/dark/assets/imgs/works/4/www.instyleridesga.jpg" alt="" />
                <div className="cont inline d-flex align-items-center">
                  <div>
                    <h5>
                      <a href="instyleridesga.com" target="_blank">Instyleridesga</a>
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <p>
                      <a href="/dark/portfolio-standard">Landing Page</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 items">
            <div className="item mt-10">
              <div className="img">
                <img src="/dark/assets/imgs/works/4/Bnb-Specialist-checkout-2_.jpg" alt="" />
                <div className="cont inline d-flex align-items-center">
                  <div>
                    <h5>
                      <a href="#" target="_blank">Bnb Specialist</a>
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <p>
                      <a href="/dark/portfolio-standard">Bug Fixing</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 items">
            <div className="item mt-10">
              <div className="img">
                <img src="/dark/assets/imgs/works/4/DRIP-Players-Deliver.jpg" alt="" />
                <div className="cont inline d-flex align-items-center">
                  <div>
                    <h5>
                      <a href="#" target="_blank">Drip Player</a>
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <p>
                      <a href="/dark/portfolio-standard">Website Development</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
