import { useEffect, useState } from "react";
import { selectIndexesOfSpies } from "../helpers/gameHelpers";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type GiveRolesProps = {
  names: string[];
  numberOfPlayers: number;
  numberOfSpies: number;
  spiesGlobal: number[];
  setIndexesOfSpiesGlobal: (indexes: number[]) => void;
  word: string;
  selectNewWord: () => void;
};

const GiveRoles = ({
  names,
  numberOfPlayers,
  numberOfSpies,
  setIndexesOfSpiesGlobal,
  spiesGlobal,
  word,
  selectNewWord,
}: GiveRolesProps) => {
  const [currentPlayerReading, setCurrentPlayerReading] = useState<number>(0);
  const [isReverse, setIsReverse] = useState<boolean>(false);
  const [showContent, setShowContent] = useState<boolean>(true);

  useEffect(() => {
    if (spiesGlobal.length) return;

    selectNewWord();

    const selectedIndexes = selectIndexesOfSpies(
      numberOfPlayers,
      numberOfSpies
    );

    setIndexesOfSpiesGlobal(selectedIndexes);
  }, [
    numberOfPlayers,
    numberOfSpies,
    spiesGlobal,
    setIndexesOfSpiesGlobal,
    selectNewWord,
  ]);

  const navigate = useNavigate();

  const handleOnClick = () => {
    if (currentPlayerReading === numberOfPlayers - 1 && isReverse) {
      setTimeout(() => {
        navigate("/before-asking-questions");
      }, 1000);
    }

    setShowContent(false);
    setTimeout(() => {
      setShowContent(true);
    }, 1000);
    setIsReverse((currentIsReverse) => {
      if (currentIsReverse) {
        setCurrentPlayerReading(
          (currentCurrentPlayerReading) => currentCurrentPlayerReading + 1
        );
      }

      return !currentIsReverse;
    });
  };

  return (
    <div className="h-dvh flex flex-col justify-between">
      <button
        disabled={!showContent}
        onClick={handleOnClick}
        className={`bg-slate-600 mx-6 mb-16 mt-24 py-10 px-4 h-full rounded-xl justify-center items-center transition-transform duration-1000 ${
          isReverse ? "transform rotate-y-180" : ""
        }`}
      >
        {!isReverse && showContent ? (
          <div>
            <Typography variant="h6" align="center" gutterBottom>
              {names[currentPlayerReading]}
            </Typography>

            <Typography variant="body1" align="center" gutterBottom>
              Kliknij aby zobaczyć hasło
            </Typography>
          </div>
        ) : (
          showContent && (
            <div className="transform rotate-y-180">
              {spiesGlobal.includes(currentPlayerReading) ? (
                <Typography variant="h6" align="center" gutterBottom>
                  Jesteś szpiegiem!
                </Typography>
              ) : (
                <>
                  <Typography variant="h6" align="center" gutterBottom>
                    Hasło:
                  </Typography>

                  <Typography variant="body1" align="center" gutterBottom>
                    {word}
                  </Typography>
                </>
              )}
            </div>
          )
        )}
      </button>
    </div>
  );
};

export default GiveRoles;
