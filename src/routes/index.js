import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, Home, NotFound,ZipList,ZipDetail,ZipAdd,ZipUpdata,Register,Login} from '../containers';
import { About } from '../components';

export default function Routes() {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Login} />
      <Route path="home" component={Home} />
      <Route path="about" component={About} />
      <Route path="login" component={Login} />
      <Route path="register" component={Register} />
      <Route path="zipList" component={ZipList} />
      <Route path="zipDetail" component={ZipDetail} />
      <Route path="ZipUpdata/:id" component={ZipUpdata} />
      <Route path="zipAdd" component={ZipAdd} />
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
}
