import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <img src="img/pokemon-logo.svg" height={100} alt="pokemon logo" />
    </HeaderStyled>
  );
};

export default Header;
