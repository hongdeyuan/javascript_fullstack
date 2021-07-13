https://typescript-exercises.github.io/

# 1.
```ts
/*

Intro:

    We are starting a small community of users. For performance
    reasons we have decided to store all users right in the code.
    This way we can provide our developers with more
    user-interaction opportunities. With user-related data, at least.
    All the GDPR-related issues we will solved some other day.
    This would be the base for our future experiments during
    these exercises.

Exercise:

    Given the data, define the interface "User" and use it accordingly.

*/

export type User = unknown;

export const users: unknown[] = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut'
  }
];

export function logPerson(user: unknown) {
  console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);
```

# 2.
```ts
/*

Intro:

    All 2 users liked the idea of the community. We should go
    forward and introduce some order. We are in Germany after all.
    Let's add a couple of admins.

    Initially we only had users in the in-memory database. After
    introducing Admins, we need to fix the types so that
    everything works well together.

Exercise:

    Type "Person" is missing, please define it and use
    it in persons array and logPerson function in order to fix
    all the TS errors.

*/

interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

export type Person = unknown;

export const persons: User[] /* <- Person[] */ = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
  },
  {
    name: 'Jane Doe',
    age: 32,
    role: 'Administrator'
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut'
  },
  {
    name: 'Bruce Willis',
    age: 64,
    role: 'World saver'
  }
];

export function logPerson(user: User) {
  console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);
```

# 3.
```ts
/*

Intro:

    Since we already have some of the additional
    information about our users, it's a good idea
    to output it in a nice way.

Exercise:

    Fix type errors in logPerson function.

    logPerson function should accept both User and Admin
    and should output relevant information according to
    the input: occupation for User and role for Admin.

*/

interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
  },
  {
    name: 'Jane Doe',
    age: 32,
    role: 'Administrator'
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut'
  },
  {
    name: 'Bruce Willis',
    age: 64,
    role: 'World saver'
  }
];

export function logPerson(person: Person) {
  let additionalInformation: string;
  if (person.role) {
    additionalInformation = person.role;
  } else {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);
```

# 4.
```ts
/*

Intro:

    As we introduced "type" to both User and Admin
    it's now easier to distinguish between them.
    Once object type checking logic was extracted
    into separate functions isUser and isAdmin -
    logPerson function got new type errors.

Exercise:

    Figure out how to help TypeScript understand types in
    this situation and apply necessary fixes.

*/

interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
  { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
  { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
  { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];

export function isAdmin(person: Person) {
  return person.type === 'admin';
}

export function isUser(person: Person) {
  return person.type === 'user';
}

export function logPerson(person: Person) {
  let additionalInformation: string = '';
  if (isAdmin(person)) {
    additionalInformation = person.role;
  }
  if (isUser(person)) {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);
```

# 5.
```ts
/*

Intro:

    Time to filter the data! In order to be flexible
    we filter users using a number of criteria and
    return only those matching all of the criteria.
    We don't need Admins yet, we only filter Users.

Exercise:

    Without duplicating type structures, modify
    filterUsers function definition so that we can
    pass only those criteria which are needed,
    and not the whole User information as it is
    required now according to typing.

Higher difficulty bonus exercise:

    Exclude "type" from filter criterias.

*/

interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
  {
    type: 'admin',
    name: 'Jane Doe',
    age: 32,
    role: 'Administrator'
  },
  {
    type: 'user',
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut'
  },
  {
    type: 'admin',
    name: 'Bruce Willis',
    age: 64,
    role: 'World saver'
  },
  {
    type: 'user',
    name: 'Wilson',
    age: 23,
    occupation: 'Ball'
  },
  {
    type: 'admin',
    name: 'Agent Smith',
    age: 23,
    role: 'Administrator'
  }
];

export const isAdmin = (person: Person): person is Admin => person.type === 'admin';
export const isUser = (person: Person): person is User => person.type === 'user';

export function logPerson(person: Person) {
  let additionalInformation = '';
  if (isAdmin(person)) {
    additionalInformation = person.role;
  }
  if (isUser(person)) {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

export function filterUsers(persons: Person[], criteria: User): User[] {
  return persons.filter(isUser).filter((user) => {
    const criteriaKeys = Object.keys(criteria) as (keyof User)[];
    return criteriaKeys.every((fieldName) => {
      return user[fieldName] === criteria[fieldName];
    });
  });
}

console.log('Users of age 23:');

filterUsers(
  persons,
  {
    age: 23
  }
).forEach(logPerson);

console.log('Users of name Kate Müller:');

filterUsers(
  persons,
  {
    name: 'Kate Müller'
  }
).forEach(logPerson);
```

