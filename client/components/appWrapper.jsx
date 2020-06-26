import styled from 'styled-components';

const AppWrapper = styled.div`
  div {
    font-family: "Trips Sans", Arial, sans-serif;
    color: rbg(44, 44, 44);
  }
  .modal {
    float: right;
  }
  .modal input {
    background-color: #000;
    color: #fff;
    padding: 8px 16px;
    font-weight: 700;
    position: relative;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    line-height: 18px;
    border: 1px solid transparent;
  }
  .modal input:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
  }
  .header h1 {
    border-bottom: 2px solid black;
  }
  .filters:before,
  .filters:after {
    content: "";
    display: table;
  }
  .filters:after{
    clear: both;
  }
  .filters {
    clear: both;
    *zoom: 1;
  }
  .filters ul {
    box-sizing: border-box;
    diplay: block;
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 16px;
    height: auto;
    margin: 0px;
    padding: 8px;
    float: left;
    width: 30%;
  }
  .search {
    margin: 0 1.5% 24px 1.5%
    clear: both;
  }
  .reviews {
    margin: 0 1.5% 24px 1.5%
    clear: both;
  }
`;

export default AppWrapper;