import React from 'react';

const userinput = (props) => {
    const style_input = {
        border: '1px solid #aaa',
        'border-radius': '5px',
        color: '#666',
        display: 'block',
        padding: '10px',
        margin: '10px auto',
    };
    return (
        <div>
            <input style={style_input} onChange={props.change} value={props.username} type="text" />
        </div>
    );
}

export default userinput;