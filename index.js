const Fastify = require("fastify");
const server = Fastify();

server.register(require("@fastify/http-proxy"), {
	upstream: "https://shuttleproxy.com",
	prefix: "/",
	http2: false,
});

server.listen({ host: "0.0.0.0", port: 3000 }, () => {
	console.log("shuttle-lite is listening on port 3000");
});
