function estimateDataUsage(videoDurationInSeconds, quality) {
    const dataRates = {
        // Data rate in MB per second
        '240p': 0.0625,
        '360p': 0.0875,
        '480p': 0.15625,
        '720p-30fps': 0.34375,
        '720p-60fps': 0.515625,
        '1080p-30fps': 0.577,
        '1080p-60fps': 0.865,
        '1440p-30fps': 1.217,
        '1440p-60fps': 1.729,
        '2160p-30fps': 3.009,
        '2160p-60fps': 4.545,
    };

    const dataRate = dataRates[quality];
    if (!dataRate) {
        return 'Quality not supported';
    }

    const estimatedDataUsage = videoDurationInSeconds * dataRate; // in MB
    return `Estimated Data Usage for ${quality}: ${estimatedDataUsage.toFixed(
        2,
    )} MB`;
}

// const videoDuration = 600; // in seconds (10 minutes)
// const quality = '720p-30fps';
// console.log(estimateDataUsage(videoDuration, quality));

// document
//     .getElementById('dataUsageForm')
//     .addEventListener('submit', function (e) {
//         e.preventDefault();

//         const quality = document.getElementById('quality').value;
//         const duration = document.getElementById('duration').value;

//         const dataUsage = (quality * duration * 60).toFixed(2);

//         document.getElementById(
//             'result',
//         ).innerHTML = `Estimated Data Usage: ${dataUsage} MB`;
//     });

//     function parseDuration(durationInput) {
//     if (durationInput.includes(':')) {
//         // Duration is in format 'minutes:seconds'
//         const parts = durationInput.split(':');
//         const minutes = parseInt(parts[0], 10);
//         const seconds = parseInt(parts[1], 10);
//         return minutes * 60 + seconds;
//     } else {
//         // Duration is in seconds
//         return parseInt(durationInput, 10);
//     }
// }

// document.getElementById('dataUsageForm').addEventListener('submit', function(e) {
//     e.preventDefault();

//     const quality = document.getElementById('quality').value;
//     const durationInput = document.getElementById('duration').value;

//     // Parse the duration to get the total seconds
//     const totalSeconds = parseDuration(durationInput);

//     const dataUsage = (quality * totalSeconds).toFixed(2);

//     document.getElementById('result').innerHTML = `Estimated Data Usage: ${dataUsage} MB`;
// });

function parseDuration(durationInput) {
    if (durationInput.includes(':')) {
        // Duration is in format 'minutes:seconds'
        const parts = durationInput.split(':');
        const minutes = parseInt(parts[0], 10);
        const seconds = parseInt(parts[1], 10);
        return minutes * 60 + seconds;
    } else {
        // Duration is in seconds
        return parseInt(durationInput, 10);
    }
}

document
    .getElementById('dataUsageForm')
    .addEventListener('submit', function (e) {
        e.preventDefault();

        const quality = document.getElementById('quality').value;
        const durationInput = document.getElementById('duration').value;

        // Parse the duration to get the total seconds
        const totalSeconds = parseDuration(durationInput);

        const dataUsage = (quality * totalSeconds).toFixed(2);

        document.getElementById(
            'result',
        ).innerHTML = `Estimated Data Usage: ${dataUsage} MB`;
    });
