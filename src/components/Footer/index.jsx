import "./style.scss";

const index = () => {
   return (
      <>
         <footer className="text-center text-lg-start bg-success text-muted ">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom text-light">               <div className="me-5 d-none d-lg-block">
               <span>Get connected with us on social networks:</span>
            </div>
               <div>
                  <a href="" className="me-4 link-light">
                     <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="" className="me-4 link-light">
                     <i className="fab fa-twitter"></i>
                  </a>
                  <a href="" className="me-4 link-light">
                     <i className="fab fa-google"></i>
                  </a>
                  <a href="" className="me-4 link-light">
                     <i className="fab fa-instagram"></i>
                  </a>
                  <a href="" className="me-4 link-light">
                     <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="" className="me-4 link-light">
                     <i className="fab fa-github"></i>
                  </a>
               </div>
            </section>
            <section className="text-light">
               <div className="container text-center text-md-start mt-5">
                  <div className="row mt-3 text-light">
                     <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4 ">
                           <i className="fas fa-gem me-3 text-light"></i>
                           Company name
                        </h6>
                        <p>
                           Here you can use rows and columns to organize your footer content. Lorem ipsum
                           dolor sit amet, consectetur adipisicing elit.
                        </p>
                     </div>
                     <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4 text-light">
                           Products
                        </h6>
                        <p>
                           <a href="#!" className="text-light">Angular</a>
                        </p>
                        <p>
                           <a href="#!" className="text-light">React</a>
                        </p>
                        <p>
                           <a href="#!" className="text-light">Vue</a>
                        </p>
                        <p>
                           <a href="#!" className="text-light">Laravel</a>
                        </p>
                     </div>
                     <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4 text-light">
                           Useful links
                        </h6>
                        <p>
                           <a href="#!" className="text-light">Pricing</a>
                        </p>
                        <p>
                           <a href="#!" className="text-light">Settings</a>
                        </p>
                        <p>
                           <a href="#!" className="text-light">Orders</a>
                        </p>
                        <p>
                           <a href="#!" className="text-light">Help</a>
                        </p>
                     </div>
                     <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-light">
                        <h6 className="text-uppercase fw-bold mb-4 text-light">Contact</h6>
                        <p><i className="fas fa-home me-3 text-light"></i> New York, NY 10012, US</p>
                        <p>
                           <i className="fas fa-envelope me-3 text-light"></i>
                           info@example.com
                        </p>
                        <p><i className="fas fa-phone me-3 text-light"></i> + 01 234 567 88</p>
                        <p><i className="fas fa-print me-3 text-light"></i> + 01 234 567 89</p>
                     </div>
                  </div>
               </div>
            </section>
            <div className="text-center p-4 text-light" style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}>
               © 2021 Copyright:
               <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
         </footer>
      </>
   );
};

export default index;