import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type SelectNamesProps = {
  numberOfPlayers: number;
  names: string[];
  points: number[];
  setNames: (names: string[]) => void;
  setPoints: (points: number[]) => void;
  setShowResultsBar: (visibility: boolean) => void;
};

const SelectNames = ({
  numberOfPlayers,
  names,
  setNames,
  points,
  setPoints,
  setShowResultsBar,
}: SelectNamesProps) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/give-roles");
    setShowResultsBar(true);
  };

  const handleSetNames = (name: string, index: number) => {
    const newNames = [...names];
    newNames[index] = name;
    setNames(newNames);

    const newPoints = [...points];
    newPoints[index] = 0;
    setPoints(newPoints);
  };

  const playerElements = Array.from({ length: numberOfPlayers }).map(
    (_, index) => {
      const number = index + 1;
      return (
        <TextField
          key={number}
          label={`Gracz ${number}`}
          variant="outlined"
          placeholder="Wprowadź imię"
          onChange={(e) => handleSetNames(e.currentTarget.value, index)}
          value={names[index]}
          required
        />
      );
    }
  );

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className="flex flex-col gap-6 mt-6">
        <Typography variant="h6" align="center" gutterBottom>
          Wybierz imiona graczy:
        </Typography>

        <div className="flex flex-col gap-4 mx-4">{playerElements}</div>
      </div>

      <div className="flex justify-center py-6">
        <Button type="submit" variant="contained" size="large">
          Kontynuuj
        </Button>
      </div>
    </Box>
  );
};

export default SelectNames;
