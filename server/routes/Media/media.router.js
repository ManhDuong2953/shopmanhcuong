import { getMediaByFieldname } from "../../src/controllers/media/media.controller";
export default function MediaRouter(router) {
    router.get("/media/:filename", getMediaByFieldname);
    return router;
}