import React from 'react';
import './Menyu.css';
import { useTranslation } from 'react-i18next';
import rasm8 from './img/img8.png'
import rasm9 from './img/img9.png'
import rasm10 from './img/img10.png'
import rasm11 from './img/img11.png'
import rasm12 from './img/img12.png'
import rasm13 from './img/img13.png'
import rasm14 from './img/img14.png'
import rasm15 from './img/img15.png'
import rasm16 from './img/img16.png'
import rasm17 from './img/img17.png'
import rasm18 from './img/img18.png'
import rasm19 from './img/img19.png'
const Menyu = () => {
    const { t } = useTranslation();
    return (
        <section className="menu-section">
            <div className="menu-container">
                <h2 className="menu-main-title">{t("Menyu.menu_title")}</h2>
                <div className="categories-filter">
                    <button className="category-btn active">{t("Menyu.cat_all")}</button>
                    <button className="category-btn">{t("Menyu.cat_shawarma")}</button>
                    <button className="category-btn">{t("Menyu.cat_turk")}</button>
                    <button className="category-btn">{t("Menyu.cat_hamburger")}</button>
                    <button className="category-btn">{t("Menyu.cat_doner")}</button>
                    <button className="category-btn">{t("Menyu.cat_shish")}</button>
                    <button className="category-btn">{t("Menyu.cat_pizza")}</button>
                    <button className="category-btn">{t("Menyu.cat_desserts")}</button>
                </div>
                <div className="menu-grid">
                    <div className="menu-card">
                        <div className="menu-img-wrapper">
                            <img src={rasm8} alt={t("Menyu.dish_name")} />
                        </div>
                        <h3 className="menu-dish-name">{t("Menyu.dish_name")}</h3>
                        <span className="menu-dish-price">$12.00</span>
                    </div>
                    <div className="menu-card">
                        <div className="menu-img-wrapper">
                            <img src={rasm9} alt={t("Menyu.dish_name")} />
                        </div>
                        <h3 className="menu-dish-name">{t("Menyu.dish_name")}</h3>
                        <span className="menu-dish-price">$12.00</span>
                    </div>
                    <div className="menu-card">
                        <div className="menu-img-wrapper">
                            <img src={rasm10} alt={t("Menyu.dish_name")} />
                        </div>
                        <h3 className="menu-dish-name">{t("Menyu.dish_name")}</h3>
                        <span className="menu-dish-price">$12.00</span>
                    </div>
                    <div className="menu-card">
                        <div className="menu-img-wrapper">
                            <img src={rasm11} alt={t("Menyu.dish_name")} />
                        </div>
                        <h3 className="menu-dish-name">{t("Menyu.dish_name")}</h3>
                        <span className="menu-dish-price">$12.00</span>
                    </div>
                    <div className="menu-card">
                        <div className="menu-img-wrapper">
                            <img src={rasm12} alt={t("Menyu.dish_name")} />
                        </div>
                        <h3 className="menu-dish-name">{t("Menyu.dish_name")}</h3>
                        <span className="menu-dish-price">$12.00</span>
                    </div>
                    <div className="menu-card">
                        <div className="menu-img-wrapper">
                            <img src={rasm13} alt={t("Menyu.dish_name")} />
                        </div>
                        <h3 className="menu-dish-name">{t("Menyu.dish_name")}</h3>
                        <span className="menu-dish-price">$12.00</span>
                    </div>
                    <div className="menu-card">
                        <div className="menu-img-wrapper">
                            <img src={rasm14} alt={t("Menyu.dish_name")} />
                        </div>
                        <h3 className="menu-dish-name">{t("Menyu.dish_name")}</h3>
                        <span className="menu-dish-price">$12.00</span>
                    </div>
                    <div className="menu-card">
                        <div className="menu-img-wrapper">
                            <img src={rasm15} alt={t("Menyu.dish_name")} />
                        </div>
                        <h3 className="menu-dish-name">{t("Menyu.dish_name")}</h3>
                        <span className="menu-dish-price">$12.00</span>
                    </div>
                    <div className="menu-card">
                        <div className="menu-img-wrapper">
                            <img src={rasm16} alt={t("Menyu.dish_name")} />
                        </div>
                        <h3 className="menu-dish-name">{t("Menyu.dish_name")}</h3>
                        <span className="menu-dish-price">$12.00</span>
                    </div>
                    <div className="menu-card">
                        <div className="menu-img-wrapper">
                            <img src={rasm17} alt={t("Menyu.dish_name")} />
                        </div>
                        <h3 className="menu-dish-name">{t("Menyu.dish_name")}</h3>
                        <span className="menu-dish-price">$12.00</span>
                    </div>
                    <div className="menu-card">
                        <div className="menu-img-wrapper">
                            <img src={rasm18} alt={t("Menyu.dish_name")} />
                        </div>
                        <h3 className="menu-dish-name">{t("Menyu.dish_name")}</h3>
                        <span className="menu-dish-price">$12.00</span>
                    </div>
                    <div className="menu-card">
                        <div className="menu-img-wrapper">
                            <img src={rasm19} alt={t("Menyu.dish_name")} />
                        </div>
                        <h3 className="menu-dish-name">{t("Menyu.dish_name")}</h3>
                        <span className="menu-dish-price">$12.00</span>
                    </div>

                </div>
            </div>
        </section>
    );
};
export default Menyu;