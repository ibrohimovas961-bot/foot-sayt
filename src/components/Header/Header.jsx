import React from 'react'
import "./Header.css"
import { useTranslation } from "react-i18next";
import rasm1 from "./img/img1.png"
import rasm2 from "./img/img2.png"
const Header = () => {
    const { t, i18n } = useTranslation();

    const handleChangeLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
    };
  return (
    <>
    <header>
        <div className="continer">
            <div className="header-continer">
                <div className="navbar">
                    <img src={rasm1} alt="" />
                        <ul>
                              <li><a href="#">{t("header.Menu")}</a></li>
                              <li><a href="#">{t("header.News")}</a></li>
                              <li><a href="#">{t("header.About Us")}</a></li>
                              <li><a href="#">{t("header.Contact Us")}</a></li>
                              <button>{t("header.Login In")}</button>
                          </ul>
                          <select className="header-select" onChange={handleChangeLanguage} value={i18n.language} >
                              <option value="uz">UZB</option>
                              <option value="en">ENG</option>
                              <option value="ru">RUS</option>
                          </select>
                </div>

            </div>
            <main>
                <div className="main-continer">
                    <div className="main-left">
                              <h1>{t("main.subtitle")}</h1>
                              <h2>{t("main.title")}</h2>
                              <p>{t("main.description")}</p>
                              <button>{t("main.button")}</button>
                    </div>
                    <div className="main-right">
                        <img src={rasm2} alt="" />
                    </div>
                </div>
            </main>
        </div>
    </header>
    </>
  )
}

export default Header