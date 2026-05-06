# Deploy Skill

Deploy the application to staging by running lint checks, building the production bundle, and pushing to the staging area.

## Steps

1. **Run lint checks** — act as our test suite since the project has no dedicated test framework:

    ```bash
    npm run lint
    ```

    If lint fails, stop and report the errors. Do not proceed.

2. **Build the production bundle**:

    ```bash
    npm run build
    ```

    If the build fails, stop and report the errors. Do not proceed.

3. **Push to staging** — preview the production build locally to verify it works, then report a deployment summary:
    ```bash
    npm run preview
    ```
    After confirming the preview starts, report:
    - Build output size from the `dist/` directory
    - Timestamp of the deployment
    - The Git branch and latest commit hash being deployed

Note: This project has no remote staging server configured. If a staging URL or deploy target is provided in the future, add the push step here.

