import "../styles/ButtonList.css";
import { useDispatch, useSelector } from "react-redux";
import { setPokemonNumber } from "../store/slices/pokemonNumber";

const ButtonList = () => {
  const dispatch = useDispatch();
  const pokemonNumber = useSelector((store) => store.pokemonNumber);

  const handleChange = (e) => {
    const value = parseInt(e.target.value);

    dispatch(setPokemonNumber(value));
  };

  return (
    <div className="object-left-top">
      <div className="container">
        <div className="custom-radio">
          <input
            type="radio"
            id="radio-1"
            name="tabs"
            value={4}
            checked={pokemonNumber === 4}
            onChange={handleChange}
          />
          <label className="radio-label" htmlFor="radio-1">
            <div className="radio-circle"></div>
            <span className="radio-text">4 Pokemon</span>
          </label>

          <input
            type="radio"
            id="radio-2"
            name="tabs"
            value={8}
            checked={pokemonNumber === 8}
            onChange={handleChange}
          />
          <label className="radio-label" htmlFor="radio-2">
            <div className="radio-circle"></div>
            <span className="radio-text">8 Pokemon</span>
          </label>

          <input
            type="radio"
            id="radio-3"
            name="tabs"
            value={12}
            checked={pokemonNumber === 12}
            onChange={handleChange}
          />
          <label className="radio-label" htmlFor="radio-3">
            <div className="radio-circle"></div>
            <span className="radio-text">12 Pokemon</span>
          </label>

          <input
            type="radio"
            id="radio-4"
            name="tabs"
            value={16}
            checked={pokemonNumber === 16}
            onChange={handleChange}
          />
          <label className="radio-label" htmlFor="radio-4">
            <div className="radio-circle"></div>
            <span className="radio-text">16 Pokemon</span>
          </label>

          <input
            type="radio"
            id="radio-5"
            name="tabs"
            value={20}
            checked={pokemonNumber === 20}
            onChange={handleChange}
          />
          <label className="radio-label" htmlFor="radio-5">
            <div className="radio-circle"></div>
            <span className="radio-text">20 Pokemon</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ButtonList;
