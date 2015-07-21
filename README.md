# Screeps Starter Kit

Basic useful feature list:

 * Uses [GruntJS](http://gruntjs.com/) and [grunt-screeps](https://github.com/screeps/grunt-screeps) to push your code to screeps.com

### Prerequisites 

* Nodejs v0.10.35+
* GruntJS v0.4.5
* grunt-screeps 1.0.3+

## Installation

Step 1:

    git clone https://github.com/mmccook/screeps-starter-kit.git <your-username>
    
Step 2:
	
    cd <your-username>
    
Step 3:
	
    npm install
    
This should have created a file named screeps.config.json in the project directory.

## Congifuration

Configuration can be done within the file screeps.config.json that the npm postinstall script created. 

__username__ : Your [Screeps](http://screeps.com) email

__password__ : Your [Screeps](http://screeps.com) password



## Usage

#### Pushing to Screeps
	
    grunt screeps
#### Writing Modules for Screeps
This can be done within the dist/ folder. 

## License

[WTFPL](./LICENSE).