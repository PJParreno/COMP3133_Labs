setInterval(() => null, 1000)

process.on("exit", () => {
    console.log("\n process uptime on exit: " + process.uptime());
    process.exit();
  });
  process.on("SIGINT", () => {
    console.log("process uptime on signal interupt: " + process.uptime());
    process.emit("exit")
  });