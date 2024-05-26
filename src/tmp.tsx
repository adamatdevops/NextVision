import React from "react";

interface ImageProps {
    src: string;
    alt: string;
    className?: string;
}

/**
 * Image component
 * @param src {string} - source URL of the image
 * @param alt {string} - alternative text for the image
 * @param className {string} - CSS class for the image
 */
const Image: React.FC<ImageProps> = ({ src, alt, className }) => {
    return <img loading="lazy" src={src} alt={alt} className={className} />;
};

/**
 * Footer component
 */
const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-title">Ant Design Pro</p>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/da1ebac369d7f9b5259aa5768b83c4e888f7cf89c9ecf99a2e0417c79f551cd6?apiKey=58b1c0d7d39f443581e9f17d0f64bb4b&" alt="Ant Design Logo" className="footer-logo" />
                <p className="footer-subtitle">Ant Design</p>
            </div>
            <p className="footer-copy"> Copyright ©2020 Produced by Ant Finance Experience Technology Department </p>
            <div className="footer-icon">
                <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/60df734fb47018100e6bf7bf4bd52937b5f9cdf0f227b49ca15b1b12d36e9201?apiKey=58b1c0d7d39f443581e9f17d0f64bb4b&" alt="Decoration" className="icon-image" />
            </div>
        </footer>
    );
};

/**
 * Main component
 */
const MyComponent: React.FC = () => {
    return (
        <>
            <div className="main-container">
                <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7c183bbfbbdd493f3a94c0871f86cfac18a7e63f36a1969756ee46fe4aa1a49?apiKey=58b1c0d7d39f443581e9f17d0f64bb4b&" alt="" className="background-image" />
                <div className="icon-wrapper">
                    <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/d15094d79a7978565c3a63dc9a64b65e86c76492a7abbf8613e4b60a525c90b4?apiKey=58b1c0d7d39f443581e9f17d0f64bb4b&" alt="Icon Image" className="icon-image" />
                </div>
                <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9ab46d869a9684cf2b7125c4eb76f629cc75a0e5dbd8085db40b211fe1d824e?apiKey=58b1c0d7d39f443581e9f17d0f64bb4b&" alt="Decorative Bar" className="decorative-bar" />
                <Footer />
            </div>
            <style jsx>{`
        .main-container {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          min-height: 900px;
          align-items: flex-end;
          padding: 8px 0 27px;
        }
        .background-image {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .icon-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 100px;
          width: 36px;
          padding: 11px;
          position: relative;
        }
        @media (max-width: 991px) {
          .icon-wrapper {
            margin-right: 10px;
          }
        }
        .icon-image {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
        }
        .decorative-bar {
          aspect-ratio: 2.13;
          object-fit: cover;
          object-position: center;
          width: 100%;
          margin-top: 34px;
        }
        @media (max-width: 991px) {
          .decorative-bar {
            max-width: 100%;
          }
        }
        .footer {
          display: flex;
          flex-direction: column;
          width: 888px;
          max-width: 100%;
          gap: 20px;
          justify-content: space-between;
          margin: 64px 77px 0 0;
        }
        @media (max-width: 991px) {
          .footer {
            flex-wrap: wrap;
            margin: 40px 10px 0;
          }
        }
        .footer-content {
          display: flex;
          flex-direction: column;
          font-size: 14px;
          font-weight: 400;
          line-height: 157%;
          text-align: center;
          color: var(--character-secondary-45, rgba(0, 0, 0, 0.45));
          font-family: Roboto, sans-serif;
        }
        @media (max-width: 991px) {
          .footer-content {
            max-width: 100%;
          }
        }
        .footer-title {
          font-family: Roboto, sans-serif;
        }
        .footer-logo {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 14px;
          margin: 0 auto;
        }
        .footer-subtitle {
          font-family: Roboto, sans-serif;
        }
        .footer-copy {
          color: var(--character-disabled-placeholder-25, rgba(0, 0, 0, 0.25));
          font-family: Roboto, sans-serif;
          margin-top: 10px;
        }
        @media (max-width: 991px) {
          .footer-copy {
            max-width: 100%;
          }
        }
        .footer-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 100px;
          box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
          background-color: var(--Neutral-1, #fff);
          width: 36px;
          height: 36px;
          padding: 0 11px;
        }
        .icon-image {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 14px;
        }
      `}</style>
        </>
    );
};

export default MyComponent;