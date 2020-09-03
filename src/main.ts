import * as core from "@actions/core";

const IS_WINDOWS = process.platform === "win32";

async function run(): Promise<void> {
    try {
        // exit if non Windows runner
        if (IS_WINDOWS === false) {
            core.setFailed("setup-msbuild can only be run on Windows runners");
            return;
        }
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
