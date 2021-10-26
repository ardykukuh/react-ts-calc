import styled from "styled-components";

interface StyledProps {
    checked: boolean;
}

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
export const CheckboxContainer = styled.div`
  //display: inline-block;
  //vertical-align: middle;
  //margin-top: 40px;
  //display: grid;
  //grid-template-rows: 1fr 1fr 1fr 1fr;
  //grid-gap: 15px;
  //justify-items: center;
  //align-items: end;
  //max-height: 400px;
  //@media (min-width: 375px) {
  //  margin: auto 0;
  //}
`;

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div<StyledProps>`
  display: inline-block;
  width: 30px;
  height: 30px;
  background: ${(props) => (props.checked ? "salmon" : "papayawhip")}
  border-radius: 3px;
  background-color: grey;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")}
  }
`;