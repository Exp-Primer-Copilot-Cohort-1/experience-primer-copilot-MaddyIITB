function skillsMember() {
    var skills = {
        html: 10,
        css: 9,
        js: 7,
        php: 8
    };
    for (var skill in skills) {
        console.log(skill + " : " + skills[skill]);
    }
}