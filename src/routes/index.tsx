import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Calculator = lazy(() => import('../pages/Calculator'));
const NotFound = lazy(() => import('../pages/NotFound'));

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<span>Loading...</span>}>
                <Switch>
                    <Route exact path="/" component={Calculator} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
};

export default Routes;