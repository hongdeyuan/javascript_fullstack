https://dev.to/macsikora/advanced-typescript-exercises-question-1-45k4
# 1.
```ts
/**
 * If we have a type which is wrapped type like Promise. 
 * How we can get a type which is inside the wrapped type? 
 * For example if we have Promise<ExampleType> how to get ExampleType?
 */

type X = Promise<string>
type Y = Promise<{ field: number }>

type ResultX = Transform<X>; // ResultX type equals string
type ResultY = Transform<Y>; // ResultY type equals { field: number }

type Transform<A> = 'need complete' /** here your answer **/
```

# 2.
```ts
/**
 * In this question I will ask you, why TS fails here. 
 * And I can say there is a valid reason why such construct is wrong, 
 * its not a language bug. Can you spot why, 
 * and what is example type which proves TypeScript rightly prevents such code to compile?
 */
type User = {
    id: number;
    kind: string;
};

function makeCustomer<T extends User>(u: T): T {
    // Below error, why?
    return {
        id: u.id,
        kind: 'customer'
    }
}
```

# 3.
```ts
/**
 * Today's question is about typing function with two arguments being union type. 
 * The goal is to block possibility to pass mixed types into arguments, 
 * so if the first argument is a number then second also needs to be number, 
 * in other words there is dependency between arguments which we need to write.
 */
function f(a: string | number, b: string | number) {
    if (typeof a === 'string') {
        return a + ':' + b; // no error but b can be number!
    } else {
        return a + b; // error as b can be number | string
    }
}
f(2, 3); // correct usage
f(1, 'a'); // should be error
f('a', 2); // should be error
f('a', 'b') // correct usage
```

# 4.
```ts
/**
 * For given function type F, and any type A create a generic type which will take F as first argument, 
 * A as second and will produce function type G which will be the same as F 
 * but with appended argument A as a first one.
 */
// lets say we have some function type
type SomeF = (a: number, b: string) => number
// and we have our utility type
type AppendArgument<F, A> = 'need complete'//... here your code 💪

type FinalF = AppendArgument<SomeF, boolean>
// FinalF should be (x: boolean, a: number, b: string) => number
```

# 5.
```ts
/**
 * We have function getUser which gets Config object, the object defineswhat fields of User function will return. 
 * If for example config says { name: true, lastname: false } it meansreturned object should have name field non-optional 
 * but no field lastname. Current User type is very broad type of thereturn, 
 * we need to narrow it down depending on the config passed as argument ofgetUser. 
 * Solution should be done only at the type level, no value level codeshould be written. 
 * Only function declaration getUser is to be changed.
 */
// Here types should remain the same ❄
type Config = {
    name: boolean;
    lastname: boolean;
};
type User = {
    name?: string;
    lastname?: string;
};
// Here declaration to be changed 🔥
declare function getUser(
    config: Config
): User;
// test cases
const user = getUser({ name: true, lastname: false })
user.name // this field should be non-optional
user.lastname // this field should not be there and we should have compileerror 🛑
const user2 = getUser({ name: true, lastname: true })
user2.name // this field should be non-optional
user2.lastname // this field should be non-optional
const user3 = getUser({ name: false, lastname: true })
user3.name // this field should not be there and we should have compileerror 🛑
user3.lastname // this field should be non-optional
const user4 = getUser({ name: false, lastname: false })
user4 // user4 should be empty object {}
```

# 6.
```ts
type NaiveFlat<T extends any[]> = unknown // 🔥 here your code
// test case
type Naive = [['a'], ['b', 'c'], ['d']];
type NaiveResult = NaiveFlat<[['a'], ['b', 'c'], ['d']]>
// should evaluate to "a" | "b" | "c" | "d"
type DeepFlat<T extends any[]> = unknown // 🔥 here your code
// test case
type Deep = [['a'], ['b', 'c'], [['d']], [[[['e']]]]];
type DeepTestResult = DeepFlat<Deep>
// should evaluate to "a" | "b" | "c" | "d" | "e"
```

# 7.
```ts
type EmptyObject = {} // empty object only, 🔥 change the type to be exclusive for any field 

// test cases
const shouldPass: EmptyObject = {}; // this should be ok 🟢
const shouldFail: EmptyObject = {
    prop: 1 // here we should have compile error 🛑 
}
type SomeType = {
    prop: string
}
// change below function type definition 🔥 in order to allow only strictSomeType value
function takeSomeTypeOnly(x: SomeType) { return x }
// test cases
const x = { prop: 'a' };
takeSomeTypeOnly(x) // this should be ok 🟢
const y = { prop: 'a', addditionalProp: 'x' };
takeSomeTypeOnly(y) // here we should have compile error
```

# 8.
```ts
/**
 * We have a function concatToField which takes object, and key of this object, and string value. 
 * The purpose of this function is to create a new object with concatenated property object[key] with third argument.
 * The question - How to type generic types T and K in the definition of concatToField function in order to achieve compile time 
 * guarantee that obj[key] can be only string.
 */
const concatToField =
        <T /* here your code 💪*/, K /* here your code 💪*/>(obj: T, key: K, payload: string): T => {
            const prop = obj[key]; // compile error should not be here
            return { ...obj, [key]: prop.concat(payload) }; // compile error should not be here
        }
// tests
const test = { fieldStr: 'text', fieldNum: 1, fieldStr2: 'text' };
concatToField(test, 'fieldStr', 'test'); // should be ok 👌
concatToField(test, 'fieldNum', 'test'); // should be error fieldNum isnot string field 🛑
concatToField(test, 'notExistingField', 'test'); // should be error - nosuch field 🛑
concatToField(test, 'fieldStr2', 'test'); // should be ok 👌
```

# 9.
```ts
type NonEmptyArray<T> = /* your type level code here 💪 */
const a: NonEmptyArray < string > =[] // should be compilation error 🛑
const b: NonEmptyArray<string> = ['Hi TS'] // should be ok! 👌
```

# 10.
```ts
/**
 * Intersection type level operator & has changed in the last versions of TypeScript. 
 * The current behavior escalates 'never' type, so if any of fields will produce empty/never type, 
 * the whole composite will end as 'never'. Let's see some examples:
 * Exercise will be about having different intersection behavior. Our task is to write Merge type level function 
 * which will merge two product/object types. Our final Merge should be able to create a type 
 * from above X and Y in such a way that the latter type will overwrite types of fields of former type.
 */
type X = {
    a: 1
    b: number
}
type Y = {
    a: 2
    b: string
    c: boolean
}
// XY is never, as field 'a' evaluates as 1 & 2 which is never
type XY = X & Y
type XY = Merge<X, Y>
// XY should be {a: 2, b: string, c: boolean}
```