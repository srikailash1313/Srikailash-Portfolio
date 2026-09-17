# S. Srikailash Portfolio

A responsive, dependency-free personal portfolio built with semantic HTML5, CSS3, and vanilla JavaScript.

## Structure

- `index.html` - portfolio content, metadata, and accessible structure
- `css/style.css` - responsive visual system, layout, themes, and motion
- `js/script.js` - mobile navigation, theme toggle, typing effect, scroll reveal, project filters, and form validation
- `assets/profile-placeholder.svg` - local portrait placeholder used until a real profile image is added
- `assets/resume.pdf` - minimal placeholder PDF to replace with the final resume
- `assets/certificates/` - add certificate PDFs here

## Personalize it

1. Replace `assets/profile-placeholder.svg` with your own image, or update the profile image `src` in `index.html` to `assets/profile.jpg` after adding that file.
2. Replace `assets/resume.pdf` with your final PDF, keeping the same filename.
3. Add certificate PDFs under `assets/certificates/` and update the links in `index.html`.
4. Search `your-username`, `your-profile`, and `your.email@example.com` in `index.html` and replace them with your GitHub, LinkedIn, and email details.
5. Replace each `https://example.com/...` and placeholder GitHub project link with real project URLs.
6. Update the education year and certification organizations when ready.
7. The contact form is configured as a FormSubmit placeholder. Replace the form `action` email with your real email or connect another form service. There is no fake backend in this project.

## Run locally

Open the `portfolio` folder in VS Code, install the **Live Server** extension, then right-click `index.html` and select **Open with Live Server**. The site can also be opened directly in a browser because it uses relative paths only.

## Deploy

### GitHub Pages

1. Create a GitHub repository and push the contents of this `portfolio` folder.
2. In the repository, open **Settings > Pages**.
3. Select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
4. GitHub will provide the published URL after the workflow completes.

### Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Leave the framework preset empty or choose **Other**; no build command is needed.
4. Set the output directory to the repository root and deploy.
