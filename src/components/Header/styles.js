import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #01010122;

  h1 {
    font-size: 3.2rem;

    @media (max-width: 460px) {
      font-size: 2.2rem;
    }
  }
  img {
    width: 2.2rem;

    @media (max-width: 460px) {
      width: 1.6rem;
    }
  }

  select {
    width: 120px;
    padding: 8px 16px;
    border: 1px solid #01010122;
    border-radius: 8px;
    background: transparent;
    font-weight: bold;
    color: #616161;
    font-size: 1.5rem;
  }
`
