import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from "react-router-dom";
import SelectNumberOfPlayers from "./components/SelectNumberOfPlayers";
import SelectNames from "./components/SelectNames";
import Begin from "./components/Begin";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import GiveRoles from "./components/GiveRoles";
import AskingQuestions from "./components/AskingQuestions";
import ResultsBar from "./components/ResultsBar";
import ShowSpies from "./components/ShowSpies";
import BeforeAskingQuestions from "./components/BeforeAskingQuestions";
import ShowWord from "./components/ShowWord";
import AddPoints from "./components/AddPoints";
import { wordLibrary } from "./wordLibrary";
import { muiTheme } from "./providers/muiProvider";

function App() {
  const [showResultsBar, setShowResultsBar] = useState<boolean>(false);
  const [numberOfPlayers, setNumberOfPlayers] = useState<number>(3);
  const [numberOfSpies, setNumberOfSpies] = useState<number>(1);
  const [indexesOfSpies, setIndexesOfSpies] = useState<number[]>([]);

  const [names, setNames] = useState<string[]>(Array(numberOfPlayers).fill(""));
  const [points, setPoints] = useState<number[]>(
    Array(numberOfPlayers).fill(0)
  );

  const [word, setWord] = useState<string>("");

  const selectNewWord = () => {
    const randomIndex = Math.floor(Math.random() * wordLibrary.length);
    setWord(wordLibrary[randomIndex]);
  };

  const handleSetNumberOfPlayers = (number: number) => {
    if (numberOfSpies >= number) {
      setNumberOfSpies(number - 1);
    }

    setNumberOfPlayers(number);
  };
  return (
    <ThemeProvider theme={muiTheme}>
      {showResultsBar && <ResultsBar names={names} points={points} />}
      <Router basename="/my-own-spy">
        <Routes>
          <Route path="/" element={<Begin />} />
          <Route
            path="/select-number-of-players"
            element={
              <SelectNumberOfPlayers
                numberOfPlayers={numberOfPlayers}
                setNumberOfPlayers={handleSetNumberOfPlayers}
                numberOfSpies={numberOfSpies}
                setNumberOfSpies={setNumberOfSpies}
              />
            }
          />
          <Route
            path="/select-names"
            element={
              <SelectNames
                numberOfPlayers={numberOfPlayers}
                points={points}
                names={names}
                setNames={setNames}
                setPoints={setPoints}
                setShowResultsBar={setShowResultsBar}
              />
            }
          />
          <Route
            path="/give-roles"
            element={
              <GiveRoles
                names={names}
                numberOfPlayers={numberOfPlayers}
                numberOfSpies={numberOfSpies}
                setIndexesOfSpiesGlobal={setIndexesOfSpies}
                spiesGlobal={indexesOfSpies}
                word={word}
                selectNewWord={selectNewWord}
              />
            }
          />
          <Route
            path="/before-asking-questions"
            element={<BeforeAskingQuestions />}
          />
          <Route path="/asking-questions" element={<AskingQuestions />} />
          <Route
            path="/show-spies"
            element={<ShowSpies names={names} spies={indexesOfSpies} />}
          />
          <Route path="/show-word" element={<ShowWord word={word} />} />

          <Route
            path="/add-points"
            element={
              <AddPoints
                names={names}
                indexesOfSpies={indexesOfSpies}
                setPoints={setPoints}
                setIndexesOfSpies={setIndexesOfSpies}
              />
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