# 6.
```ts
/*

Intro:

    Filtering requirements have grown. We need to be
    able to filter any kind of Persons.

Exercise:

    Fix typing for the filterPersons so that it can filter users
    and return User[] when personType='user' and return Admin[]
    when personType='admin'. Also filterPersons should accept
    partial User/Admin type according to the personType.
    `criteria` argument should behave according to the
    `personType` argument value. `type` field is not allowed in
    the `criteria` field.

Higher difficulty bonus exercise:

    Implement a function `getObjectKeys()` which returns more
    convenient result for any argument given, so that you don't
    need to cast it.

    let criteriaKeys = Object.keys(criteria) as (keyof User)[];
    -->
    let criteriaKeys = getObjectKeys(criteria);

*/

interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
  { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
  { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
  { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
  { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
  { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' }
];

export function logPerson(person: Person) {
  console.log(
    ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
  );
}

export function filterPersons(persons: Person[], personType: string, criteria: unknown): unknown[] {
  return persons
    .filter((person) => person.type === personType)
    .filter((person) => {
      let criteriaKeys = Object.keys(criteria) as (keyof Person)[];
      return criteriaKeys.every((fieldName) => {
        return person[fieldName] === criteria[fieldName];
      });
    });
}

export const usersOfAge23 = filterPersons(persons, 'user', { age: 23 });
export const adminsOfAge23 = filterPersons(persons, 'admin', { age: 23 });

console.log('Users of age 23:');
usersOfAge23.forEach(logPerson);

console.log();

console.log('Admins of age 23:');
adminsOfAge23.forEach(logPerson);
```

# 7.
```ts
/*

Exercise:

    Implement swap which receives 2 persons and returns them in
    the reverse order. The function itself is already
    there, actually. We just need to provide it with proper types.
    Also this function shouldn't necessarily be limited to just
    Person types, lets type it so that it works with any two types
    specified.

*/

interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

function logUser(user: User) {
  const pos = users.indexOf(user) + 1;
  console.log(` - #${pos} User: ${user.name}, ${user.age}, ${user.occupation}`);
}

function logAdmin(admin: Admin) {
  const pos = admins.indexOf(admin) + 1;
  console.log(` - #${pos} Admin: ${admin.name}, ${admin.age}, ${admin.role}`);
}

const admins: Admin[] = [
  {
    type: 'admin',
    name: 'Will Bruces',
    age: 30,
    role: 'Overseer'
  },
  {
    type: 'admin',
    name: 'Steve',
    age: 40,
    role: 'Steve'
  }
];

const users: User[] = [
  {
    type: 'user',
    name: 'Moses',
    age: 70,
    occupation: 'Desert guide'
  },
  {
    type: 'user',
    name: 'Superman',
    age: 28,
    occupation: 'Ordinary person'
  }
];

export function swap(v1, v2) {
  return [v2, v1];
}

function test1() {
  console.log('test1:');
  const [secondUser, firstAdmin] = swap(admins[0], users[1]);
  logUser(secondUser);
  logAdmin(firstAdmin);
}

