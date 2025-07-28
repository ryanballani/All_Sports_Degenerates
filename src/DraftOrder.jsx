import React from 'react';
import './DraftOrder.css';

const DraftOrder = ({ draftedTeams }) => {
  return (
    <div className="draft-order">
      <h2>Draft Order</h2>
      {draftedTeams.length === 0 ? (
        <p className="empty-msg">No teams drafted yet.</p>
      ) : (
        <ol className="draft-list">
          {draftedTeams.map((team, index) => (
            <li key={index} className="drafted-team">
              {index + 1}. {team}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default DraftOrder;