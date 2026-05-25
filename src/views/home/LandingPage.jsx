import React from "react";
import "../../styles/content/landing.css";
import { Link } from "react-router-dom";

// Hero section background image URL (replace with your product image)
const HERO_BG =
    "https://wallpapercat.com/w/full/f/9/6/1302353-3840x2160-desktop-4k-anime-background-image.jpg";

const LandingPage = () => {
    return (
        <div className="landing-page">
            {/* Hero Section */}
            <section
                className="hero"
                style={{ backgroundImage: `url(${HERO_BG})` }}
            >
                <div className="overlay" />
                <div className="hero-content">
                    <h1 className="hero-title">
                        Transform Your Business with{" "}
                        <span className="highlight">Super SaaS</span>
                    </h1>
                    <p className="hero-subtitle">
                        All‑in‑one platform to manage, automate, and grow your
                        online presence.
                    </p>
                    <a href="#pricing" className="cta-button">
                        Get Started Free
                    </a>
                    <Link
                        to="/anime"
                        className="cta-button"
                        style={{ marginLeft: "1rem" }}
                    >
                        Explore Anime
                    </Link>
                    <Link to="/content" className="cta-button" style={{ marginLeft: "1rem" }}>View Products</Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <h2 className="section-title">Why Choose Us</h2>
                <div className="feature-grid">
                    <div className="feature-card">
                        <div className="icon">⚡</div>
                        <h3>Lightning‑fast Performance</h3>
                        <p>
                            Our infrastructure guarantees sub‑second response
                            times worldwide.
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="icon">🔒</div>
                        <h3>Enterprise‑grade Security</h3>
                        <p>
                            End‑to‑end encryption, SOC‑2 compliance, and regular
                            audits.
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="icon">💡</div>
                        <h3>Intuitive UI/UX</h3>
                        <p>
                            Designed by award‑winning designers for effortless
                            workflows.
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="icon">🚀</div>
                        <h3>Scalable Architecture</h3>
                        <p>Grow from 10 to 10 000+ users without a hitch.</p>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="pricing">
                <h2 className="section-title">Simple, Transparent Pricing</h2>
                <div className="pricing-grid">
                    <div className="pricing-card featured">
                        <h3>Starter</h3>
                        <p className="price">
                            $19<span className="period">/mo</span>
                        </p>
                        <ul className="features-list">
                            <li>Up to 5 k active users</li>
                            <li>Basic analytics</li>
                            <li>Email support</li>
                        </ul>
                        <a href="#" className="cta-button">
                            Choose Starter
                        </a>
                    </div>
                    <div className="pricing-card featured highlighted">
                        <h3>Growth</h3>
                        <p className="price">
                            $49<span className="period">/mo</span>
                        </p>
                        <ul className="features-list">
                            <li>Unlimited users</li>
                            <li>Advanced analytics</li>
                            <li>Priority support</li>
                            <li>Custom integrations</li>
                        </ul>
                        <a href="#" className="cta-button primary">
                            Best Value
                        </a>
                    </div>
                    <div className="pricing-card featured">
                        <h3>Enterprise</h3>
                        <p className="price">Contact Us</p>
                        <ul className="features-list">
                            <li>Dedicated account manager</li>
                            <li>SLAs & 99.99% uptime</li>
                            <li>On‑premise deployment</li>
                        </ul>
                        <a href="#" className="cta-button">
                            Contact Sales
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-links">
                    <a href="#">About</a>
                    <a href="#">Docs</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact</a>
                </div>
                <p>
                    © {new Date().getFullYear()} Super SaaS. All rights
                    reserved.
                </p>
            </footer>
        </div>
    );
};

export default LandingPage;
