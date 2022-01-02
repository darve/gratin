
const actions = {
    actn_navigation_started: (store, route, slug) => {
        console.log(":: Navigation started.", route, slug);
        return { navigating: true, route, slug }
    },
    actn_navigation_finished: (store) => {
        console.log(":: Navigation finished.");
        return { navigating: false };
    }
};

export default actions;
