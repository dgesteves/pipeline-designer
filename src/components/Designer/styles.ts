import styled from "styled-components";

export const DesignerSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes.size_4};
  position: fixed;
  color: ${({ theme }) => theme.colors.white};
  border: 2px double transparent;
  background-image: linear-gradient(
      ${({ theme }) => theme.colors.background},
      ${({ theme }) => theme.colors.background}
    ),
    radial-gradient(
      circle at left top,
      ${({ theme }) => theme.colors.turquoise},
      ${({ theme }) => theme.colors.violet}
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;
  padding: ${({ theme }) => theme.sizes.size_4};
  border-radius: 8px;
`;

export const Option = styled(DesignerSection)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: static;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;

  svg {
    cursor: grab;
  }
`;
