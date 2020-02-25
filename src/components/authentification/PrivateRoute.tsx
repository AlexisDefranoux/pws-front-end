import React, {ReactNode} from 'react';
import Parse from 'parse';
import {Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({children, ...rest}: { children: ReactNode, [x: string]: any }) => {
    return (
        <Route
            {...rest}
            render={({location}) =>
                Parse.User.current() ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
