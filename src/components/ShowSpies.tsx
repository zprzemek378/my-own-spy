import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type ShowSpiesProps = {
  names: string[];
  spies: number[];
};

const ShowSpies = ({ names, spies }: ShowSpiesProps) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/show-word");
  };
  return (
    <div className="h-dvh flex flex-col justify-between">
      <div className="flex flex-col gap-4 bg-slate-600 mx-6 mb-16 mt-24 py-10 px-4 h-full rounded-xl justify-center items-center">
        <Typography variant="h6" align="center" gutterBottom>
          {spies.length > 1 ? "Szpiegami są:" : "Szpiegiem jest"}
        </Typography>

        <Typography variant="body1" align="center" gutterBottom>
          {spies.map((i, index) => (
            <div key={index}>{names[i]}</div>
          ))}
        </Typography>

        <Button onClick={handleOnClick} variant="contained" size="large">
          Pokaż hasło
        </Button>
      </div>
    </div>
  );
};

export default ShowSpies;
