import React from "react";

function IncreaseButton({ increase }) {
    return (
        <div className="increase-button">
            <button onClick={ increase }>+ increase</button>
        </div>
    );
}

export default IncreaseButton;