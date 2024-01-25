import React from "react";

function ResetButton({ reset }) {
    return (
        <div className="reset-button">
            <button onClick={ reset }>- reset</button>
        </div>
    )
}

export default ResetButton;