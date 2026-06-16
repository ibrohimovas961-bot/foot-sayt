import React from 'react';
import './Hero.css';
import { useTranslation } from 'react-i18next';
import rasm3 from './img/img3.png';
import rasm4 from './img/img4.png';
import rasm5 from './img/img5.png';
import rasm6 from './img/img6.png';
import rasm7 from './img/img7.png'
const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="popular-section">
            <div className="dishes-container">
                <div className="dishes-top">
                    <h2 className="dishes-main-title">{t("hero.title")}</h2>
                    <div className="slider-arrows">
                        <button className="arrow-btn prev"></button>
                        <button className="arrow-btn next"></button>
                    </div>
                </div>
                <div className="dishes-grid">
                    <div className="dish-card">
                        <div className="dish-img-wrapper">
                            <img src={rasm3} alt={t("hero.kebab")} />
                        </div>
                        <h3 className="dish-name">{t("hero.kebab")}</h3>
                        <div className="dish-rating">
                            <img src={rasm7} alt="" />
                        </div>
                        <span className="dish-price">$12.00</span>
                    </div>
                    <div className="dish-card">
                        <div className="dish-img-wrapper">
                            <img src={rasm4} alt={t("hero.pizza")} />
                        </div>
                        <h3 className="dish-name">{t("hero.pizza")}</h3>
                        <div className="dish-rating">
                            <img src={rasm7} alt="" />
                        </div>
                        <span className="dish-price">$12.00</span>
                    </div>
                    <div className="dish-card">
                        <div className="dish-img-wrapper">
                            <img src={rasm5} alt={t("hero.burger")} />
                        </div>
                        <h3 className="dish-name">{t("hero.burger")}</h3>
                        <div className="dish-rating">
                            <img src={rasm7} alt="" />
                        </div>
                        <span className="dish-price">$12.00</span>
                    </div>
                    <div className="dish-card">
                        <div className="dish-img-wrapper">
                            <img src={rasm6} alt={t("hero.french_fries")} />
                        </div>
                        <h3 className="dish-name">{t("hero.french_fries")}</h3>
                        <div className="dish-rating">
                            <img src={rasm7} alt="" />
                        </div>
                        <span className="dish-price">$12.00</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;