function test2() {
  console.log('test2:');
  const [secondAdmin, firstUser] = swap(users[0], admins[1]);
  logAdmin(secondAdmin);
  logUser(firstUser);
}

function test3() {
  console.log('test3:');
  const [secondUser, firstUser] = swap(users[0], users[1]);
  logUser(secondUser);
  logUser(firstUser);
}

function test4() {
  console.log('test4:');
  const [firstAdmin, secondAdmin] = swap(admins[1], admins[0]);
  logAdmin(firstAdmin);
  logAdmin(secondAdmin);
}

function test5() {
  console.log('test5:');
  const [stringValue, numericValue] = swap(123, 'Hello World');
  console.log(` - String: ${stringValue}`);
  console.log(` - Numeric: ${numericValue}`);
}

[test1, test2, test3, test4, test5].forEach((test) => test());
```

# 8.
```ts
/*

Intro:

    Project grew and we ended up in a situation with
    some users starting to have more influence.
    Therefore, we decided to create a new person type
    called PowerUser which is supposed to combine
    everything User and Admin have.

Exercise:

    Define type PowerUser which should have all fields
    from both User and Admin (except for type),
    and also have type 'powerUser' without duplicating
    all the fields in the code.

*/

interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

type PowerUser = unknown;

export type Person = User | Admin | PowerUser;

