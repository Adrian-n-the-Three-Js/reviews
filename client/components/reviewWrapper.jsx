import styled from 'styled-components';

const ReviewWrapper = styled.div`
  .Stars {
    --star-size: 12px;
    --star-color: #fff;
    --star-background: #00aa6c;

    display: inline-block;
    font-size: var(--star-size);
    font-family: Times; // make sure ★ appears correctly
    line-height: 1;

    &::before {
      content: '⚫⚫⚫⚫⚫';
      letter-spacing: 3px;
      background: linear-gradient(90deg, var(--star-background) ${props => props.rating}%, var(--star-color) ${props => props.rating}%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

export default ReviewWrapper;

//calc(var(${props => props.rating}) / 5 * 100%);
//--percent: calc(var(--number) / 5 * 100%);

// background: linear-gradient(90deg, var(--star-background) ${props => props.rating}, var(--star-color) ${props => props.rating});