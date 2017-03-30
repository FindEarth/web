import Container from 'components/main/person/PersonContainer';
import Detail from 'components/main/person/PersonDetail';

const route = {
  path: '/person',
  component: Container,
  children: [{
    path: ':personId',
    name: 'person-detail',
    component: Detail,
  }],
};

export default route;
