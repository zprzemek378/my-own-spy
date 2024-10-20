import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type ShowWordProps = {
  word: string;
};

const ShowWord = ({ word }: ShowWordProps) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/add-points");
  };

  return (
    <div className="h-dvh flex flex-col justify-between">
      <div className="flex flex-col gap-4 bg-slate-600 mx-6 mb-16 mt-24 py-10 px-4 h-full rounded-xl justify-center items-center">
        <Typography variant="h6" align="center" gutterBottom>
          Hasło:
        </Typography>

        <Typography variant="body1" align="center" gutterBottom>
          {word}
        </Typography>

        <Button onClick={handleOnClick} variant="contained" size="large">
          Dodaj punkty
        </Button>
      </div>
    </div>
  );
};

export default ShowWord;
