import { Plugin } from "@hakkajs/cli/lib/plugin";
import path from "path";
/**
 * FlutterAnswers
 */
export interface FlutterAnswers {
  name: string;
}
export default (api: Plugin) => {
  api.command("flutter [name]").action(async (name: string) => {
    // define your own questions or remove it if you don't need it
    const answers = await api.prompt<FlutterAnswers>([
      {
        name: "name",
        message: "Your questions?",
        validate: flutterName => {
          if (!flutterName) {
            return "flutter name are required";
          }
          return true;
        },
        default: name
      }
    ]);
    // write file to api.conf.dist/path/to/index.js
    await api.tmplWithFormat(
      'const name = "flutter";',
      path.join(api.conf.dist, "path/to/", "index.js"),
      answers
    );
  });
};
