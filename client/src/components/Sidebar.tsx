import React from "react";
import {
  FaAngular,
  FaCartArrowDown,
  FaHeart,
  FaJava,
  FaJs,
  FaNewspaper,
  FaPython,
  FaRobot,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="sidebar" data-expanded="true">
      <div className="sidebar__main">
        <div className="sidebar__logo">
          <FaAngular />
        </div>
        <span className="sidebar__heading">
          <span className="sidebar__heading-text">Comprar</span>
        </span>
        <ul className="sidebar__items">
          <li className="sidebar__item">
            <a className="sidebar__item-box" href="#" title="Dashboard">
              <span className="sidebar__item-icon">
                <FaNewspaper />
              </span>
              <span className="sidebar__item-text">Novidades</span>
            </a>
          </li>
          <li className="sidebar__item">
            <a className="sidebar__item-box" href="#" title="Performance">
              <span className="sidebar__item-icon">
                <FaCartArrowDown />
              </span>
              <span className="sidebar__item-text">Carrinho</span>
            </a>
          </li>
        </ul>
        <span className="sidebar__heading">
          <span className="sidebar__heading-text">Categorias</span>
        </span>
        <ul className="sidebar__items">
          <li className="sidebar__item">
            <a className="sidebar__item-box" href="#" title="Guides">
              <span className="sidebar__item-icon">
                <FaJs />
              </span>
              <span className="sidebar__item-text">Javascript</span>
            </a>
          </li>
          <li className="sidebar__item">
            <a className="sidebar__item-box" href="#" title="Hotspots (28)">
              <span className="sidebar__item-icon sidebar__item-icon--badge">
                <FaPython />
              </span>
              <span className="sidebar__item-text">
                Machine Learning{" "}
                <strong className="sidebar__item-badge">28</strong>
              </span>
            </a>
          </li>
          <li className="sidebar__item">
            <a className="sidebar__item-box" href="#" title="Checklists">
              <span className="sidebar__item-icon">
                <FaRobot />
              </span>
              <span className="sidebar__item-text">Data Science</span>
            </a>
          </li>
          <li className="sidebar__item">
            <a className="sidebar__item-box" href="#" title="NPS">
              <span className="sidebar__item-icon">
                <FaJava />
              </span>
              <span className="sidebar__item-text">Javinha</span>
            </a>
          </li>
        </ul>
        <span className="sidebar__heading">
          <span className="sidebar__heading-text">Promoções e Kits</span>
        </span>
        <ul className="sidebar__items">
          <li className="sidebar__item">
            <a
              className="sidebar__item-box sidebar__item-box--red"
              href="#"
              title="Segments (24)"
            >
              <span className="sidebar__item-icon sidebar__item-icon--badge">
                <FaHeart />
              </span>
              <span className="sidebar__item-text">
                Frontend <strong className="sidebar__item-badge">24</strong>
              </span>
            </a>
          </li>
          <li className="sidebar__item">
            <a className="sidebar__item-box" href="#" title="Themes">
              <span className="sidebar__item-icon">
                <FaHeart />
              </span>
              <span className="sidebar__item-text">Backend</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
