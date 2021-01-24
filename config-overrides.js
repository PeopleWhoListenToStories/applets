import { resolve } from "path";
import { override, addWebpackAlias } from "customize-cra";

export default override(
    addWebpackAlias({
        ["@"]: resolve(__dirname, "src")
    }),
);