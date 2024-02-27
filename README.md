# vscode-inline-suggestion-sample

## Overview
This is a sample VS Code extension to show how inline suggestion works when multiple
inline suggestion providers exists.

## Prerequisites
Install [Ansible VS Code Extension by Red Hat](https://marketplace.visualstudio.com/items?itemName=redhat.ansible) as this extension is activated when an Ansible file is loaded.

## Build
1. `npm install`
2. `npm run package`

## Test
1. Install the .vsix file that was built.
2. Load `playbook.yml` stored in the root directory of this repo
3. Move the cursor at the end of 5th line (`- name: print hello`)
4. Enter a new line. Cursor should move to column 5 of line 6, which is the only position
this sample inline suggestion sample provides an inline suggestion.
    - If you have enabled [Ansible Lightspeed](https://www.redhat.com/en/technologies/management/ansible/ansible-lightspeed), you will see the suggestion from Ansible Lightspeed as well.

![](inlineSuggestion.mp4)