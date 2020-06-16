import React from 'react';
import scale from 'scale-number-range';

/**
 * The body for the landing page, in between the header and the technology descripions
 */
export default class BodyIntroduction extends React.Component {

    componentDidMount() {
        //SETUP
        let canvas = document.getElementById("myCanvas");
        let ctx = canvas.getContext("2d");

        const NUMBER_OF_DOTS = 30;

        const MAX_WIDTH = canvas.offsetWidth;
        const MAX_HEIGHT = canvas.offsetHeight;

        let startXPos = MAX_WIDTH / 4; //start 25% from the left side of the screen
        let startYPos = MAX_HEIGHT / 2; //start in the middle of the container's height

        ctx.canvas.width = MAX_WIDTH;
        ctx.canvas.height = MAX_HEIGHT;

        let framerate = 16.6; //60fps
        console.log(`Screen width = ${MAX_WIDTH}px`);
        if (MAX_WIDTH < 500) {
            console.log("Mobile screen size detected. setting generative art to 30fps to save battery.")
            framerate = 33.3; //set the framerate to 30fps on mobile to save battery
        }


        var gradient = ctx.createLinearGradient(0, 0, MAX_WIDTH, 0);

        let dotsArray = [];
        for (var i = 0; i < NUMBER_OF_DOTS; i++) {
            dotsArray.push(new genDot(startXPos, startYPos, MAX_WIDTH, MAX_HEIGHT))
        }


        //draw the canvas at 60fps after a delay of 2.5s (or 30 on mobile)
        setTimeout(() => window.setInterval(() => drawCanvas(), framerate), 2500);
        //setTimeout(() => window.setInterval(() => drawCanvas(), 500), 2500);


        ctx.strokeStyle = gradient;




        //DRAW
        function drawCanvas() {


            //ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;

            ctx.clearRect(0, 0, MAX_WIDTH, MAX_HEIGHT);

            for (var i = 0; i < dotsArray.length; i++) {
                dotsArray[i].updatePosition();
            }

            //METHOD 1 - ONLY DRAW LINES TO CLOSEST 5 DOTs
            for (let i = 0; i < dotsArray.length; i++) {
                let closestDots = dotsArray[i].getClosestDots(dotsArray);
                closestDots.forEach(element => {

                    var distance = Math.hypot(element.getXPosition() - dotsArray[i].getXPosition(), element.getYPosition() - dotsArray[i].getYPosition());
                    var opacity = scale(distance, 0, MAX_WIDTH / 3, 1.0, 0.0);

                    var farRed = scale(distance, MAX_WIDTH / 10, MAX_WIDTH / 4, 249, 237);
                    var farGreen = scale(distance, MAX_WIDTH / 10, MAX_WIDTH / 4, 220, 37);
                    var farBlue = scale(distance, MAX_WIDTH / 10, MAX_WIDTH / 4, 92, 78);
                    if (distance < MAX_WIDTH / 6) {
                        var farRed = scale(distance, MAX_WIDTH / 16, MAX_WIDTH / 10, 244, 249);
                        var farGreen = scale(distance, MAX_WIDTH / 16, MAX_WIDTH / 10, 255, 220);
                        var farBlue = scale(distance, MAX_WIDTH / 16, MAX_WIDTH / 10, 253, 92);
                    }



                    ctx.strokeStyle = `rgba(${farRed},${farGreen},${farBlue},${opacity})`;
                    ctx.beginPath();
                    ctx.moveTo(dotsArray[i].getXPosition(), dotsArray[i].getYPosition());
                    ctx.lineTo(element.getXPosition(), element.getYPosition());
                    ctx.stroke();
                });

                //METHOD 2 - DRAW ALL LINES REGARDLESS OF DISTANCE

                /*for (var j = 0; j < dotsArray.length; j++) {
                    console.log(`drawing line from (${dotsArray[i].getXPosition()},${dotsArray[i].getYPosition()}) to (${dotsArray[j].getXPosition()},${dotsArray[j].getYPosition()})`)
                    var distance = Math.hypot(dotsArray[j].getXPosition() - dotsArray[i].getXPosition(), dotsArray[j].getYPosition() - dotsArray[i].getYPosition());
                    var opacity = scale(distance, 0, MAX_WIDTH / 3, 1.0, 0.0);
                    console.log("Current line's opacity = " + opacity);

                    
                    * #ED254E red crayola rgb(237,37,78)
                    * #F9DC5C Naples Yellow rgb(249,220,92)
                    * #011936 oxford blue rgb(1,25,54)
                    * #F4FFFD mint cream rgb(244,255,253)
                     
                    distance for red - yellow MAX_WIDTH/6, MAX_WIDTH / 4,
                    distance for yellow - green MAX_WIDTH/16, MAX_WIDTH / 6,


                    var farRed = scale(distance, MAX_WIDTH / 10, MAX_WIDTH / 4, 249, 237);
                    var farGreen = scale(distance, MAX_WIDTH / 10, MAX_WIDTH / 4, 220, 37);
                    var farBlue = scale(distance, MAX_WIDTH / 10, MAX_WIDTH / 4, 92, 78);
                    if (distance < MAX_WIDTH / 6) {
                        var farRed = scale(distance, MAX_WIDTH / 16, MAX_WIDTH / 10, 244, 249);
                        var farGreen = scale(distance, MAX_WIDTH / 16, MAX_WIDTH / 10, 255, 220);
                        var farBlue = scale(distance, MAX_WIDTH / 16, MAX_WIDTH / 10, 253, 92);
                    }



                    ctx.strokeStyle = `rgba(${farRed},${farGreen},${farBlue},${opacity})`;
                    ctx.beginPath();
                    ctx.moveTo(dotsArray[i].getXPosition(), dotsArray[i].getYPosition());
                    ctx.lineTo(dotsArray[j].getXPosition(), dotsArray[j].getYPosition());
                    ctx.stroke();
                }*/
            }
        }
    }//end of componenetDidMount()






