import styled from 'styled-components';

const ReviewWrapper = styled.div`
  .Stars {
    --star-size: 12px;
    --star-color: #fff;
    --star-background: #00aa6c;

    background-color: rgb(249, 249, 249);
    padding: 8px;
    display: inline-block;
    font-size: var(--star-size);
    font-family: Times; // make sure ★ appears correctly
    line-height: 1;

    &::before {
      content: '⬤⬤⬤⬤⬤';
      letter-spacing: 1px;
      background: linear-gradient(90deg, var(--star-background) ${props => props.rating}%, var(--star-color) ${props => props.rating}%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: 2px #00aa6c;
    }
  }
`;

export default ReviewWrapper;
