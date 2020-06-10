import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #01010122;

  h1 {
    font-size: 3.2rem;
  }
  img {
    width: 2.6rem;
  }

  select {
    padding: 8px 16px;
    border: 1px solid #01010122;
    border-radius: 8px;
    background: transparent;
    font-weight: bold;
    color: #616161;
  }
`
