//测试回调函数
function fetchData(callback) {
  setTimeout(function () {
      var data = 'peanut butter'
      callback(data)
  }, 1000)
}

test('the data is peanut butter', done => {
  function callback(data) {
      try {
          expect(data).toBe('peanut butter');
          done();
      } catch (error) {
          done(error);
      }
  }

  fetchData(callback);
});

//测试promise
function fetch() {
  return new Promise(function (resolve, reject) {
      setTimeout(function () {
          var data = 'peanut butter'
          resolve(data)
          //reject('error')
          // 失败则调用 reject
      }, 2000)
  })
}

test('the data is peanut butter', () => {
  return fetch().then(data => {
      expect(data).toBe('peanut butter');
  });
});

//.resoluvs / .rejects

test('the data is peanut butter', () => {
  return expect(fetch()).resolves.toBe('peanut butter');
});

//   test('the fetch fails with an error', () => {
//     return expect(fetch()).rejects.toMatch('error');
//   });

//Async / Await

test('the data is peanut butter', async () => {
  const data = await fetch();
  expect(data).toBe('peanut butter');
});



//   test('the fetch fails with an error', async () => {
//     expect.assertions(1);
//     try {
//       await fetch();
//     } catch (e) {
//       expect(e).toMatch('error');
//     }
//   });

test('the data is peanut butter', async () => {
  await expect(fetch()).resolves.toBe('peanut butter');
});

//   test('the fetch fails with an error', async () => {
//     await expect(fetch()).rejects.toThrow('error');
//   });

