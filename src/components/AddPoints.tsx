import { Button, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";

type AddPointsProps = {
  names: string[];
  indexesOfSpies: number[];
  setPoints: Dispatch<SetStateAction<number[]>>;
  setIndexesOfSpies: (indexes: number[]) => void;
};

const AddPoints = ({
  names,
  indexesOfSpies,
  setPoints,
  setIndexesOfSpies,
}: AddPointsProps) => {
  const navigate = useNavigate();

  const [selectedPlayers, setSelectedPlayers] = useState<number[]>([]);

  const handleAddPlayer = (player: number) => {
    setSelectedPlayers((prevPlayers: number[]) => {
      let newPlayers = [...prevPlayers];

      if (newPlayers.includes(player)) {
        newPlayers = newPlayers.filter((np) => np !== player);
      } else {
        newPlayers.push(player);
      }

      return newPlayers;
    });
  };

  const handleSubmit = () => {
    setPoints((prevPoints) => {
      const newPoints = prevPoints.map((playerPoints, index) =>
        selectedPlayers.includes(index) ? playerPoints + 1 : playerPoints
      );

      return newPoints;
    });
    setIndexesOfSpies([]);
    navigate("/give-roles");
  };

  const playerElements = names.map((name, index) => {
    return (
      <Button
        sx={{ marginTop: "10px" }}
        key={index}
        onClick={() => handleAddPlayer(index)}
        variant={`${
          selectedPlayers.includes(index) ? "contained" : "outlined"
        }`}
        size="large"
        color={indexesOfSpies.includes(index) ? "error" : "primary"}
      >
        {name}
      </Button>
    );
  });

  return (
    <div className="h-dvh flex flex-col justify-between">
      <div className="mb-16 mt-24">
        <Typography variant="h6" align="center" gutterBottom>
          Zaznacz osoby które dostaną punkt
        </Typography>
        <div className="flex flex-col mx-4">{playerElements}</div>
      </div>
      <div className="flex justify-center py-6">
        <Button onClick={handleSubmit} variant="contained" size="large">
          Kontynuuj
        </Button>
      </div>
    </div>
  );
};

export default AddPoints;
