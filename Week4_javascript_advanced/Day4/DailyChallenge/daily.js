
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
class video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch() {
        return `${this.uploader} watched all ${this.time} of ${this.title} !`
    }
}
// Instantiate a new Video instance and call the watch() method.

const newVideo = new video('slap the Rock', 'Will Smith', 3000);
console.log(newVideo.watch());

// Instantiate a second Video instance with different values.

const newVideo1 = new video('Bad Boyz', 'Will Smith', 2500000);
console.log(newVideo1.watch());


// //BONUS
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.

// // let video2 = Object.keys(video);
// // console.log('video2', Object.keys(video));

// let arrInstance = [];
// creatarr(video);
// function creatarr(obj) {
//     let names = ['yakuzuna','under', 'taker','hulk','hugen']
//     for (let i = 0; i < names.length; i++) {

//         const [i] = Object.keys(obj);
//         // const [i] = new video('slap the Rock', 'Will Smith', 3000);
//         // arrInstance.push(video[i]);
//         console.log('arrInstance', arrInstance);

//     }

// }





