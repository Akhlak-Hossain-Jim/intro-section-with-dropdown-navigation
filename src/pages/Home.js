import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <div className="home_left">
        <h1>Make remote work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button>Learn more</button>
        <div className="home_left__companies">
          <img
            src="/images/client-databiz.svg"
            alt="logo"
            className="home_left__companies__img"
          />
          <img
            src="/images/client-audiophile.svg"
            alt="logo"
            className="home_left__companies__img"
          />
          <img
            src="/images/client-meet.svg"
            alt="logo"
            className="home_left__companies__img"
          />
          <img
            src="/images/client-maker.svg"
            alt="logo"
            className="home_left__companies__img"
          />
        </div>
      </div>
      <div className="home_right">
        <img
          src="/images/image-hero-desktop.png"
          alt="hero section illustration"
          className="home_right__img"
        />
        <img
          src="/images/image-hero-mobile.png"
          alt="hero section illustration"
          className="home_right__img"
        />
      </div>
    </Container>
  );
}

const Container = styled.main`
  max-width: 1144px;
  margin: auto;
  padding: 48px 0px 100px;
  display: flex;
  gap: 153px;
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    gap: 50px;
  }
  .home {
    &_left {
      padding-top: 100px;
      width: min(100%, 513px);
      @media (max-width: 768px) {
        padding: 0 40px;
        text-align: center;
        width: 100%;
      }
      @media (max-width: 548px) {
        padding: 15.5px;
      }
      h1 {
        font-weight: 700;
        font-size: 80px;
        line-height: 82px;
        letter-spacing: -0.015em;
        margin: 0;
        @media (max-width: 768px) {
          font-size: 70px;
        }
        @media (max-width: 548px) {
          font-size: 36px;
          line-height: 37px;
          letter-spacing: -0.015em;
        }
      }
      p {
        padding-top: 46px;
        width: min(100%, 432px);
        font-weight: 500;
        font-size: 18px;
        line-height: 155%;
        /* or 28px */
        color: var(--gray);
        letter-spacing: 0.005em;
        @media (max-width: 768px) {
          width: 100%;
        }
        @media (max-width: 548px) {
          padding-top: 19px;
          font-size: 16px;
          line-height: 155%;
          text-align: center;
          letter-spacing: 0.005em;
        }
      }
      button {
        margin-top: 51px;
        padding: 14px 25px 12px 32px;
        background-color: var(--black);
        border: 1px solid var(--black);
        outline: none;
        color: var(--white);
        font-weight: 700;
        font-size: 18px;
        line-height: 155%;
        border-radius: 16px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &:hover {
          background-color: var(--white);
          color: var(--black);
        }
        @media (max-width: 548px) {
          margin-top: 26px;
          padding: 12px 18px 11px 24px;
        }
      }
      &__companies {
        padding-top: 108px;
        display: flex;
        gap: 40px;
        align-items: center;
        justify-content: flex-start;
        @media (max-width: 768px) {
          justify-content: center;
        }
        @media (max-width: 548px) {
          gap: 29px;
          padding-top: 48px;
        }
        &__img {
          height: auto;
          &:nth-child(1) {
            width: 114px;
          }
          &:nth-child(2) {
            width: 73px;
          }
          &:nth-child(3) {
            width: 90px;
          }
          &:nth-child(4) {
            width: 83px;
          }
          @media (max-width: 548px) {
            &:nth-child(1) {
              width: min(100%, 82px);
            }
            &:nth-child(2) {
              width: min(100%, 52px);
            }
            &:nth-child(3) {
              width: min(100%, 64px);
            }
            &:nth-child(4) {
              width: min(100%, 60px);
            }
          }
        }
      }
    }
    &_right {
      width: min(100%, 478px);
      @media (max-width: 768px) {
        width: 100%;
      }
      img {
        width: 100%;
        @media (max-width: 768px) {
          &:first-child {
            display: none;
          }
        }
        @media (min-width: 769px) {
          &:last-child {
            display: none;
          }
        }
      }
    }
  }
`;
