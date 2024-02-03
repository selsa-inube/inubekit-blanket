import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledBlanket = styled.div`
  position: fixed;
  display: grid;
  place-items: ${(props) => (props.isSmallScreen ? "center" : "initial")};
  inset: 0;
  background-color: ${({ theme }) =>
    theme?.color?.surface?.blanket?.regular ||
    inube.color.surface.blanket.regular};
  border: none;
  z-index: 1;
  overflow-y: auto;
`;

export { StyledBlanket };
