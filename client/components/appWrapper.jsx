import styled from 'styled-components';

const AppWrapper = styled.div`
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
    color: rbg(44, 44, 44);
    diplay: block;
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;
    font-family: "Trips Sans", Arial, sans-serif;
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