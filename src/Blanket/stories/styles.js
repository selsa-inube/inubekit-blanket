import styled from "styled-components";
import { inube } from "@inubekit/foundations";

export const StyledBackdropBlanket = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

export const StyledButton = styled.button`
  cursor: pointer;
  height: 36px;
  border-radius: 8px;
  border: none;
  border-width: 1px;
  width: fit-content;
  padding-left: ${inube.spacing.s200};
  padding-right: ${inube.spacing.s200};
  background-color: ${inube.color.surface.primary.regular};
  font-family: ${inube.typography.body.large.font};
  font-size: ${inube.typography.body.large.size};
  font-weight: ${inube.typography.body.large.weight};
  line-height: ${inube.typography.body.large.lineHeight};
  color: ${inube.color.text.light.regular};

  &:hover {
    background-color: ${inube.color.surface.primary.hover};
  }
`;
