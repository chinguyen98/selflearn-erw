import chalk from "chalk";
import detectPort from "detect-port";

const port = process.env.PORT || "9000";

detectPort(port, (err, availablePort) => {
  if (port !== String(availablePort)) {
    throw new Error(
      chalk.whiteBright.bgRed.bold(
        `Port "${port}" on "localhost" is already in use!`
      )
    );
  } else {
    console.log(
      chalk.whiteBright.bgBlueBright.bold(`Project is started at port: ${port}!`)
    );
    process.exit(0);
  }
});
