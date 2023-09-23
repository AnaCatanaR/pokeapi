import styled from "styled-components";

const CardStyled = styled.article`
  display: flex;
  width: 200px;
  height: 300px;

  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid cyan;
  border-radius: 5px;
  cursor: pointer;

  .card {
    &__title {
      font-size: 1.7rem;
      margin-bottom: 25px;
    }

    &__image {
      max-height: 170px;
      max-width: 180px;
    }
  }
`;

export default CardStyled;
