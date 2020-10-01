const setLocation = (city, jobs) => ({
    type: "SWITCH_LOCATION",
    city: city,
    jobs: jobs
});

export default setLocation;