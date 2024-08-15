'use client';
import React, { useEffect, useRef, useState } from 'react';

function Contact() {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <section
      className="contact-crev section-padding bord-thin-bottom bord-thin-top"
      data-scroll-index="6"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="sec-head md-mb80">
              <h6 className="sub-title main-color mb-15 wow fadeInUp">
                Get In Touch
              </h6>
              <h2
                className={`text-u ls1 d-rotate ${isVisible ? 'animated' : ''}`}
                ref={domRef}
              >
                <span className="rotate-text">
                  Elevate Your Brand with Stunning 
                  <span className="fw-200">WordPress Solutions!</span>
                </span>
              </h2>
              <p className="mt-10">
                If you’re ready to take your brand to new heights or simply want to connect, I'm excited to hear from you!
              </p>
              <div className="phone fz-30 fw-600 mt-80 underline main-color">
                <a href="https://wa.me/+8801675924106" target='blank'>+1 675 924 106</a>
              </div>
              <div className="phone fz-30 fw-600 mt-30 underline main-color">
                <a href="mailto:mehedi4106@gmail.com" target='blank'>mehedi4106@gmail.com</a>
              </div>
              <ul className="rest social-text d-flex mt-40">
                <li className="mr-30">
                  <a href="https://www.facebook.com/info.azim/" target="_blank" className="hover-this">
                    <span className="hover-anim">Facebook</span>
                  </a>
                </li>
                <li className="mr-30">
                  <a href="https://x.com/hello_azim" target="_blank" className="hover-this">
                    <span className="hover-anim">Twitter</span>
                  </a>
                </li>
                <li className="mr-30">
                  <a href="https://www.linkedin.com/in/mehedi-hasan-azim-622a748a/" target="_blank" className="hover-this">
                    <span className="hover-anim">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/info.azim/" target="_blank" className="hover-this">
                    <span className="hover-anim">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="full-width">
              <form action="../components/dark/home-freelancer/send-email.php" id="contact-form" method="post">
                <div className="messages"></div>

                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required="required"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required="required"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input
                        id="form_subject"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required="required"
                      ></textarea>
                    </div>
                    <div className="mt-30">
                      <button
                        type="submit"
                        className="butn butn-full butn-bord radius-30"
                      >
                        <span className="text">Let&#39;s Talk</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;