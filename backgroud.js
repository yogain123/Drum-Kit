this.onmessage = function(e) {
  let limit = e.data;
  for (let i = 0; i < limit; i++) {
    Math.random();
  }
  this.postMessage("done");
};
