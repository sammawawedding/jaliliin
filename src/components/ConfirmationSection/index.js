import React from 'react';
import { string, bool } from 'prop-types';
import { Link } from 'gatsby';

import { styWrapper, styFlex } from './styles';
import Dana from '@assets/images/dana.jpeg';

function ConfirmationSection({ isInvitation, guestName }) {
  if (!isInvitation) return null;

  return (
    <div id="fh5co-started" className="fh5co-bg" css={styWrapper}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2 className="main-font">{` Apakah kamu hadir, ${guestName}?`}</h2>
            <p>
              Berdasarkan kondisi saat ini, tanpa mengurangi rasa hormat, diharapkan tetap bisa menjalin silaturahmi
              melalui media online, <br /> bukan dengan kontak fisik secara langsung. <br />
              Mohon pengertiannya.
            </p>
          </div>
        </div>
        <div className="row" css={styFlex}>
          <div className="col-md-3">
          <Link to={`https://link.dana.id/qr/jk7bba4`}>
            <img src={Dana} alt="groom" className="img-responsive" loading="lazy" />
          </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <p>
              Klik gambar <br />atau <br />scan barcode diatas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

ConfirmationSection.propTypes = {
  isInvitation: bool.isRequired,
  guestName: string.isRequired,
};

export default React.memo(ConfirmationSection);
