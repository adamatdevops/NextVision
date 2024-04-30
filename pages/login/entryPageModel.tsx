/**
 * This code was generated by Builder.io.
 */
import * as React from "react";

interface LogoProps {
  logoText: string;
}

const Logo: React.FC<LogoProps> = ({ logoText }) => {
  return <div className="logo">{logoText}</div>;
};

interface WelcomeMessageProps {
  message: string;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ message }) => {
  return <div className="welcome-message">{message}</div>;
};

interface LoginRegisterButtonsProps {
  loginText: string;
  registerText: string;
}

const LoginRegisterButtons: React.FC<LoginRegisterButtonsProps> = ({
  loginText,
  registerText,
}) => {
  return (
    <div className="login-register-buttons">
      <div className="login-button">{loginText}</div>
      <div className="register-button">{registerText}</div>
    </div>
  );
};

interface LoginFormProps {
  descriptionText: string;
  usernameLabel: string;
  usernamePlaceholder: string;
  passwordLabel: string;
  passwordPlaceholder: string;
  rememberMeLabel: string;
  forgotPasswordText: string;
  loginButtonText: string;
}

const LoginForm: React.FC<LoginFormProps> = ({
  descriptionText,
  usernameLabel,
  usernamePlaceholder,
  passwordLabel,
  passwordPlaceholder,
  rememberMeLabel,
  forgotPasswordText,
  loginButtonText,
}) => {
  return (
    <form className="login-form">
      <div className="form-description">{descriptionText}</div>
      <label htmlFor="username" className="form-label">
        {usernameLabel}
      </label>
      <input
        type="text"
        id="username"
        className="form-input"
        placeholder={usernamePlaceholder}
      />
      <label htmlFor="password" className="form-label">
        {passwordLabel}
      </label>
      <div className="password-input-wrapper">
        <input
          type="password"
          id="password"
          className="form-input"
          placeholder={passwordPlaceholder}
        />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4c0d86f6395c2f82e77807a30e0718c5b6107d2c283d1a6f0aac3e92e92d251?apiKey=58b1c0d7d39f443581e9f17d0f64bb4b&" alt="" className="password-icon" />
      </div>
      <div className="remember-forgot-wrapper">
        <div className="remember-me">
          <div className="checkbox" />
          <div className="remember-me-label">{rememberMeLabel}</div>
        </div>
        <div className="forgot-password">{forgotPasswordText}</div>
      </div>
      <button type="submit" className="login-submit-button">
        {loginButtonText}
      </button>
    </form>
  );
};

