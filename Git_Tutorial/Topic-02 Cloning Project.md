---
sidebar_position: 2
---

# Topic-02: Cloning the Repository

Collaborators can clone a repository and make changes using the following steps:

### Cloning the Repository

#### 1. Find the Repository:

- Ask the repository owner to share the URL or provide access to the repository on GitHub.

#### 2. Clone the Repository:

- Open a terminal or Git Bash on your local machine.
- Use the `git clone` command followed by the repository URL to clone the repository. For example:
  ```
  git clone https://github.com/username/repository-name.git
  ```
  Replace `https://github.com/username/repository-name.git` with the actual repository URL.

### Making Changes and Pushing to the Repository

#### 3. Make Changes:

- Navigate into the cloned directory using `cd repository-name`.
- Make the necessary changes, such as adding, modifying, or deleting files within the project.

#### 4. Stage and Commit Changes:

- Stage the changes you want to commit using `git add` and commit the changes with a descriptive message using `git commit`.

#### 5. Push Changes to GitHub:

- Push the changes to the remote repository using `git push origin branch-name`.
  - Replace `branch-name` with the name of the branch you're working on. By default, it might be `master` or `main`.

### Additional Notes:

- Ensure collaborators have write access to the repository in order to push changes.
- If working on a branch, it's a good practice to create a new branch for your changes and push to that branch, then create a pull request to merge into the main branch.
- Always pull the latest changes from the remote repository before making your changes to avoid conflicts. Use `git pull origin branch-name` to do this.
- Collaborators need to have Git installed on their local machine to use these commands.

By following these steps, collaborators can clone the repository, make their changes, and push those changes back to the repository on GitHub, contributing to the shared project.