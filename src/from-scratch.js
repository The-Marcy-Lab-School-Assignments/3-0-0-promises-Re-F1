// Question 1 //
const resolvedWrapper = (value) => {
const promise = new Promise((resolve, reject) => {
  resolve(value)
})
return promise 
};

// Question 2
const rejectedWrapper = (value) => {
  const promise = new Promise((resolve, reject) => {
    reject(new Error(value))
  })
  return promise
};

// Question 3
const handleResolvedPromise = (promise) => { 
  return promise.then((value) => { // return the promise the value
    console.log(value)
    return value
  })
};

// Question 4
const handleResolvedOrRejectedPromise = (promise) => {
  return promise
  .then((value) => {
    console.log(value)
    return value
  }).catch((error) => { // error is the rejected Error object which has a .message property
    console.error(`Your error message was: ${error.message}`)
    return null
  })
};

// Question 5
const pauseForMs = (times) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(); // resolve after 500ms
    }, times);

  })    
  return promise
};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
