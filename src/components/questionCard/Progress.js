import React from 'react';

function Progress(props) {
    return (
        <h2>
            ข้อที่ {props.current} จาก {props.total} ข้อ
        </h2>
    );
}

export default Progress;
