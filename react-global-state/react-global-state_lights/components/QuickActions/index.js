import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  lights,
  countLightsOn,
  turnAllLightsOn,
  turnAllLightsOff,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={turnAllLightsOff}
        disabled={countLightsOn === 0}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={turnAllLightsOn}
        disabled={countLightsOn === lights.length}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
