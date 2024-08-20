import "./MainContent.css";
import img from "../images/Logo.png";

export function MainContent() {
  return (
    <main>
      <section className="section-uno">
        <div className="text-titulo">
          <h1>¡¡Autos mas destacados!!</h1>
        </div>
        <article className="section-uno-article-uno">
          <div className="content-car">
            <img src={img} alt="cualquier imagen" />
            <h2>Firts Car</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div className="content-car">
            <img src={img} alt="cualquier imagen" />
            <h2>second Car</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div className="content-car">
            <img src={img} alt="cualquier imagen" />
            <h2>Trehs Car</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </article>
        <div className="content-button-section-uno">
          <button className="button-section-uno">Ver más</button>
        </div>
      </section>

      <section className="section-dos">
        <article className="section-dos-article-dos">
          <div className="content-form">
            <form className="form-box">
              <div className="container-block form-wrapper">
                <p className="text-blk contactus-head">Get in Touch</p>
                <p className="text-blk contactus-subhead">
                  Nunc erat cursus tellus gravida.
                </p>
                <div className="responsive-container-block">
                  <div
                    className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6"
                    id="i10mt"
                  >
                    <p className="text-blk input-title">FIRTS NAME</p>
                    <input
                      className="input"
                      id="ijowk"
                      name="FirstName"
                      placeholder="Please enter first name..."
                    />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">LAST NAME</p>
                    <input
                      className="input"
                      id="indfi"
                      name="Last Name"
                      placeholder="Please enter last name..."
                    />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">EMAIL</p>
                    <input
                      className="input"
                      id="ipmgh"
                      name="Email"
                      placeholder="Please enter email..."
                    />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">PHONE NUMBER</p>
                    <input
                      className="input"
                      id="imgis"
                      name="PhoneNumber"
                      placeholder="Please enter phone number..."
                    />
                  </div>
                  <div
                    className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                    id="i634i"
                  >
                    <p className="text-blk input-title">
                      WHAT DO YOU HAVE IN MIND
                    </p>
                    <textarea
                      className="textinput"
                      id="i5vyy"
                      placeholder="Please enter query..."
                    />
                  </div>
                </div>
                <button className="submit-btn">Submit</button>
              </div>
              
            </form>
          </div>

          <div className="content-map">
            <h1 className="title-map">Mapa de ubicación</h1>
            <p className="title-map-p">
                  ¡Ven y visitanos!
                </p>
            <div className="content-frame-map">
            <iframe
              className="frame-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.5322022487295!2d-76.23748108470293!3d4.091064597338986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e39c5c6c761990d%3A0x4b91b4e5ee425e42!2sTulu%C3%A1%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1627640138378!5m2!1ses!2sco"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Mapa de Ubicación"
            ></iframe>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
