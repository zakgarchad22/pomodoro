import React from 'react';
import '../App.css';

function ActionRow({ activateAction, resetClicked, currentAction }) {
  return (
    <div className="ActionRow">
      <div className = "ActionRow-container">
      <button className="waves-effect waves-light btn nice-red-button" onClick={activateAction}>
        {currentAction}
      </button>
      <button className="waves-effect waves-light btn nice-red-button" onClick={resetClicked}>
        RESET
      </button>
      </div>
    </div>
  )
}
export default ActionRow;