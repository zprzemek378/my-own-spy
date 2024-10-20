import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BeforeAskingQuestions = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/asking-questions");
  };

  return (
    <div className="h-dvh flex flex-col justify-between">
      <div className="flex flex-col gap-14 bg-slate-600 mx-6 mb-16 mt-24 py-10 px-4 h-full rounded-xl justify-center items-center">
        <Button onClick={handleOnClick} variant="contained" size="large">
          Rozpocznij zadawanie pytań
        </Button>
      </div>
    </div>
  );
};

export default BeforeAskingQuestions;
