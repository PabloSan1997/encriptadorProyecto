import {defineConfig} from "vite";
import sass from "vite-plugin-sass-dts";
export default defineConfig(
    {
        plugins:[sass()],
        base:"/encriptadorProyecto/"
    }
);