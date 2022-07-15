import './CatalogCard.module.css';

export default function CatalogCard () {
    return (
        <div className="container">
        <div className="card card0">
          <div className="border">
            <h2>Al Pacino</h2>
            <div className="icons">
              <i className="fa fa-codepen" aria-hidden="true" />
              <i className="fa fa-instagram" aria-hidden="true" />
              <i className="fa fa-dribbble" aria-hidden="true" />
              <i className="fa fa-twitter" aria-hidden="true" />
              <i className="fa fa-facebook" aria-hidden="true" />
            </div>
          </div>
        </div>
        <div className="card card1">
          <div className="border">
            <h2>Ben Stiller</h2>
            <div className="icons">
              <i className="fa fa-codepen" aria-hidden="true" />
              <i className="fa fa-instagram" aria-hidden="true" />
              <i className="fa fa-dribbble" aria-hidden="true" />
              <i className="fa fa-twitter" aria-hidden="true" />
              <i className="fa fa-facebook" aria-hidden="true" />
            </div>
          </div>
        </div>
        <div className="card card2">
          <div className="border">
            <h2>Patrick Stewart</h2>
            <div className="icons">
              <i className="fa fa-codepen" aria-hidden="true" />
              <i className="fa fa-instagram" aria-hidden="true" />
              <i className="fa fa-dribbble" aria-hidden="true" />
              <i className="fa fa-twitter" aria-hidden="true" />
              <i className="fa fa-facebook" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    )
}