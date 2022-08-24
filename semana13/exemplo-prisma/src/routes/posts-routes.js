import fastify from "fastify"

const routes = [
{
    method: "GET",
    url: "/posts",
    handler: function (request, reply){
        reply.send({ posts: [] })
    }

}
]

export default (fastify, _, next) => {
    for(let route of routes) {
        fastify.route(route);
    }
    next();
};
