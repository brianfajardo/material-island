var TinyTestUtility = {
    renderSummary: function(tests, failures){
        var totalTests = Object.keys(tests).length;
        var successes = totalTests - failures;
        var summaryString = 'Ran ' + totalTests + ' tests: Successes: ' + successes + ', Failures: ' + failures;
        var summaryElement = document.createElement('h1');
        summaryElement.style.fontFamily = 'Oxygen Mono'
        summaryElement.textContent = summaryString;
        document.body.appendChild(summaryElement)
    }
}

var TinyTest = {
    run: function(tests) {
        var failures = 0;
        for (var testName in tests) {
            var testAction = tests[testName];
            try {
                testAction.apply(this);
                console.log('%c' + testName, 'color: green');
            } catch (e) {
                failures++;
                console.groupCollapsed('%c' + testName, 'color:red');
                console.error(e.stack)
                console.groupEnd()
            }
        }
        setTimeout(function() { // To avoid callstack blocking and allow the callback queue, render queue, and event loop to operate
            if (window.document && document.body) {
                document.body.style.backgroundColor = (failures == 0 ? '#99ff99' : '#ff9999');
                TinyTestUtility.renderSummary(tests, failures);
            }
        }, 0);
    },
    fail: function(msg) {
        throw new Error('fail(): ' + msg);
    },
    assert: function(value, msg) {
        if (!value) {
            throw new Error('assert(): ' + msg);
        }
    },
    assertEquals: function(expected, actual) {
        if (expected != actual) {
            throw new Error('assertEquals() "' + expected + '" != "' + actual + '"');
        }
    },
    assertStrictEquals: function(expected, actual) {
        if (expected !== actual) {
            throw new Error('assertStrictEquals() "' + expected + '" !== "' + actual + '"');
        }
    },
};

var fail               = TinyTest.fail.bind(TinyTest),
    assert             = TinyTest.assert.bind(TinyTest),
    assertEquals       = TinyTest.assertEquals.bind(TinyTest),
    eq                 = TinyTest.assertEquals.bind(TinyTest), // alias for assertEquals
    assertStrictEquals = TinyTest.assertStrictEquals.bind(TinyTest),
    tests              = TinyTest.run.bind(TinyTest);
