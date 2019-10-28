import React from 'react';
import { createGlobalStyle } from "styled-components";
import {FormattedMessage} from "react-intl";

const GlobalStyle = createGlobalStyle`
    html,
    body {
      height: 100%;
      overflow: hidden;
      background: #f7f7f7;
    }
    
    .error-page {
      height: calc(100vh - 4rem);
      display: flex;
      align-items: center;
      justify-content: center;
      
      text-align: center;
      font-family: Arial, Helvetica, sans-serif;
    }
    
    .error-page h1 {
      font-size: 20vw;
      font-weight: 700;
      position: relative;
      margin: -8vh 0 0;
      padding: 0;
    }
    
    .error-page h1::after {
      content: attr(data-h1);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      color: transparent;
      background: rgb(113, 183, 230);
      background: linear-gradient(
        -45deg,
        rgba(113, 183, 230, 1) 0%,
        rgba(105, 166, 206, 1) 15%,
        rgba(185, 138, 204, 1) 31%,
        rgba(238, 129, 118, 1) 48%,
        rgba(185, 138, 172, 1) 65%,
        rgba(105, 166, 206, 1) 85%,
        rgba(155, 89, 182, 1) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 400%;
      text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.25);
      animation: animateTextBg 5s ease-in-out infinite;
    }
    
    .error-page h1 + p {
      color: #d6d6d6;
      font-size: 8vw;
      font-weight: 700;
      max-width: 800px;
      position: relative;
    }
    
    @keyframes animateTextBg {
      0% {
        background-position: 0 0;
      }
    
      25% {
        background-position: 100% 0;
      }
    
      50% {
        background-position: 100% 100%;
      }
    
      75% {
        background-position: 0 100%;
      }
    
      100% {
        background-position: 0 0;
      }
    }
`;

const PageNotFound = () => {
    return (
        <div>
            <GlobalStyle/>
            <section className="error-page">
                <div>
                    <h1 data-h1="404">404</h1>
                    <p><FormattedMessage id="pageNotFound" defaultMessage="PAGE NOT FOUND" /></p>
                </div>
            </section>
        </div>
    )
};

export default PageNotFound;