import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type SelectNumberOfPlayersProps = {
  numberOfPlayers: number;
  setNumberOfPlayers: (number: number) => void;
  numberOfSpies: number;
  setNumberOfSpies: (number: number) => void;
};

const SelectNumberOfPlayers = ({
  numberOfPlayers,
  setNumberOfPlayers,
  numberOfSpies,
  setNumberOfSpies,
}: SelectNumberOfPlayersProps) => {
  const navigate = useNavigate();

  const playerNumberElements = Array.from({ length: 16 }).map((_, index) => {
    const number = index + 3;
    return (
      <Button
        key={number}
        onClick={() => setNumberOfPlayers(number)}
        variant={`${numberOfPlayers === number ? "contained" : "outlined"}`}
        sx={{ height: "5rem", width: "5rem" }}
      >
        {number}
      </Button>
    );
  });

  const spiesNumberElements = Array.from({ length: numberOfPlayers - 1 }).map(
    (_, index) => {
      const number = index + 1;
      return (
        <Button
          key={index}
          onClick={() => setNumberOfSpies(number)}
          variant={`${numberOfSpies === number ? "contained" : "outlined"}`}
          sx={{ height: "5rem", width: "5rem" }}
        >
          {number}
        </Button>
      );
    }
  );
  return (
    <div className="h-dvh flex flex-col justify-between">
      <div className="flex flex-col gap-6 mt-6">
        <div>
          <Typography variant="h6" align="center" gutterBottom>
            Wybierz ilość graczy:
          </Typography>
          <div className="flex justify-center flex-wrap gap-3 self-center">
            {playerNumberElements}
          </div>
        </div>

        <div>
          <Typography variant="h6" align="center" gutterBottom>
            Wybierz ilość szpiegów:
          </Typography>
          <div className="flex justify-center flex-wrap gap-3 self-center">
            {spiesNumberElements}
          </div>
        </div>
      </div>

      <div className="flex justify-center py-6">
        <Button
          onClick={() => navigate("/select-names")}
          variant="contained"
          size="large"
        >
          Kontynuuj
        </Button>
      </div>
    </div>
  );
};

export default SelectNumberOfPlayers;
