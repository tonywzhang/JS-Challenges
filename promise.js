// Promise.all(array){}

function fakeAjax(data){
  //return a promise
  // inside of this function use window.setTimeOut to fake latency

  const response =  'did you say you wanted ${data} donuts?';
  return new Promise((resolve, reject) => {
    window.setTimeout(() => resolve(response), 5000)
  })
}

fakeAjax(3).then((res)=> console.log(res));

function pAll(promArr){
  // return a promise with the responses of the other resolve promises as the res
  // exit early if any promise gets rejected
  // if eexits early due to a rejected promise, the return value is a rejected promise


}


pAll( [Promise.resolve('string'), Promise.resolve('string1'), Promise.resolve('string2'), Promise.reject(new Error("fail"))]);
