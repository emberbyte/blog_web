import React from 'react';
import { Route, Switch } from 'react-router-dom';

const LzAbout = React.lazy(() => import('../pages/about'));
const LzTools = React.lazy(() => import('../pages/tools'));
const LzArticles = React.lazy(() => import('../pages/articles'));

const RouterContainer: React.FC = () => (
  <div className="router-container">
    <React.Suspense fallback={<div>loading...</div>}>
      <Switch>
        <Route path="/tools">
          <LzTools />
        </Route>
        <Route path="/articles">
          <LzArticles />
        </Route>
        <Route path="/about">
          <LzAbout />
        </Route>
      </Switch>
    </React.Suspense>
  </div>
);

export default RouterContainer;
