import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

interface SkeletonProps {
  width?: string
  height?: string
  col?: string
}

const Skeleton = styled.div<SkeletonProps>`
  background: linear-gradient(90deg, hsl(var(--card)) 25%, hsl(var(--background)) 50%, hsl(var(--card)) 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 3s infinite;
  border-radius: 0.75rem;

  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '20px'};

  grid-column: span ${(props) => props.col} / span ${(props) => props.col};
`;

export default Skeleton;
