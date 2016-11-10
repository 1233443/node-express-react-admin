import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, Home, NotFound,ZipList,ZipDetail,ZipAdd,Register,Login} from '../containers';
import { About } from '../components';

export default function Routes() {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="login" component={Login} />
      <Route path="register" component={Register} />
      <Route path="zipList" component={ZipList} />
      <Route path="zipDetail" component={ZipDetail} />
      <Route path="zipAdd" component={ZipAdd} />
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
}
