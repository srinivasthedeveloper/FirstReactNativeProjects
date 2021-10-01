const config = {
  initialRouteName: 'Home',
  screens: {
    Home: {
      path: 'home',
    },
    Profile: {
      path: 'profile/:id',
      parse: {
        id: id => `${id}`,
      },
    },
    Notifications: 'notifications',
  },
};

const linking = {
  prefixes: ['pokedex://myapp'],
  config,
};

export default linking;
