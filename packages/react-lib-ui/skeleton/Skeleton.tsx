import styled from "styled-components";

const Skeleton = styled.div<{ loading?: boolean }>`
  position: relative;
  overflow: hidden;
  background-color: ${({ loading }) => (loading ? "#dddbdd" : "transparent")};
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.3) 40%,
      rgba(255, 255, 255, 0.3) 60%,
      rgba(255, 255, 255, 0)
    );
    animation: ${({ loading }) => (loading ? "shimmer 2s infinite" : "none")};
    content: "";
  }
  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
  > * {
    visibility: ${({ loading }) => (loading ? "hidden" : "visible")};
  }
`;

export default Skeleton;
