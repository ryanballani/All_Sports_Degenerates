import React, { useState } from 'react';
import DraftBoard from './DraftBoard';
import DraftOrder from './DraftOrder';
import './App.css';

const initialTeams = [
  { name: 'Steelers', league: 'NFL' },
  { name: 'Penguins', league: 'NHL' },
  { name: 'Pirates', league: 'MLB' },
  { name: 'Pitt', league: 'NCAA' },
  // Add more teams as needed
];

const initialManagers = [
  'Ryan', 'John', 'Mike', 'Shaun', 'Alex', 'Chris', 'Taylor', 'Sam'
];

const App = () => {
  const [draftedTeams, setDraftedTeams] = useState([]);
  const [managers, setManagers] = useState(initialManagers);
  const [isSnake, setIsSnake] = useState(true);

  const getCurrentDrafter = () => {
    const totalSlots = managers.length * 2;
    const pick = draftedTeams.length;
    const round = Math.floor(pick / managers.length);
    const indexInRound = pick % managers.length;
    const currentIndex = isSnake && round % 2 === 1
      ? managers.length - 1 - indexInRound
      : indexInRound;
    return managers[currentIndex];
  };

  const handleDraft = (teamName) => {
    setDraftedTeams((prev) =>
      prev.includes(teamName) ? prev : [...prev, teamName]
    );
  };

  const handleUndo = () => {
    setDraftedTeams((prev) => prev.slice(0, -1));
  };

  const handleReset = () => {
    setDraftedTeams([]);
  };

  const handleToggleSnake = () => {
    setIsSnake((prev) => !prev);
  };

  return (
    <div className="app">
      <h1 className="app-title">🏈 All Sports Draft Board</h1>
      <DraftBoard teams={initialTeams} draftedTeams={draftedTeams} onDraft={handleDraft} />
      <DraftOrder
        draftedTeams={draftedTeams}
        managers={managers}
        isSnake={isSnake}
        onReset={handleReset}
        onUndo={handleUndo}
        currentDrafter={getCurrentDrafter()}
      />
      <button className="snake-toggle-button" onClick={handleToggleSnake}>
        {isSnake ? 'Disable Snake Draft' : 'Enable Snake Draft'}
      </button>
    </div>
  );
};

export default App;