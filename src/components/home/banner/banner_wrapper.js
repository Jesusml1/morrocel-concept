import styled from 'styled-components'

export const BannerWrapper = styled.div`
  
  display: flex;
  background-image: url('./banner_img/banner.jpg');
  background-size: cover;
  height: 100vh;

  justify-content: center;
  align-items: center;

  @media(max-width: 768px){
    height: 70vh;
  }

`

