import React from "react";
import styled from "styled-components";

const Message = styled.section`
  .succes {
    background-color: #4bb543;
  }
  .succes-animation {
    animation: succes-pulse 2s infinite;
  }

  .custom-modal {
    position: relative;
    width: 350px;
    min-height: 250px;
    background-color: #fff;
    border-radius: 30px;
    margin: 40px 10px;
  }
  .custom-modal .content {
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 0;
  }
  .custom-modal .content .type {
    font-size: 18px;
    color: #999;
  }
  .custom-modal .content .message-type {
    font-size: 24px;
    color: #000;
  }
  .custom-modal .border-bottom {
    position: absolute;
    width: 300px;
    height: 20px;
    border-radius: 0 0 30px 30px;
    bottom: -20px;
    margin: 0 25px;
  }
  .custom-modal .icon-top {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    top: -30px;
    margin: 0 125px;
    font-size: 30px;
    color: #fff;
    line-height: 100px;
    text-align: center;
  }
  .fa {
    font-size: 3rem;
  }
  @keyframes succes-pulse {
    0% {
      box-shadow: 0px 0px 30px 20px rgba(75, 181, 67, 0.2);
    }
    50% {
      box-shadow: 0px 0px 30px 20px rgba(75, 181, 67, 0.4);
    }
    100% {
      box-shadow: 0px 0px 30px 20px rgba(75, 181, 67, 0.2);
    }
  }
  @keyframes danger-pulse {
    0% {
      box-shadow: 0px 0px 30px 20px rgba(202, 11, 0, 0.2);
    }
    50% {
      box-shadow: 0px 0px 30px 20px rgba(202, 11, 0, 0.4);
    }
    100% {
      box-shadow: 0px 0px 30px 20px rgba(202, 11, 0, 0.2);
    }
  }

  .page-wrapper {
    height: 100vh;
    background-color: #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 0;
  }

  @media only screen and (max-width: 800px) {
    .page-wrapper {
      flex-direction: column;
    }
  }
`;

export default function SuccessfulShopping() {
  return (
    <Message>
      <article className="page-wrapper">
        <div className="custom-modal">
          <div className="succes succes-animation icon-top">
            <i className="fa fa-check"></i>
          </div>
          <div className="succes border-bottom"></div>
          <div className="content">
            <h2 className="type">Appointment</h2>
            <h4 className="message-type">Successful shopping</h4>
          </div>
        </div>
      </article>
    </Message>
  );
}
