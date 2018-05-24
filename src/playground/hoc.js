import React from 'react';
import ReactDOM from 'react-dom';

const Info=(props)=>(
    <div>
        <h1>Info</h1>
        <p>This is user info {props.info}</p>
    </div>
);

const AdminWarning = (WrappedComponent)=>{
    return (props)=>(
        <div>
            the above info is confidential please dont share;
            <WrappedComponent {...props} />
        </div>
    )
};

const AdminInfo = AdminWarning(Info);
ReactDOM.render(<AdminInfo info="fg9pahgepar"/>,document.getElementById('app'));