    render() {
        return (
            <div className="introduction-holder">
                <div className="introduction-container">
                    {/*generative art will go here*/}
                    <canvas id="myCanvas"></canvas>
                    <div className="introduction-text">
                        <img src="sambebenekportrait.jpg" className="portrait" />
                        <p>Hello, my name is Sam Bebenek. I am a full-stack web developer from Ontario, Canada. I have a background in digital media arts, and want to continue working with new technologies and pushing for ethics in digital media. </p>
                        <div>
                            <a href="https://www.linkedin.com/in/sam-bebenek-487a12159/" target="_blank" title="Sam Bebenek's LinkedIn page. Opens in a new tab"><img src="linkedin-logo.png" alt="linkedin logo" className="socialMediaIcon" /></a>
                            <a href="https://github.com/sbebenek" target="_blank" title="Sam Bebenek's GitHub account. Opens in a new tab"><img src="github-logo.png" alt="github logo" className="socialMediaIcon" /></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}










/**
 * Holds the information needed for each 'dot' in the generative art piece. A 'dot' is a point where the lines will connect
 * @param {Number} startXPos the starting x position
 * @param {Number} startYPos the starting y position
 * @param {Number} maxXBounds the max width of the container
 * @param {Number} maxYBounds the max height of the container
 */
class genDot {

    constructor(startXPos, startYPos, maxXBounds, maxYBounds) {
        this.startXPos = startXPos;
        this.startYPos = startYPos; //starting (x,y) coords
        this.maxXBounds = maxXBounds;
        this.maxYBounds = maxYBounds; //bounds of canvas, will turn around if reaching one of these bounds

        this.currentXPos = startXPos;
        this.currentYPos = startYPos;

        //this.closestArray = [];

        this.xSpeed = Math.random(); //random speed value between 0.0 and 1.0
        this.ySpeed = Math.random(); //random speed value between 0.0 and 1.0

        this.walkActivationRate = 30; //the lower the number, the more often the walk is triggered (ie. happens one in x amount of frames)

        this.randomTrigger = Math.floor(Math.random() * this.walkActivationRate) + 1; //random number between 1 and 120, if the framecount reaches this number, change the direction vector
        this.frameCount = 1;

        //these will set the direction of the 'dot' to a random vector direction
        this.xDirection = Math.floor((Math.random() * 9) - 4); //random number between 0 and 10 minus 5 = random number between -5 and +5
        this.yDirection = Math.floor((Math.random() * 9) - 4); //random number between 0 and 10 minus 5 = random number between -5 and +5
    }

    /**
     * Updates the position by adding its direction vector to its current position
     */
    updatePosition() {
        //check for random walk trigger
        if (this.frameCount === this.randomTrigger) {
            //random walk triggered, change direction vector and reset framecount and random trigger
            this.randomTrigger = Math.floor(Math.random() * this.walkActivationRate) + 1; //random number between 1 and 120, if the framecount reaches this number, change the direction vector
            this.frameCount = 0;

            this.xSpeed = Math.random(); //random speed value between 0.0 and 1.0
            this.ySpeed = Math.random(); //random speed value between 0.0 and 1.0


            this.xDirection += Math.floor((Math.random() * 5) - 2); //random number between 0 and 4 minus 3 = random number between -2 and +2
            this.yDirection += Math.floor((Math.random() * 5) - 2); //random number between 0 and 4 minus 2 = random number between -2 and +2


            if (this.xDirection > 4) { this.xDirection = 4 }
            if (this.xDirection < -4) { this.xDirection = -4 }
            if (this.yDirection > 4) { this.yDirection = 4 }
            if (this.yDirection < -4) { this.yDirection = -4 }
        }
        this.frameCount++;


        //reverse the x direction if its going to be greater than the right x boundry
        if (this.currentXPos + this.xDirection >= this.maxXBounds) {
            this.xDirection = this.xDirection * -1;
        }
        //revers the x direction if its going to be smaller than the left x boundry
        else if (this.currentXPos + this.xDirection <= 0) {
            this.xDirection = this.xDirection * -1;
        }

        //reverse the y direction if its going to be greater than the bottom y boundry
        if (this.currentYPos + this.yDirection >= this.maxYBounds) {
            this.yDirection = this.yDirection * -1;
        }
        //revers the y direction if its going to be smaller than the top y boundry
        else if (this.currentYPos + this.yDirection <= 0) {
            this.yDirection = this.yDirection * -1;
        }


        //now that the directions are reversed to stay within the boundry if they need to be,
        //update the current position by adding the direction vector to the position
        //this.currentXPos += this.xDirection;
        this.currentXPos += this.xDirection * this.xSpeed;
        //this.currentYPos += this.yDirection;
        this.currentYPos += this.yDirection * this.ySpeed;
    }


    /**
     * Generates an array of closest 5 dots to this one
     * @param {array} dotsArray array of all other genDot objects
     * @returns {array} an array of the closest 5 genDot objects
     */
    getClosestDots(dotsArray) {
        let returnArraySize = 5; //add one because it will always count itself
        //let returnArraySize = dotsArray.length-1; //uncomment to draw them all, regardless of distance

        if (!Array.isArray(dotsArray)) {
            return false;
        }
        //unshift adds to front of array, push adds to end of array
        let dotAndDistanceArray = [];
        dotsArray.forEach(element => {
            var distance = Math.hypot(element.getXPosition() - this.getXPosition(), element.getYPosition() - this.getYPosition());
            dotAndDistanceArray.push({ "dotObject": element, "distance": distance });
        });
        var sortedArray = dotAndDistanceArray.sort(compare);

        var closestDotsArray = [];
        for (var i = 1; i <= returnArraySize; i++) {
            closestDotsArray.push(sortedArray[i].dotObject);
        }
        return closestDotsArray;
    }



    /**
     * returns the current X Position of this dot
     */
    getXPosition() {
        return this.currentXPos;
    }
    /**
     * returns the current Y Position of this dot
     */
    getYPosition() {
        return this.currentYPos;
    }
}




//sorts dots based on their distance - https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
function compare(a, b) {
    const dotA = a.distance;
    const dotB = b.distance;

    let comparison = 0;
    if (dotA > dotB) {
        comparison = 1;
    } else if (dotA < dotB) {
        comparison = -1;
    }
    return comparison;
}