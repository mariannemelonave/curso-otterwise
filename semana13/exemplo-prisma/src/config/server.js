import Fastify from "fastify";
import postsRoutes from "../routes/posts-routes.js";
import multer from "fastify-multer";
import fastifyStatic from "@fastify/static"
import path from "path"
import cors from "@fastify/cors"

const fastify = Fastify({
    logger: true,
});

const __dirname = path.resolve();

fastify.register(multer.contentParser);

fastify.register(fastifyStatic, {
    root: path.join(__dirname, "pubic"),
    prefix: "/public/"
})

fastify.register(postsRoutes);

fastify.register(cors, {
    origin: (origin, callback) => {
        callback(null, true);
        return;
    }
});

export default fastify;