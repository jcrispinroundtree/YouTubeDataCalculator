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

const videoDuration = 600; // in seconds (10 minutes)
const quality = '720p-30fps';
console.log(estimateDataUsage(videoDuration, quality));