export const persons: Person[] = [
  { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
  { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
  { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
  { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
  {
    type: 'powerUser',
    name: 'Nikki Stone',
    age: 45,
    role: 'Moderator',
    occupation: 'Cat groomer'
  }
];

function isAdmin(person: Person): person is Admin {
  return person.type === 'admin';
}

function isUser(person: Person): person is User {
  return person.type === 'user';
}

function isPowerUser(person: Person): person is PowerUser {
  return person.type === 'powerUser';
}

export function logPerson(person: Person) {
  let additionalInformation: string = '';
  if (isAdmin(person)) {
    additionalInformation = person.role;
  }
  if (isUser(person)) {
    additionalInformation = person.occupation;
  }
  if (isPowerUser(person)) {
    additionalInformation = `${person.role}, ${person.occupation}`;
  }
  console.log(`${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);

console.log();

console.log('Power users:');
persons.filter(isPowerUser).forEach(logPerson);
```

# 9.
```ts
/*

    Intro:

        PowerUsers idea was bad. Once those users got
        extended permissions, they started bullying others
        and we lost a lot of great users.
        As a response we spent all the remaining money
        on the marketing and got even more users.
        We need to start preparing to move everything to a
        real database. For now we just do some mocks.

        The server API format was decided to be the following:

        In case of success: { status: 'success', data: RESPONSE_DATA }
        In case of error: { status: 'error', error: ERROR_MESSAGE }

        The API engineer started creating types for this API and
        quickly figured out that the amount of types needed to be
        created is too big.

Exercise:

    Remove UsersApiResponse and AdminsApiResponse types
    and use generic type ApiResponse in order to specify API
    response formats for each of the functions.

*/

interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const admins: Admin[] = [
  { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
  { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];

const users: User[] = [
  { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
  { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' }
];

export type ApiResponse<T> = unknown;

type AdminsApiResponse = (
  {
    status: 'success';
    data: Admin[];
  } |
  {
    status: 'error';
    error: string;
  }
);

export function requestAdmins(callback: (response: AdminsApiResponse) => void) {
  callback({
    status: 'success',
    data: admins
  });
}

type UsersApiResponse = (
  {
    status: 'success';
    data: User[];
  } |
  {
    status: 'error';
    error: string;
  }
);

export function requestUsers(callback: (response: UsersApiResponse) => void) {
  callback({
    status: 'success',
    data: users
  });
}

export function requestCurrentServerTime(callback: (response: unknown) => void) {
  callback({
    status: 'success',
    data: Date.now()
  });
}

export function requestCoffeeMachineQueueLength(callback: (response: unknown) => void) {
  callback({
    status: 'error',
    error: 'Numeric value has exceeded Number.MAX_SAFE_INTEGER.'
  });
}

function logPerson(person: Person) {
  console.log(
    ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
  );
}

function startTheApp(callback: (error: Error | null) => void) {
  requestAdmins((adminsResponse) => {
    console.log('Admins:');
    if (adminsResponse.status === 'success') {
      adminsResponse.data.forEach(logPerson);
    } else {
      return callback(new Error(adminsResponse.error));
    }

    console.log();

    requestUsers((usersResponse) => {
      console.log('Users:');
      if (usersResponse.status === 'success') {
        usersResponse.data.forEach(logPerson);
      } else {
        return callback(new Error(usersResponse.error));
      }

      console.log();

      requestCurrentServerTime((serverTimeResponse) => {
        console.log('Server time:');
        if (serverTimeResponse.status === 'success') {
          console.log(`   ${new Date(serverTimeResponse.data).toLocaleString()}`);
        } else {
          return callback(new Error(serverTimeResponse.error));
        }

        console.log();

        requestCoffeeMachineQueueLength((coffeeMachineQueueLengthResponse) => {
          console.log('Coffee machine queue length:');
          if (coffeeMachineQueueLengthResponse.status === 'success') {
            console.log(`   ${coffeeMachineQueueLengthResponse.data}`);
          } else {
            return callback(new Error(coffeeMachineQueueLengthResponse.error));
          }

          callback(null);
        });
      });
    });
  });
}

startTheApp((e: Error | null) => {
  console.log();
  if (e) {
    console.log(`Error: "${e.message}", but it's fine, sometimes errors are inevitable.`)
  } else {
    console.log('Success!');
  }
});
```

# 10.
```ts
/*

Intro:

    We have asynchronous functions now, advanced technology.
    This makes us a tech startup officially now.
    But one of the consultants spoiled our dreams about
    inevitable future IT leadership.
    He said that callback-based asynchronicity is not
    popular anymore and everyone should use Promises.
    He promised that if we switch to Promises, this would
    bring promising results.

Exercise:

    We don't want to reimplement all the data-requesting
    functions. Let's decorate the old callback-based
    functions with the new Promise-compatible result.
    The final function should return a Promise which
    would resolve with the final data directly
    (i.e. users or admins) or would reject with an error
    (or type Error).

    The function should be named promisify.

Higher difficulty bonus exercise:

    Create a function promisifyAll which accepts an object
    with functions and returns a new object where each of
    the function is promisified.

    Rewrite api creation accordingly:

        const api = promisifyAll(oldApi);

*/

interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const admins: Admin[] = [
  { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
  { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];

const users: User[] = [
  { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
  { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' }
];

export type ApiResponse<T> = (
  {
    status: 'success';
    data: T;
  } |
  {
    status: 'error';
    error: string;
  }
);

export function promisify(arg: unknown): unknown {
  return null;
}

const oldApi = {
  requestAdmins(callback: (response: ApiResponse<Admin[]>) => void) {
    callback({
      status: 'success',
      data: admins
    });
  },
  requestUsers(callback: (response: ApiResponse<User[]>) => void) {
    callback({
      status: 'success',
      data: users
    });
  },
  requestCurrentServerTime(callback: (response: ApiResponse<number>) => void) {
    callback({
      status: 'success',
      data: Date.now()
    });
  },
  requestCoffeeMachineQueueLength(callback: (response: ApiResponse<number>) => void) {
    callback({
      status: 'error',
      error: 'Numeric value has exceeded Number.MAX_SAFE_INTEGER.'
    });
  }
};

export const api = {
  requestAdmins: promisify(oldApi.requestAdmins),
  requestUsers: promisify(oldApi.requestUsers),
  requestCurrentServerTime: promisify(oldApi.requestCurrentServerTime),
  requestCoffeeMachineQueueLength: promisify(oldApi.requestCoffeeMachineQueueLength)
};

function logPerson(person: Person) {
  console.log(
    ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
  );
}

async function startTheApp() {
  console.log('Admins:');
  (await api.requestAdmins()).forEach(logPerson);
  console.log();

  console.log('Users:');
  (await api.requestUsers()).forEach(logPerson);
  console.log();

  console.log('Server time:');
  console.log(`   ${new Date(await api.requestCurrentServerTime()).toLocaleString()}`);
  console.log();

  console.log('Coffee machine queue length:');
  console.log(`   ${await api.requestCoffeeMachineQueueLength()}`);
}

startTheApp().then(
  () => {
    console.log('Success!');
  },
  (e: Error) => {
    console.log(`Error: "${e.message}", but it's fine, sometimes errors are inevitable.`);
  }
);
```

# 11.
```ts
/*

Intro:

    For some unknown reason most of our developers left
    the company. We need to actively hire now.
    In the media we've read that companies that invent
    and publish new technologies attract more potential
    candidates. We need to use this opportunity and
    invent and publish some npm packages. Following the
    new trend of functional programming in JS we
    decided to develop a functional utility library.
    This will put us on the bleading edge since we are
    pretty much sure no one else did anything similar.
    We also provided some jsdoc along with the
    functions, but it might sometimes be inaccurate.

Exercise:

    Provide proper typing for the specified functions.

Bonus:

    Could you please also refactor the code to reduce
    code duplication?
    You might need some excessive type casting to make
    it really short.

*/

/**
 * 2 arguments passed: returns a new array
 * which is a result of input being mapped using
 * the specified mapper.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being mapped using original mapper.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} mapper
 * @param {Array} input
 * @return {Array | Function}
 */
 export function map(mapper, input) {
  if (arguments.length === 0) {
      return map;
  }
  if (arguments.length === 1) {
      return function subFunction(subInput) {
          if (arguments.length === 0) {
              return subFunction;
          }
          return subInput.map(mapper);
      };
  }
  return input.map(mapper);
}

/**
* 2 arguments passed: returns a new array
* which is a result of input being filtered using
* the specified filter function.
*
* 1 argument passed: returns a function which accepts
* an input and returns a new array which is a result
* of input being filtered using original filter
* function.
*
* 0 arguments passed: returns itself.
*
* @param {Function} filterer
* @param {Array} input
* @return {Array | Function}
*/
export function filter(filterer, input) {
  if (arguments.length === 0) {
      return filter;
  }
  if (arguments.length === 1) {
      return function subFunction(subInput) {
          if (arguments.length === 0) {
              return subFunction;
          }
          return subInput.filter(filterer);
      };
  }
  return input.filter(filterer);
}

/**
* 3 arguments passed: reduces input array it using the
* specified reducer and initial value and returns
* the result.
*
* 2 arguments passed: returns a function which accepts
* input array and reduces it using previously specified
* reducer and initial value and returns the result.
*
* 1 argument passed: returns a function which:
*   * when 2 arguments is passed to the subfunction, it
*     reduces the input array using specified initial
*     value and previously specified reducer and returns
*     the result.
*   * when 1 argument is passed to the subfunction, it
*     returns a function which expects the input array
*     and reduces the specified input array using
*     previously specified reducer and inital value.
*   * when 0 argument is passed to the subfunction, it
*     returns itself.
*
* 0 arguments passed: returns itself.
*
* @param {Function} reducer
* @param {*} initialValue
* @param {Array} input
* @return {* | Function}
*/
export function reduce(reducer, initialValue, input) {
  if (arguments.length === 0) {
      return reduce;
  }
  if (arguments.length === 1) {
      return function subFunction(subInitialValue, subInput) {
          if (arguments.length === 0) {
              return subFunction;
          }
          if (arguments.length === 1) {
              return function subSubFunction(subSubInput) {
                  if (arguments.length === 0) {
                      return subSubFunction;
                  }
                  return subSubInput.reduce(reducer, subInitialValue);
              };
          }
          return subInput.reduce(reducer,subInitialValue);
      }
  }
  if (arguments.length === 2) {
      return function subFunction(subInput) {
          if (arguments.length === 0) {
              return subFunction;
          }
          return subInput.reduce(reducer, initialValue);
      };
  }
  return input.reduce(reducer, initialValue);
}

/**
* 2 arguments passed: returns sum of a and b.
*
* 1 argument passed: returns a function which expects
* b and returns sum of a and b.
*
* 0 arguments passed: returns itself.
*
* @param {Number} a
* @param {Number} b
* @return {Number | Function}
*/
export function add(a, b) {
  if (arguments.length === 0) {
      return add;
  }
  if (arguments.length === 1) {
      return function subFunction(subB) {
          if (arguments.length === 0) {
              return subFunction;
          }
          return a + subB;
      };
  }
  return a + b;
}

/**
* 2 arguments passed: subtracts b from a and
* returns the result.
*
* 1 argument passed: returns a function which expects
* b and subtracts b from a and returns the result.
*
* 0 arguments passed: returns itself.
*
* @param {Number} a
* @param {Number} b
* @return {Number | Function}
*/
export function subtract(a, b) {
  if (arguments.length === 0) {
      return subtract;
  }
  if (arguments.length === 1) {
      return function subFunction(subB) {
          if (arguments.length === 0) {
              return subFunction;
          }
          return a - subB;
      };
  }
  return a - b;
}

/**
* 2 arguments passed: returns value of property
* propName of the specified object.
*
* 1 argument passed: returns a function which expects
* propName and returns value of property propName
* of the specified object.
*
* 0 arguments passed: returns itself.
*
* @param {Object} obj
* @param {String} propName
* @return {* | Function}
*/
export function prop(obj, propName) {
  if (arguments.length === 0) {
      return prop;
  }
  if (arguments.length === 1) {
      return function subFunction(subPropName) {
          if (arguments.length === 0) {
              return subFunction;
          }
          return obj[subPropName];
      };
  }
  return obj[propName];
}

/**
* >0 arguments passed: expects each argument to be
* a function. Returns a function which accepts the
* same arguments as the first function. Passes these
* arguments to the first function, the result of
* the first function passes to the second function,
* the result of the second function to the third
* function... and so on. Returns the result of the
* last function execution.
*
* 0 arguments passed: returns itself.
*
* TODO TypeScript
*   * Should properly handle at least 5 arguments.
*   * Should also make sure argument of the next
*     function matches the return type of the previous
*     function.
*
* @param {Function[]} functions
* @return {*}
*/
export function pipe(...functions) {
  if (arguments.length === 0) {
      return pipe;
  }
  return function subFunction() {
      let nextArguments = Array.from(arguments);
      let result;
      for (const func of functions) {
          result = func(...nextArguments);
          nextArguments = [result];
      }
      return result;
  };
}
```

# 12.
```ts
/*

Intro:

    Our attempt to Open Source didn't work quite as
    expected. It turned out there were already many
    existing functional JS libraries.

    All the remaining developers left the company as
    well. It seems that they are joining a very
    ambitious startup which re-invented a juicer and
    raised millions of dollars.
    Too bad we cannot compete with this kind of
    financing even though we believe our idea is
    great.

    It's time to shine for the last time and publish
    our new invention: object-constructor as our CTO
    named it. A small library which helps
    manipulating an object.

Exercise:

    Here is a library which helps manipulating objects.
    We tried to write type annotations and we failed.
    Please help!

*/

Object
export class ObjectManipulator<T> {

    constructor(protected obj:T) {}

    public set(key:keyof T, value:T[]) {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get(key:keyof T) {
        return this.obj[key];
    }

    public delete(key:keyof T) {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject() {
        return this.obj;
    }
}
```