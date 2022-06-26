import styled from "styled-components";

export const PipelineSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Node = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.sizes.size_4};
  align-items: center;
  width: ${({ theme }) => `calc(${theme.sizes.size_9}*6)`};
  height: ${({ theme }) => `calc(${theme.sizes.size_9}*2)`};
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
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;

  svg {
    cursor: pointer;
  }
`;

export const Edge = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.sizes.size_6};
`;

export const Line = styled.div`
  height: ${({ theme }) => theme.sizes.size_1};
  width: 2px;
  background-color: ${({ theme }) => theme.colors.white};
`;
