export default {
  hostname: "ws.colo-fl.myinfra.lol",
  ws_port: 80,
  mongodb: "mongodb://tritan.colo-fl.myinfra.lol:27017/VM-Healthchecks",
  agent_update_ms: 10 * 60000, // 10 min
  agent_reconnect_delay: 1 * 10000, // 10 seconds
};
