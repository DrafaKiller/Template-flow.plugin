import { Flow } from 'flow-plugin';

const flow = new Flow({ icon: 'assets/images/app.png', keepOrder: true });

flow.add({
  title: 'Welcome to Flow Launcher!',
  subtitle: 'Create your own plugin with Typescript!',
  jsonRPCAction: Flow.Actions.changeQuery('- Hello World!'),
});

flow.on('query', ({ prompt }, response) => {
  response.add({
    title: 'Hello World!',
    subtitle: `You searched for "${prompt}"`,
  });
});
