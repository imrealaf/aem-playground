const path = require("path");

const ARTIFACT_ID = "aem.playground";

module.exports = {
    CLIENTLIBS_PATH: path.resolve(`../ui.apps/src/main/content/jcr_root/apps/${ARTIFACT_ID}/clientlibs`),
    APP_DIR: path.resolve("./src", "app"),
    STYLE_DIR: path.resolve("./src", "styles"),
    COMPONENTS: [
        "sample"
    ]
}