import styled from '@emotion/styled'

const RotatingImage = styled.img`
  animation: rotate ${props => props.duration || 20}s infinite linear;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`

export default RotatingImage
