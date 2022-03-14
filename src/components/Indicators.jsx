import React from 'react';

function Indicators({temp, pressure, humidity}) {
    // const [value, setValue] = React.useState(0);
    return (
        <div id="indicators">
            <div>
                <p>{temp}</p>
            </div>
            <div>
                <p>{pressure}</p>
            </div>
            <div>
                <p>{humidity}</p>
            </div>
        </div>
    );
}

export default Indicators;
