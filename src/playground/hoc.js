//Higher Oder Component (HOC) - A component (HOC) that renders another component
//Reuse code
//Render hijacking
//Prop manipulation
//Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    
    <div>
        <h1>Info</h1>
        <p>This info is: {props.Info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. please dont share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
            <WrappedComponent {...props}/>
            ) : (<p>Please Login to use this application</p>)
            }
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} Info = 'There are the details'/>, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} Info = 'There are the details'/>, document.getElementById('app'))