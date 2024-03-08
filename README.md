# Arizona Research Bazaar website

### Technologies used:

- [Quarto](https://nodejs.org/)

## Getting Started

### 1\. [Install Quarto](https://quarto.org/docs/get-started/)

### 2\. Clone this Repository

(TODO: need to update this if/when the repo moves!)

```
git clone https://github.com/resbazaz/website-draft
# TODO: switch to this once the website is ready:
# git clone https://github.com/resbazaz/website.git
```

### 3\. TODO

(probably need python, r, etc setup... might be optional?)

### 4. Previewing changes

This should build the website on your machine, serve it locally, and open a browser window to see any changes as you make them:

```
cd website
quarto preview
```

## How to contribute

### Saving and pushing changes

TODO: basic git fork + commit + PR flow

### Editing page contents

TODO: where to find markdown

### Updating page elements

TODO: where to find HTML, how includes and \_data work

### Customizing styles

TODO: Alpine, Tailwind stuff

### Changing how Github builds and deploys the site

TODO: document `.github/workflows/build.yml`

Be advised that `localData/people.json` in your local respository is just an example file, that will be overwritten by the latest ResBazAZ teams on Github—so to update who is shown, and what teams are shown, you should edit the Github teams, not the JSON file.

### Reconfiguring the site's infrastructure

TODO: document `_quarto.yml`

---

# TODO: finish and delete this stuff

- Create Who We Are page

- Decide what to do with the blog

- Figure out redirects for old festival links

- Copy code of conduct md from organization repo as part of build?

- DONATE NOW button (stuff about our opencollective)

- Actually include full instructions for editing + adding things in the README

- Need to update the github build workflow to only run when pushing to main
