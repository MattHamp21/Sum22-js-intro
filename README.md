# Intro to JS

# github cheatsheet
## Setup
* Do this once at the start
1. clone repo
git clone <github-link>

2. remove remote 
git remote rm origin

3. create a repo on github 

4. add new remote (USE THE SSH LINK!) 
git remote add origin <ssh-link>

5. commit and push (see below)

## Committing and Pushing
now that we have this setup if we want to save a change to github...


* These need to be done in this order
* save everything in vsCode
* do this as often as you want

//1. stage (gets them ready to be committed)
git add .

//2. commit (think of this as saving to git repo the one one your computer)
git commit -m 'short message > 50 chars about what you did'

//3. push (take your current committed changes and send them to your git repo)
git push origin master


## helpers
check status of git
git status 