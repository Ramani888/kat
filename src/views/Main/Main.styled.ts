import styled from 'styled-components'

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 18rem 1fr;
  grid-template-rows: 80px 1fr 80px;
  min-height: 100vh;
`

export const Header = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  background: red;
`

export const Aside = styled.div`
  grid-area: 2 / 1 / 4 / 2;
  background: yellow;
`

export const Footer = styled.div`
  grid-area: 3 / 2 / 4 / 3;
  background: green;
`

export const SubTitle = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  background: orange;
`