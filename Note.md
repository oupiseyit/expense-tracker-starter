USE CASES

- Explore new codebase
- Write and edit code
- Debug and fix errors
- Write and execute tests
- Refactor code
- Handle Git workflows

```
/model
/terminal-setup
```

- Creating Project Memory

```
/init
```

+++ Effective Prompts

- Be clear and specific
- Gve context
- Be concise

```Prompt
in @src/App.jsx, total incode and expenses are not calculated correctly. Fix it.
```

```Prompt
in transactions array, amount should be a number
```

```Prompt
extract the summary into a separate component
```

```Prompt
move the calculation of tal incoe, expenses and balance in the summary component
```

```Prompt
extract child components for transaction form and transaction list
```

```Prompt
update @CLAUDE.md in claude architectural changes
```

+++ Exploring A codebase

- What does this project do ?
- What tech stack it uses ?
- How's the authentication implemented ?
- Explain the folder structure
- Explain a piece of code

```Prompt
explain the selected code
```

add the ability to delete transactions

+++ Context Manager
```Prompt
/clear

/context

/compact
Claude automatically comacts at ~70%

/usage

add a chart (using recharts) to show speeding by category.

convert the pie chart to a bar chart
```

+++ SKILLS : Introductions that teach Claude how to do things 
    - Deploying your app
    - Generate API documentation
    - Write unit tests

```prompt
Create a custom skill called deploy. when deploying, 
we should run all tests first, build the production bundle, and push to the staging area.
```

+++ website download skill 
skillsmp.com

```prompt
/frontend-design improve the look and feel of this app.
make it modern and polished. give me some design ideas to choose from 

/rewind => turn back 1 command

/frontend-design improve the look and feel of this app.
make it modern and polished. give me some design ideas to choose from 

// A (Dark Ledger), B (Warm Paper), or C (Neon Ledger)?
Option A

/rewind
Option B

/rewind
Option C

```