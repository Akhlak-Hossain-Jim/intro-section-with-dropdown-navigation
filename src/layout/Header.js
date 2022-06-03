import React, { useState } from "react";
import styled from "styled-components";

export default function Header() {
  const [navToggle, setNavToggle] = useState(false);
  return (
    <Container>
      <img src="/images/logo.svg" alt="logo" className="header__logo" />
      <div className={`header_nav__container ${navToggle ? "active" : ""}`}>
        <nav className={`header_nav ${navToggle ? "active" : ""}`}>
          <div className="header_nav__left">
            <div className="header_nav__link dropDown rotate">
              Features{" "}
              <img
                src="/images/icon-arrow-down.svg"
                alt=""
                className="header_nav__link_icon"
              />
              <div className="header_nav__link_down">
                <div className="header_nav__link_down__items">
                  <div className="header_nav__link_down__items_item">
                    <img
                      src="/images/icon-todo.svg"
                      alt="Todo List illustration"
                      className="header_nav__link_down__items_item__icon"
                    />
                    Todo List
                  </div>
                  <div className="header_nav__link_down__items_item">
                    <img
                      src="/images/icon-calendar.svg"
                      alt="Calender illustration"
                      className="header_nav__link_down__items_item__icon"
                    />
                    Calender
                  </div>
                  <div className="header_nav__link_down__items_item">
                    <img
                      src="/images/icon-reminders.svg"
                      alt="Reminders illustration"
                      className="header_nav__link_down__items_item__icon"
                    />
                    Reminders
                  </div>
                  <div className="header_nav__link_down__items_item">
                    <img
                      src="/images/icon-planning.svg"
                      alt="Plannings illustration"
                      className="header_nav__link_down__items_item__icon"
                    />
                    Plannings
                  </div>
                </div>
              </div>
            </div>
            <div className="header_nav__link dropDown rotate">
              Company{" "}
              <img
                src="/images/icon-arrow-down.svg"
                alt=""
                className="header_nav__link_icon"
              />
              <div className="header_nav__link_down">
                <div className="header_nav__link_down__items">
                  <div className="header_nav__link_down__items_item">
                    History
                  </div>
                  <div className="header_nav__link_down__items_item">
                    Our Team
                  </div>
                  <div className="header_nav__link_down__items_item">Blog</div>
                </div>
              </div>
            </div>
            <div className="header_nav__link">Careers</div>
            <div className="header_nav__link">About</div>
          </div>
          <div className="header_nav__right">
            <div className="header_nav__link">Login</div>
            <div className="header_nav__link button">Register</div>
          </div>
        </nav>
      </div>
      <div
        className={`header__menu_icons ${navToggle ? "active" : ""}`}
        onClick={() => setNavToggle(!navToggle)}
      >
        <img
          src="/images/icon-menu.svg"
          alt="menu icon"
          className="header__menu_icon"
        />
        <img
          src="/images/icon-close-menu.svg"
          alt="menu icon"
          className="header__menu_icon"
        />
      </div>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 62px;
  padding: 21px 40px;
  z-index: 100;
  .header {
    &__logo {
      width: min(84px, 100%);
    }
    &__menu_icons {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 200;
      img {
        &:first-child {
          display: inline-block;
        }
        &:last-child {
          display: none;
        }
      }
      &.active {
        img {
          &:first-child {
            display: none;
          }
          &:last-child {
            display: inline-block;
          }
        }
      }
      @media (min-width: 769px) {
        display: none;
      }
    }
    &_nav__container {
      flex: 1;
      @media (max-width: 768px) {
        display: none;
        &.active {
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          display: flex;
          width: 100vw;
          justify-content: flex-end;
          background-color: rgba(0, 0, 0, 0.7);
        }
      }
    }
    &_nav {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 38px;
      justify-content: space-between;
      &__link {
        display: flex;
        align-items: center;
        gap: 7px;
        font-weight: 500;
        font-size: 14px;
        line-height: 14px;
        letter-spacing: 0.01em;
        color: var(--gray);
        cursor: pointer;
        &:hover {
          color: var(--black);
        }
        &.rotate {
          .header_nav__link_icon {
            transition: all 0.3s ease-in-out;
          }
          &:hover {
            .header_nav__link_icon {
              transform: rotate(180deg);
            }
          }
        }
        &.dropDown {
          position: relative;
          .header_nav__link_down {
            display: none;
          }
          &:hover {
            .header_nav__link_down {
              position: absolute;
              top: 100%;
              right: 0;
              padding-top: 20px;
              display: flex;
              z-index: 100;
              &__items {
                background-color: #fff;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                border-radius: 12px;
                padding: 14px;
                display: flex;
                flex-direction: column;
                gap: 14px;
                width: max-content;
                &_item {
                  font-size: 14px;
                  display: flex;
                  align-items: center;
                  gap: 7px;
                  color: var(--gray);
                  &:hover {
                    color: var(--black);
                  }
                }
              }
            }
          }
        }
        &.button {
          border: 1.5px solid var(--gray);
          border-radius: 16px;
          padding: 14px 23px 12px 21px;
          &:hover {
            border-color: var(--black);
          }
        }
      }
      &__left {
        display: flex;
        align-items: center;
        gap: 38px;
      }
      &__right {
        display: flex;
        align-items: center;
        gap: 40px;
      }
      @media (max-width: 768px) {
        display: none;
        &.active {
          position: fixed;
          top: 0;
          right: 0;
          display: flex;
          flex-direction: column;
          margin-left: auto;
          width: min(100%, 241px);
          height: 100vh;
          padding: 80px 28px;
          background-color: #fff;
          z-index: 90;
          .header_nav__left {
            flex-direction: column;
            width: 100%;
            align-items: flex-start;
          }
          .header_nav__right {
            flex-direction: column;
            width: 100%;
          }
          .header_nav__link {
            &.button {
              width: 100%;
              text-align: center;
              align-items: center;
              justify-content: center;
            }
            &.dropDown {
              flex-wrap: wrap;
              &:hover {
                .header_nav__link_down {
                  position: relative;
                  padding-top: 0px;
                  padding-left: 0;
                  display: flex;
                  &__items {
                    background-color: transparent;
                    box-shadow: none;
                    padding-bottom: 0;
                    min-width: 100px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
