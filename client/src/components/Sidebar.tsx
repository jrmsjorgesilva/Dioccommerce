import React from "react";

const Sidebar = () => {
  return (
    <nav className="nav" data-expanded="true">
      <div className="nav__main">
        <div className="nav__logo">
          svg
        </div>
        <span className="nav__heading">
          <span className="nav__heading-text">Analytics</span>
        </span>
        <ul className="nav__items">
          <li className="nav__item">
            <a className="nav__item-box" href="#" title="Dashboard">
              <span className="nav__item-icon">
                svg
              </span>
              <span className="nav__item-text">Dashboard</span>
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__item-box" href="#" title="Performance">
              <span className="nav__item-icon">
                svg
              </span>
              <span className="nav__item-text">Performance</span>
            </a>
          </li>
        </ul>
        <span className="nav__heading">
          <span className="nav__heading-text">Content</span>
        </span>
        <ul className="nav__items">
          <li className="nav__item">
            <a className="nav__item-box" href="#" title="Guides">
              <span className="nav__item-icon">
                svg
              </span>
              <span className="nav__item-text">Guides</span>
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__item-box" href="#" title="Hotspots (28)">
              <span className="nav__item-icon nav__item-icon--badge">
                svg
              </span>
              <span className="nav__item-text">
                Hotspots <strong className="nav__item-badge">28</strong>
              </span>
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__item-box" href="#" title="Checklists">
              <span className="nav__item-icon">
                svg
              </span>
              <span className="nav__item-text">Checklists</span>
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__item-box" href="#" title="NPS">
              <span className="nav__item-icon">
                svg
              </span>
              <span className="nav__item-text">NPS</span>
            </a>
          </li>
        </ul>
        <span className="nav__heading">
          <span className="nav__heading-text">Customize</span>
        </span>
        <ul className="nav__items">
          <li className="nav__item">
            <a
              className="nav__item-box nav__item-box--red"
              href="#"
              title="Segments (24)"
            >
              <span className="nav__item-icon nav__item-icon--badge">
                svg
              </span>
              <span className="nav__item-text">
                Segments <strong className="nav__item-badge">24</strong>
              </span>
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__item-box" href="#" title="Themes">
              <span className="nav__item-icon">
                svg
              </span>
              <span className="nav__item-text">Themes</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="nav__bottom">
        <ul className="nav__items">
          <li className="nav__item">
            <button
              className="nav__item-box"
              type="button"
              aria-expanded="true"
              data-expand
            >
              <span className="nav__item-icon">
                svg
              </span>
              <span className="nav__item-text" data-expand-label>
                Collapse
              </span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
