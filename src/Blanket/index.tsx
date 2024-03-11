import { useMediaQuery } from "@inubekit/hooks";
import { Stack } from "@inubekit/stack";
import { StyledBlanket } from "./styles";

interface IBlanketProps {
  children?: React.ReactNode;
}

const Blanket = (props: IBlanketProps) => {
  const { children } = props;
  const isSmallScreen = useMediaQuery("(max-width: 580px)");

  return (
    <StyledBlanket $isSmallScreen={!isSmallScreen}>
      <Stack alignItems="center" justifyContent="center">
        {children}
      </Stack>
    </StyledBlanket>
  );
};

export type { IBlanketProps };
export { Blanket };
