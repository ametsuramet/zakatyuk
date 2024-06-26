import styled from 'styled-components';

export const Paper = styled.div`
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  padding: 25px;
`;

export const NEXT = 'NEXT';
export const PREV = 'PREV';

export const Item = styled.div < { img: string, height?: string | null, } > `
  text-align: center;
  height:  ${(props) => `${props.height ?? '240px'}`};
  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
  object-fit: cover;
`;

export const CarouselContainer = styled.div < { sliding: boolean, width?: string | null } > `
  
  display: flex;
  transition: ${(props) => (props.sliding ? "none" : "transform 1s ease")};
  transform: ${(props) => {
    if (!props.sliding) return `translateX(calc(-${props.width ?? '100%'} - 20px))`;
    if (props.dir === PREV) return `translateX(calc(2 * (-${props.width ?? '100%'} - 20px)))`;
    return "translateX(0%)";
  }};
`;

export const Wrapper = styled.div < { sliding: boolean, width?: string | null } > ` 
  border-radius: 0.375rem;
  width:  ${(props) => (props.width ?? '100%')};
  overflow: hidden;
  box-shadow: 5px 5px 20px 7px rgba(168, 168, 168, 1);
`;

export const CarouselSlot = styled.div < { order: number, width?: string | null } > `
  border-radius: 0.375rem;
  flex: 1 0 ${(props) => (props.width ?? '100%')};
  flex-basis: ${(props) => (props.width ?? '100%')};
  margin-right: 20px;
  order: ${(props) => props.order};
`;

export const SlideButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`;

export const SlideButton = styled.button < { float: 'left' | 'right' } > `
  color: #ffffff;
  font-family: Open Sans;
  font-size: 16px;
  font-weight: 100;
  padding: 10px;
  background-color: #f66f3e;
  border: 1px solid white;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  margin-top: 20px;
  text-decoration: none;

  &:active {
    position: relative;
    top: 1px;
  }
  &:focus {
    outline: 0;
  }
`;

export const PatternBox = styled.div`
  border: 2px solid black;
  width: 60%;
  margin: 20px auto;
  padding: 30px 20px;
  white-space: pre-line;
`;

export const D = styled.span`
  padding: 3px;
`;