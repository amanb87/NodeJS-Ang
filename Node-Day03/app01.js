let ScopeLosingObj = {
    text: "info from lexical scope",
    run: function () {
        setTimeout(function () {
            console.log("ES5: ", this.text);
        }, 1000);
    }
};
ScopeLosingObj.run();