let currentClock;

function searchBackend() {
    console.log("Request sent to backend");

    // fetch()
}

function debouncedSearchBackend() {
    clearTimeout(currentClock);

    currentClock = setTimeout(searchBackend, 30); // start the clock again
}

debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();