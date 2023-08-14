import { styled } from "styled-components";

const NumberSelector = ({ selectNum, setSelectNum, error, setError }) => {
  const arrNum = [1, 2, 3, 4, 5, 6];

  const numSelectorHandler = (value) => {
    setSelectNum(value);
    setError("");
  };
  return (
    <NumberContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNum.map((value, i) => (
          <Box
            isSelected={value === selectNum}
            key={i}
            onClick={() => numSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select a Number</p>
    </NumberContainer>
  );
};

export default NumberSelector;

const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
  .error {
    color: red;
    font-weight: 400;
  }
`;
const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;

  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
