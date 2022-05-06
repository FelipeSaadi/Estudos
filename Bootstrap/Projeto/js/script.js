let ProgressBar = require('progressbar.js')
let line = new ProgressBar.Line('#container');

var circle = new ProgressBar.Circle('#example-percent-container', {
    color: '#FCB03C',
    strokeWidth: 3,
    trailWidth: 1,
    text: {
        value: '0'
    }
});