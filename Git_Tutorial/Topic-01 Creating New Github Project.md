---
sidebar_position: 1
---

# Topic-01: Git/Github Tutorial

A step-by-step guide for beginners, starting from installing Git/GitHub tools, creating a remote repository, and pushing a local directory to GitHub:

### Installing Git/GitHub Tools

#### 1. Install Git:

- **Windows:**
  - Download Git from the official website: [Git for Windows](https://gitforwindows.org/)
  - Run the installer and follow the installation steps. Use the default settings unless you have a specific reason to change them.
- **Mac:**
  - Git can be installed via Homebrew, Xcode (if available), or from the official website.

#### 2. Set Up Git:
- After installation, open a terminal (Command Prompt on Windows or Terminal on Mac) and set your username and email for Git using:
  ```
  git config --global user.name "Your Name"
  git config --global user.email "your_email@example.com"
  ```

#### 3. Create a GitHub Account:

- Visit [GitHub](https://github.com/) and sign up for an account.

### Creating a Remote Repository on GitHub

#### 4. Create a New Repository on GitHub:

- Log in to your GitHub account.
- Click on the "+" sign in the top-right corner and select "New repository."
- Name your repository, add a description, and choose to initialize with a README file (optional).

### Pushing a Local Directory to GitHub

#### 5. Initialize a Local Directory:

- Open a terminal and navigate to the root directory of your local project.

#### 6. Initialize Git:

- Inside the project directory, initialize Git using:
  ```
  git init
  ```

#### 7. Add and Commit Files:

- Add all files in the directory to the staging area with:
  ```
  git add .
  ```
- Commit the files with a descriptive message:
  ```
  git commit -m "Initial commit"
  ```

#### 8. Link Local Repository to GitHub:

- Copy the URL of your GitHub repository.
- Add the GitHub repository as the remote origin in your local Git configuration:
  ```
  git remote add origin <repository URL>
  ```

#### 9. Push Local Project to GitHub:

- Push the committed files to the GitHub repository:
  ```
  git push -u origin master
  ```
  Replace `master` with the name of the branch you want to push (e.g., `main`).

### Final Notes:

- After pushing to GitHub, your files should be visible in your GitHub repository.

This step-by-step guide covers the process from installing Git, creating a GitHub account and repository, to pushing a local directory to GitHub. Always ensure to handle sensitive information securely and follow best practices while working with version control systems like Git.