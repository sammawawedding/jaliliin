import React, { Fragment } from 'react';
import { GOOGLE_MAPS_LINK } from '@/constants';
import { styWrapper } from './styles';

function LocationSection() {
  return (
    <Fragment>
      <div id="fh5co-couple-story" className="fh5co-section-gray" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <h2 className="main-font">Lokasi Acara</h2>
              <p className="sub-title">
                <a
                  href={GOOGLE_MAPS_LINK}
                  title="Click untuk melihat peta di Google Maps"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#828282' }}
                >
                  <strong>Kediaman Pria</strong>
                </a>{' '}
                <br />
                Jl. Ki Mangunsarkoro No.36, Karangkidul, Kec. Semarang Tengah, <br />
                Kota Semarang, Jawa Tengah 50136
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15808.605412704075!2d111.34846927710858!3d-7.879227909174261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e799dc611f2e14b%3A0xd6763bac3efc5870!2sKapuran%2C%20Badegan%2C%20Kabupaten%20Ponorogo%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1626149008795!5m2!1sid!2sid"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: '0' }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
                title="Google Maps - Yuli & Jalil Wedding Party"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(LocationSection);
