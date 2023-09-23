import CardStyled from "./CardStyled";

interface CardProps {
  name: string;
  image: string;
}

const Card = ({ image, name }: CardProps): JSX.Element => {
  return (
    <CardStyled className="card">
      <h3 className="card__title">{name}</h3>
      <img className="card__image" src={image} alt={name} />
    </CardStyled>
  );
};

export default Card;
