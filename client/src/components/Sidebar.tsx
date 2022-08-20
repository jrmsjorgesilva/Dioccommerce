import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar" data-expanded="true">
      <div className="sidebar__main">
        <div className="sidebar__logo">
          svg
        </div>
        <span className="sidebar__heading">
          <span className="sidebar__heading-text">Analytics</span>
        </span>
        <ul className="sidebar__items">
          <li className="sidebar__item">
            <a className="sidebar__item-box" href="#" title="Dashboard">
              <span className="sidebar__item-icon">
                svg
              </span>
              <span className="sidebar__item-text">Dashboard</span>
            </a>
          </li>
          <li className="sidebar__item">
            <a className="sidebar__item-box" href="#" title="Performance">
              <span className="sidebar__item-icon">
                svg
              </span>
              <span className="sidebar__item-text">Performance</span>
            </a>
          </li>
        </ul>
        <span className="sidebar__heading">
          <span className="sidebar__heading-text">Content</span>
        </span>
        <ul className="sidebar__items">
          <li className="sidebar__item">
            <a className="sidebar__item-box" href="#" title="Guides">
              <span className="sidebar__item-icon">
                svg
              </span>
              <span className="sidebar__item-text">Guides</span>
            </a>
          </li>
          <li className="sidebar__item">
            <a className="sidebar__item-box" href="#" title="Hotspots (28)">
              <span className="sidebar__item-icon sidebar__item-icon--badge">
                svg
              </span>
              <span className="sidebar__item-text">
                Hotspots <strong className="sidebar__item-badge">28</strong>
              </span>
            </a>
          </li>
          <li className="sidebar__item">
            <a className="sidebar__item-box" href="#" title="Checklists">
              <span className="sidebar__item-icon">
                svg
              </span>
              <span className="sidebar__item-text">Checklists</span>
            </a>
          </li>
          <li className="sidebar__item">
            <a className="sidebar__item-box" href="#" title="NPS">
              <span className="sidebar__item-icon">
                svg
              </span>
              <span className="sidebar__item-text">NPS</span>
            </a>
          </li>
        </ul>
        <span className="sidebar__heading">
          <span className="sidebar__heading-text">Customize</span>
        </span>
        <ul className="sidebar__items">
          <li className="sidebar__item">
            <a
              className="sidebar__item-box sidebar__item-box--red"
              href="#"
              title="Segments (24)"
            >
              <span className="sidebar__item-icon sidebar__item-icon--badge">
                svg
              </span>
              <span className="sidebar__item-text">
                Segments <strong className="sidebar__item-badge">24</strong>
              </span>
            </a>
          </li>
          <li className="sidebar__item">
            <a className="sidebar__item-box" href="#" title="Themes">
              <span className="sidebar__item-icon">
                svg
              </span>
              <span className="sidebar__item-text">Themes</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebar__bottom">
        <ul className="sidebar__items">
          <li className="sidebar__item">
            <button
              className="sidebar__item-box"
              type="button"
              aria-expanded="true"
              data-expand
            >
              <span className="sidebar__item-icon">
                svg
              </span>
              <span className="sidebar__item-text" data-expand-label>
                Collapse
              </span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
