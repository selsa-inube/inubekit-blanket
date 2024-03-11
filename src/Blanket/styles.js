import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledBlanket = styled.div`
  position: fixed;
  display: grid;
  place-items: ${({ $isSmallScreen }) =>
    $isSmallScreen ? "center" : "initial"};
  inset: 0;
  background-color: ${({ theme }) =>
    theme?.blanket?.background?.color || inube.blanket.background.color};
  border: none;
  z-index: 1;
  overflow-y: auto;
`;

export { StyledBlanket };
