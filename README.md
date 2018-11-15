## Requirements

You will you need to have:

* [Virtualbox](https://www.virtualbox.org/wiki/Downloads) >= 4.3.10
* [Vagrant](https://releases.hashicorp.com/vagrant/2.0.4/) = 2.0.4 *(install this version, different versions seem to have issues)*
* [Node.js](http://nodejs.org/) >= 6.9.x
* [Yarn](https://yarnpkg.com/en/docs/install)
* [Git](https://git-scm.com)

## Local development setup

1. **Clone this repository** *into a directory*  
  Press "clone" in the top right and run the command in a directory where you want to place this repository

2. **Setup yarn**  
  Run these commands in your terminal / shell  
  # Go to your theme directory located in 'chipsite/site/web/app/themes/chipsite-theme'  
  # Run the following commands  
  ```composer install```  
  ```yarn```  
  ```yarn build```  
  ```yarn start```

3. **Start the virtual server** *(be patient, but watch the console––it may prompt for your system password and you may have to run it twice on initial setup)*  
  Run these commands in your terminal / shell
  # Go to your trellis directory located in 'chipsite/trellis'  
  ```vagrant up```

  _Note: to shut down the server:_ `vagrant halt`  
  _Note: to suspend the server:_ `vagrant suspend`  
  _Note: to remove the server:_ `vagrant destroy`  

4. **Test the install** at [chipsite.test](http://chipsite.test/)

## Remote server setup (staging/production)

### Provision server:
```shell
# @ roots-example-project.com/trellis
$ ansible-playbook server.yml -e env=<environment>
```

### Deploy:
```shell
# @ roots-example-project.com/trellis
./deploy.sh <environment> roots-example-project.com

# OR
ansible-playbook deploy.yml -e "site=roots-example-project.com env=<environment>"
```

**To rollback a deploy:**
```shell
ansible-playbook rollback.yml -e "site=roots-example-project.com env=<environment>"
```

## Theme development

In **development**, run `yarn start` for live updates at [localhost:3000](http://localhost:3000). **Important**: always use the [roots-example-project.test](http://roots-example-project.test/wp/wp-admin/) URL to access the WordPress admin.
```shell
# @ roots-example-project.com/site/web/app/themes/sage
$ yarn start
```

**Production** assets (minified CSS, JavaScript, images, fonts, etc.) need to be compiled. Run `yarn build:production`. The resulting files will be saved in `themes/sage/dist/`. Never edit files in the `dist` directory.

```shell
# @ roots-example-project.com/site/web/app/themes/sage
$ yarn build:production
```