function MyComponent() {
  return (
    <>
      <div className="container">
        <div className="image-wrapper">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/be16d37bd26e364da58a5965b54a0fb7ba80354d770d1eaaf56071225560ecb7?apiKey=58b1c0d7d39f443581e9f17d0f64bb4b&" alt="Decorative background" className="background-image" />
          <div className="image-overlay">
            <h2 className="overlay-title">Lorem Ipsum is simply </h2>
            <p className="overlay-description">Lorem Ipsum is simply </p>
          </div>
        </div>
        <div className="content-wrapper">
          <header className="header">
            <Logo logoText="Your Logo" />
            <WelcomeMessage message="Welcome to lorem..!" />
            <LoginRegisterButtons loginText="Login" registerText="Register" />
          </header>
          <p className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <LoginForm
            descriptionText="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            usernameLabel="User name"
            usernamePlaceholder="Enter your User name"
            passwordLabel="Password"
            passwordPlaceholder="Enter your Password"
            rememberMeLabel="Remember me"
            forgotPasswordText="Forgot Password ?"
            loginButtonText="Login"
          />
        </div>
      </div>
      <style jsx>{`
        .container {
          background-color: #fffefc;
          display: flex;
          gap: 20px;
          justify-content: space-between;
          padding: 38px 47px;
        }

        @media (max-width: 991px) {
          .container {
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }

        .image-wrapper {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          min-height: 825px;
          color: #fff;
          justify-content: center;
        }

        @media (max-width: 991px) {
          .image-wrapper {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }

        .background-image {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }

        .image-overlay {
          position: relative;
          border-radius: 29px;
          background: linear-gradient(
            180deg,
            rgba(151, 118, 68, 0.35) 0%,
            rgba(0, 0, 0, 0.35) 100%
          );
          display: flex;
          flex-direction: column;
          align-items: start;
          gap: 19px;
          padding: 69px;
        }

        @media (max-width: 991px) {
          .image-overlay {
            max-width: 100%;
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }

        .overlay-title {
          margin-top: 602px;
          font: 700 37px Poppins, sans-serif;
        }

        @media (max-width: 991px) {
          .overlay-title {
            max-width: 100%;
            margin-top: 40px;
            flex-wrap: wrap;
          }
        }

        .overlay-description {
          margin-top: 19px;
          font: 400 25px Poppins, sans-serif;
        }

        @media (max-width: 991px) {
          .overlay-description {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }

        .content-wrapper {
          align-self: start;
          display: flex;
          margin-top: 18px;
          flex-direction: column;
          gap: 18px;
          font-size: 16px;
          font-weight: 400;
        }

        @media (max-width: 991px) {
          .content-wrapper {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }

        .header {
          display: flex;
          width: 100%;
          padding-left: 53px;
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
        }

        @media (max-width: 991px) {
          .header {
            max-width: 100%;
            flex-wrap: wrap;
            padding-left: 20px;
          }
        }

        .logo {
          color: #000;
          align-self: end;
          font: 600 20px Poppins, sans-serif;
        }

        .welcome-message {
          color: #000;
          font-family: Poppins, sans-serif;
          align-self: center;
          margin: 27px 0 0 27px;
        }

        .login-register-buttons {
          border-radius: 33px;
          background-color: #f8eddd;
          align-self: start;
          display: flex;
          margin-top: 30px;
          gap: 20px;
          white-space: nowrap;
          padding: 10px 13px;
        }

        @media (max-width: 991px) {
          .login-register-buttons {
            max-width: 100%;
            flex-wrap: wrap;
            white-space: initial;
          }
        }

        .login-button {
          font-family: Poppins, sans-serif;
          border-radius: 33px;
          background-color: #9e896a;
          align-items: start;
          color: #fff;
          justify-content: center;
          padding: 12px 51px;
        }

        @media (max-width: 991px) {
          .login-button {
            white-space: initial;
            padding: 0 20px;
          }
        }

        .register-button {
          color: #9e896a;
          font-family: Poppins, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }

        .description {
          color: #5b5b5b;
          font-family: Poppins, sans-serif;
          margin-top: 58px;
        }

        @media (max-width: 991px) {
          .description {
            max-width: 100%;
            flex-wrap: wrap;
            margin-top: 40px;
          }
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-description {
          color: #5b5b5b;
          font-family: Poppins, sans-serif;
          margin-top: 58px;
        }

        @media (max-width: 991px) {
          .form-description {
            max-width: 100%;
            flex-wrap: wrap;
            margin-top: 40px;
          }
        }

        .form-label {
          color: #000;
          font-family: Poppins, sans-serif;
          margin-top: 52px;
        }

        @media (max-width: 991px) {
          .form-label {
            max-width: 100%;
            flex-wrap: wrap;
            margin-top: 40px;
          }
        }

        .form-input {
          border-radius: 40px;
          border: 1px solid rgba(158, 137, 106, 1);
          background-color: #fff;
          margin-top: 18px;
          color: #acacac;
          padding: 20px 31px;
          font: 300 15px Poppins, sans-serif;
        }

        @media (max-width: 991px) {
          .form-input {
            max-width: 100%;
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }

        .password-input-wrapper {
          border-radius: 40px;
          border: 1px solid rgba(158, 137, 106, 1);
          background-color: #fff;
          display: flex;
          margin-top: 18px;
          gap: 20px;
          font-size: 15px;
          color: #acacac;
          font-weight: 300;
          padding: 18px 80px 18px 36px;
        }

        @media (max-width: 991px) {
          .password-input-wrapper {
            max-width: 100%;
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }

        .password-icon {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 18px;
        }

        .remember-forgot-wrapper {
          display: flex;
          margin-top: 25px;
          width: 100%;
          gap: 20px;
          font-size: 12px;
          color: #000;
          font-weight: 300;
        }

        @media (max-width: 991px) {
          .remember-forgot-wrapper {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }

        .remember-me {
          display: flex;
          gap: 10px;
        }

        .checkbox {
          border: 1px solid rgba(0, 0, 0, 1);
          background-color: #fff;
          width: 15px;
          height: 15px;
        }

        .remember-me-label {
          font-family: Poppins, sans-serif;
        }

        .forgot-password {
          font-family: Poppins, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }

        .login-submit-button {
          font-family: Poppins, sans-serif;
          border-radius: 36px;
          background-color: #9e896a;
          align-self: end;
          width: 232px;
          max-width: 100%;
          color: #fff;
          white-space: nowrap;
          margin: 62px 64px 0 0;
          padding: 17px 60px;
          border: none;
          cursor: pointer;
        }

        @media (max-width: 991px) {
          .login-submit-button {
            white-space: initial;
            margin: 40px 10px 0 0;
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
}

export default MyComponent;