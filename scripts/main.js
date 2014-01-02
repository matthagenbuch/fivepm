require.config({
    paths: {
        "moment": "moment",
        "moment-timezone": "moment-timezone",
        "moment-timezone-data": "moment-data"
    }
});
define(["moment-timezone", "moment-timezone-data"], function (moment) {
    moment().tz("America/Los_Angeles").format();
});