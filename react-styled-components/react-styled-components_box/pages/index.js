import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "../components/BoxWithStyledComponents/BoxWithStyledComponents.js";
import styled from "styled-components";

const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function HomePage() {
  return (
    <BoxContainer>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents isBlack />
    </BoxContainer>
  );
}
