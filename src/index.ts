import { Flow } from "flow-plugin";

const flow = new Flow({ keepOrder: true, icon: "app.png" });

flow.add({
  title: "Welcome to Flow Launcher!",
  subtitle: "Create your own plugin with Typescript!",
  jsonRPCAction: Flow.Actions.changeQuery("- Hello World!"),
});

flow.on("query", ({ prompt }, response) => {
  response.add({
    title: "Hello World!",
    subtitle: `You searched for "${prompt}"`,
  });
});
