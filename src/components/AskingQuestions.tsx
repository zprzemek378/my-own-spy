import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useNavigate } from "react-router-dom";

const AskingQuestions = () => {
  const [finished, setFinished] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/show-spies");
  };

  return (
    <div className="h-dvh flex flex-col justify-between">
      <div className="flex flex-col gap-14 bg-slate-600 mx-6 mb-16 mt-24 py-10 px-4 h-full rounded-xl justify-center items-center">
        <Typography variant="h6" align="center" gutterBottom>
          Czas na zadawanie pytań:
        </Typography>

        <CountdownCircleTimer
          isPlaying
          duration={120}
          colors="#999999"
          onComplete={() => setFinished(true)}
        >
          {({ remainingTime }) => (
            <div className="text-3xl">{remainingTime}</div>
          )}
        </CountdownCircleTimer>

        <Button
          onClick={handleOnClick}
          variant={`${finished ? "contained" : "outlined"}`}
          size="large"
        >
          {finished ? "Sprawdź kto jest szpiegiem!" : "Zakończ przed czasem"}
        </Button>
      </div>
    </div>
  );
};

export default AskingQuestions;
