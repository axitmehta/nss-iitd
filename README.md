
## NSS IIT Delhi 17 ##

* Version 1.0.A
### Before setup the project ###
* Ubuntu 14.04 or higher (16.04 recommended)
* Git
* Text editor (atom recommended)

###To set up the project###

####Note: Node.js is required. So install node.js first (https://nodejs.org/en/download/).####

```
$ sudo apt-get install nodejs
$ sudo apt-get install npm
```


```
$ npm install -g npm
$ npm install -g bower
$ npm install -g gulp
```
 (use sudo if it says permission denied)

## If you are behind a proxy server ##
for npm

```
 npm config set proxy "http://proxy22.iitd.ernet.in:3128/"
```


```
$ cd /nss-iitd
$ npm install bower
$ npm install gulp
$ npm install
$ bower install
```


To run the project.


```
$ gulp
```

#### Errors; ####

1. npm ERR! argv "/usr/bin/nodejs" "/usr/bin/npm" "install" "-g" "npm"


```
#!zsh

$ sudo ln -s "$(which nodejs)" /usr/bin/node
```


### If I find any bug then Who do I talk to? ###

* Manish, manish9461@gmail.com
