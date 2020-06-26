import styled from 'styled-components';

const AppWrapper = styled.div`
  .app {
    padding: 20px;
    border: 1px solid #e0e0e0;
    background-color: #f2f2f2;
  }
  div {
    background-color: #fff;
    font-family: "Trips Sans", Arial, sans-serif;
    color: rbg(44, 44, 44);
  }
  .header-text {
    font-size: 20px;
  }
  .header {
    padding: 0.5px;
    border-bottom: 2px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    border-radius: 4px;
  }
  .modal input:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
  }
  .filter-header {
    padding-top: 6px;
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #000a12;
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
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
  .filters ul {
    box-sizing: border-box;
    diplay: block;
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 14px;
    height: auto;
    padding: 8px;
    float: left;
    width: 30%;
    list-style: none;
    text-align: left;
  }
  .filters label,
  .filters input {
    cursor: pointer;
    border-spacing: 0 12px;
  }
  .top-portion {
    padding: 8px;
    border: 1px solid #e0e0e0;
    margin: 8px;
  }
  .search {
    padding: 8px;
    border: 1px solid #e0e0e0;
    margin: 8px;
    cursor: text;
    width: auto;
    position: relative;
    vertical-align: middle;
  }
  .search div {
    padding: 5px;
    box-sizing: border-box;
    display: inline-block;
    text-align: center;
  }
  .search-icon-container {
    width: 6%;
    vertical-align: middle;
  }
  .search-bar {
    width: 90%;
  }
  .search input {
    width: 100%;
    margin-left: 6px;
    padding: 12px;
    font-size: 14px;
    border: none;
    border-radius: 2px;
  }
  .search img {
    height: 30px;
    width: 30px;
  }
  .reviews {
    clear: both;
  }
  .reviews ul {
    background-color: #f2f2f2;
    margin: 0px;
    padding: 8px;
    padding-top: 0px;
    clear: both;
  }
  .reviews li {
    padding: 8px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    border: 1px solid #e0e0e0;
    list-style: none;
    width: auto;
    background-color: #fff;
    margin-bottom: 8px;
  }
  .review-header {
    padding: 8px;
    padding-bottom: 4px;
    display: flex;
    justify-content: initial;
  }
  .review-header:before,
  .review-header:after {
    clear: both;
  }
  .review-header img {
    height: 30px;
    width: 30px;
    border-radius: 30px;
  }
  .review-header-text img {
    height: 11px;
    width: 8px;
  }
  .user-map-icon-container {
    float: left;
  }
  .user-map-icon-container:after {
    clear: both;
  }
  .review-header-text-name {
    font-size: 14px;
    color: #4a4a4a;
  }
  .review-header-text {
    margin-left: 10px;
    font-size: 12px;
    color: #767676;
  }
  .review-body {
    display: block;
    font-size: 14px;
    line-height: 20px;
    color: #4a4a4a;
    background-color: rgb(249, 249, 249);
  }
  .review-body-text {
    font-size: 16px;
    line-height: 20px;
    padding: 8px;
    background-color: rgb(249, 249, 249);
  }
  .review-date-of-stay {
    padding: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
    font-size: 14px;
    line-height: 18px;
    color: #000a12;
    background-color: rgb(249, 249, 249);
  }
  a {
    color: #4a4a4a;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export default AppWrapper;
