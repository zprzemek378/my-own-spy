import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Begin = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-dvh justify-center items-center">
      <Button
        onClick={() => navigate("/select-number-of-players")}
        variant="contained"
        size="large"
      >
        Rozpocznij
      </Button>
    </div>
  );
};

export default Begin;
