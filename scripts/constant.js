import path from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import process from "node:process";

// 获取当前模块的 URL
const __filename = fileURLToPath(import.meta.url);
// 获取当前模块的目录
const __dirname = dirname(__filename);

// 拼接绝对路径
const PROJECT_PATH = path.resolve(__dirname, "../");
// 项目名
const PROJECT_NAME = path.parse(PROJECT_PATH).name;

// const isDev = (import.meta.env.NODE_ENV || "development") !== "production";
const isDev = process.env.NODE_ENV !== "production";

const SERVER_HOST = "127.0.0.1";
const SERVER_PORT = 9000;

export { PROJECT_PATH, PROJECT_NAME, isDev, SERVER_HOST, SERVER_PORT };
