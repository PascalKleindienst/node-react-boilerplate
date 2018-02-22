const moment = require.requireActual('moment');

const mockMoment = (timestamp = 0) => {
    return moment(timestamp);
};

mockMoment.locale = (locale) => {
    return moment.locale(locale);
}

export default mockMoment;
