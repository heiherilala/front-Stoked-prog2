import React from 'react';

const Arrow = (bol:boolean) => {
    if (bol) {
        return (
            <>
                <i className="bi bi-chevron-down"></i>
            </>
        );
    }else{
        return (
            <>
                <i className="bi bi-chevron-expand"></i>
            </>
        );
    }

};

export default Arrow;