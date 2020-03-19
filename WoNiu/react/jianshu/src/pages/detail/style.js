import styled from 'styled-components'

export const DetailWrapper = styled.div`
  width: 620px;
  margin: 0 auto;
  padding-bottom: 100px;
  overflow: hidden;
  box-sizing: border-box;
`

export const DetailHeader = styled.div`
  margin: 50px 0 20px 0;
  font-size: 34px;
  line-height: 44px;
  color: #333;
  font-weight: bold;
`

export const DetailContent = styled.div`
  color: #404040;
  img{
    min-width: 700px;
    max-height: 1000px;
  }
  p{
    margin: 25px 0;
    color: #2f2f2f;
    font-size: 16px;
    line-height: 20px;
  }
`