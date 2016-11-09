import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, Home, NotFound,DogList,DogDetail,DogAdd} from '../containers';
import { About } from '../components';

export default function Routes() {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="dogList" component={DogList} />
      <Route path="dogDetail" component={DogDetail} />
      <Route path="dogAdd" component={DogAdd} />
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
}
