export interface RuleSet {
  [key: string | number | symbol]: (value: unknown) => boolean;
}

/**
 * isFalsy is a function that checks if a value is falsy
 * @param value - The value to check
 * @returns - True if the value is falsy
 */
const isFalsy = <T>(value: T): boolean =>
  ["undefined", "null", "NaN", "false", "0", ""].includes(String(value));

/**
 * objectKeys is a function that returns the keys of an object
 * @param value - The object to get the keys from
 * @returns - The keys of the object
 */
const objectKeys = <T extends object>(value: T): (keyof T)[] =>
  Object.keys(value) as (keyof T)[];

/**
 * getDebugEnabled - Checks if the debug flag is set to true
 * @returns - True if the value is a string
 */
export const getDebugEnabled = (): boolean => !isFalsy(process.env.DEBUG);

/**
 * getFailedKeysForTypeguard is a function that returns the keys that failed the typeguard
 * @param obj - The object to check
 * @param ruleSet - The ruleset to check the object against
 * @returns - The keys that failed the typeguard
 * @example
 * const ruleSet = {
 *  name: isString,
 *  age: isNumber,
 * };
 * const obj = {
 *  name: 'John',
 *  age: 30,
 * };
 * const failedKeys = getFailedKeysForTypeguard(obj, ruleSet);
 * // failedKeys = []
 * @example
 * const ruleSet = {
 *  name: isString,
 *  age: isNumber,
 * };
 * const obj = {
 * name: 'John',
 * age: '30',
 * };
 * const failedKeys = getFailedKeysForTypeguard(obj, ruleSet);
 * // failedKeys = ['age']
 */
export const getFailedKeysForTypeguard = <T extends Record<string | number | symbol, unknown>>(
  obj: T,
  ruleSet: RuleSet
): string[] =>
  Object.keys(ruleSet).reduce((acc, key) => {
    const rule = ruleSet[key];
    const value = obj[key];
    const passed = rule(value);
    if (!passed) {
      acc.push(String(key));
    }
    return acc;
  }, [] as string[]);

/**
 * getInvalidKeysForTypeguard is a function that returns the keys that failed the typeguard
 * @param obj - The object to check
 * @param ruleSet - The ruleset to check the object against
 * @returns - The keys that failed the typeguard
 * @example
 * const ruleSet = {
 *  name: isString,
 *  age: isNumber,
 * };
 * const obj = {
 *  name: 'John',
 *  age: 30,
 * };
 * const invalidKeys = getInvalidKeysForTypeguard(obj, ruleSet);
 * // invalidKeys = []
 * @example
 * const ruleSet = {
 *  name: isString,
 *  age: isNumber,
 * };
 * const obj = {
 *  name: 'John',
 *  age: '30',
 * };
 * const invalidKeys = getInvalidKeysForTypeguard(obj, ruleSet);
 * // invalidKeys = ['age']
 */
export const getInvalidKeysForTypeguard = <T extends object>(
  obj: T,
  ruleSet: RuleSet
): (keyof T)[] =>
  objectKeys(obj).filter((key) => !objectKeys(ruleSet).includes(key));

/**
 * isType is a function that checks if an object is of a certain type
 * @param obj - The object to check
 * @param ruleSet - The ruleset to check the object against
 * @returns - True if the object is of the type
 * @example
 * const ruleSet = {
 *  name: isString,
 *  age: isNumber,
 * };
 * const obj = {
 *  name: 'John',
 *  age: 30,
 * };
 * const isPerson = isType(obj, ruleSet);
 * // isPerson = true
 * @example
 * const ruleSet = {
 *  name: isString,
 *  age: isNumber,
 * };
 * const obj = {
 *  name: 'John',
 *  age: '30',
 * };
 * const isPerson = isType(obj, ruleSet);
 * // isPerson = false
 */
export const isType = <T extends Record<string | number | symbol, unknown>>(
  obj: T,
  ruleSet: RuleSet,
  strict = false
): obj is T => {
  const debug = getDebugEnabled();
  const output: string[] = [];

  if (!obj) {
    if (debug) {
      output.push("============ Failed Typeguard ==============");
      output.push("Object is null or undefined or empty");
      output.push(`Rule: ${String(ruleSet)}`);
      console.debug(output);
    }
    return false;
  }

  if (!isTrueObject(obj)) {
    if (debug) {
      output.push("typecheck on non-object: " + obj);
      console.debug(output);
    }
    return false;
  }

  const invalidKeys = getInvalidKeysForTypeguard(obj, ruleSet);
  const failedKeys = getFailedKeysForTypeguard(obj, ruleSet);

  const strictlyValid: boolean = strict ? invalidKeys.length > 0 : true;
  if (!failedKeys.length && strictlyValid) {
    return true;
  }

  if (debug) {
    output.push("============ Failed Typeguard ==============");
    output.push(`Object: ${JSON.stringify(obj)}`);
    if (invalidKeys.length) {
      output.push("============== Invalid Keys =================");
      output.push(JSON.stringify(invalidKeys));
    }

    if (failedKeys.length) {
      console.log(ruleSet);
      console.log(obj);
      output.push("============== Failed Keys =================");
      failedKeys.forEach((key) => {
        output.push(
          `Key: ${String(key)} - Value: ${JSON.stringify(
            obj[key]
          )} - Rule: ${String(ruleSet[key])}`
        );
      });
    }

    console.debug(output);
  }

  return false;
};

export const isArrayOfType = <T>(
  values: unknown,
  typeguard: (value: unknown) => value is T
): values is T[] => isArray(values) && values.every(typeguard);

/**
 * StringIndexObject is a type that represents an object with string keys
 * @example
 * const obj: StringIndexObject = {
 *  name: 'John',
 *  age: 30,
 * };
 * // obj = { name: 'John', age: 30 }
 */
export type StringIndexObject = object & {
  [key: string]: unknown;
};

/**
 * isTrueObject is a function that checks if a value is an object
 * @param value - The value to check
 * @returns - True if the value is an object
 * @example
 * const obj = {
 *  name: 'John',
 *  age: 30,
 * };
 * const isTrueObject = isTrueObject(obj);
 * // isTrueObject = true
 */
export const isTrueObject = (value: unknown): value is StringIndexObject =>
  isObject(value) && !isArray(value);

/**
 * optional is a function that returns a typeguard that checks if a value is of a certain type or undefined
 * @param typeguard - The typeguard to check the value against
 * @returns - A typeguard that checks if a value is of a certain type or undefined
 * @example
 * const isStringOrUndefined = optional(isString);
 * const value = 'John';
 * const isStringOrUndefined = isStringOrUndefined(value);
 * // isStringOrUndefined = true
 * @example
 * const isStringOrUndefined = optional(isString);
 * const value = undefined;
 * const isStringOrUndefined = isStringOrUndefined(value);
 * // isStringOrUndefined = true
 * @example
 * const isStringOrUndefined = optional(isString);
 * const value = 30;
 * const isStringOrUndefined = isStringOrUndefined(value);
 * // isStringOrUndefined = false
 */
export const optional =
  (isValidValue: <T>(value: T) => boolean) =>
  <T>(value: T) =>
    value == null ? true : isValidValue(value);

/**
 * isString is a function that checks if a value is a string
 * @param value - The value to check
 * @returns - True if the value is a string
 * @example
 * const value = 'John';
 * const isString = isString(value);
 * // isString = true
 * @example
 * const value = 30;
 * const isString = isString(value);
 * // isString = false
 */
export const isString = (value: unknown): value is string =>
  typeof value === "string";

/**
 * isNonEmptyString is a function that checks if a value is a non-empty string
 * @param value - The value to check
 * @returns - True if the value is a non-empty string
 * @example
 * const value = 'John';
 * const isNonEmptyString = isNonEmptyString(value);
 * // isNonEmptyString = true
 * @example
 * const value = '';
 * const isNonEmptyString = isNonEmptyString(value);
 * // isNonEmptyString = false
 * @example
 * const value = 30;
 * const isNonEmptyString = isNonEmptyString(value);
 * // isNonEmptyString = false
 * @example
 * const value = undefined;
 * const isNonEmptyString = isNonEmptyString(value);
 * // isNonEmptyString = false
 * @example
 * const value = null;
 * const isNonEmptyString = isNonEmptyString(value);
 * // isNonEmptyString = false
 * @example
 * const value = '';
 * const isNonEmptyString = isNonEmptyString(value);
 * // isNonEmptyString = false
 */
export const isNonEmptyString = (value: unknown): value is string =>
  !!value && typeof value === "string";

/**
 * isNumber is a function that checks if a value is a number
 * @param value - The value to check
 * @returns - True if the value is a number
 * @example
 * const value = 30;
 * const isNumber = isNumber(value);
 * // isNumber = true
 * @example
 * const value = 'John';
 * const isNumber = isNumber(value);
 * // isNumber = false
 */
export const isNumber = (value: unknown): value is number =>
  typeof value === "number";

/**
 * isBool is a function that checks if a value is a boolean
 * @param value - The value to check
 * @returns - True if the value is a boolean
 * @example
 * const value = true;
 * const isBool = isBool(value);
 * // isBool = true
 * @example
 * const value = 'John';
 * const isBool = isBool(value);
 * // isBool = false
 */
export const isBool = (value: unknown): value is boolean =>
  typeof value === "boolean";

/**
 * isObject is a function that checks if a value is an object
 * @param value - The value to check
 * @returns - True if the value is an object
 * @example
 * const value = { name: 'John', age: 30 };
 * const isObject = isObject(value);
 * // isObject = true
 * @example
 * const value = 'John';
 * const isObject = isObject(value);
 * // isObject = false
 */
export const isObject = (value: unknown): value is object =>
  typeof value === "object";

/**
 * isArray is a function that checks if a value is an array
 * @param value - The value to check
 * @returns - True if the value is an array
 * @example
 * const value = [1, 2, 3];
 * const isArray = isArray(value);
 * // isArray = true
 * @example
 * const value = 'John';
 * const isArray = isArray(value);
 * // isArray = false
 * @example
 * const value = { name: 'John', age: 30 };
 * const isArray = isArray(value);
 * // isArray = false
 */
export const isArray = (value: unknown): value is [] => Array.isArray(value);

/**
 * isArrayOrString is a function that checks if a value is an array or a string
 * @param value - The value to check
 * @returns - True if the value is an array or a string
 * @example
 * const value = [1, 2, 3];
 * const isArrayOrString = isArrayOrString(value);
 * // isArrayOrString = true
 * @example
 * const value = 'John';
 * const isArrayOrString = isArrayOrString(value);
 * // isArrayOrString = true
 * @example
 * const value = { name: 'John', age: 30 };
 * const isArrayOrString = isArrayOrString(value);
 * // isArrayOrString = false
 */
export const isArrayOrString = (value: unknown): boolean =>
  isArray(value) || isString(value);

/**
 * REGEX_UUID is a regex that checks if a string is a valid uuid
 * @example
 * const value = '123e4567-e89b-12d3-a456-426655440000';
 * const isUuid = REGEX_UUID.test(value);
 * // isUuid = true
 */
export const REGEX_UUID =
  /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

/**
 * isUUID is a function that checks if a value is a UUID
 * @param value - The value to check
 * @returns - True if the value is a UUID
 * @example
 * const value = 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11';
 * const isUUID = isUUID(value);
 * // isUUID = true
 * @example
 * const value = 'John';
 * const isUUID = isUUID(value);
 * // isUUID = false
 */
export const isUUID = (value: unknown): value is string =>
  isNonEmptyString(value) && REGEX_UUID.test(value);

/**
 * isUUIDv4 is a function that checks if a value is a UUID v4
 * @param value - The value to check
 * @returns - True if the value is a UUID v4
 * @example
 * const value = 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11';
 * const isUUIDv4 = isUUIDv4(value);
 * // isUUIDv4 = true
 * @example
 * const value = 'John';
 * const isUUIDv4 = isUUIDv4(value);
 * // isUUIDv4 = false
 * @example
 * const value = 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12';
 * const isUUIDv4 = isUUIDv4(value);
 * // isUUIDv4 = false
 */
export const isUUIDv4 = (value: unknown): value is string =>
  isUUID(value) && parseInt(value.substr(14, 1), 16) === 4;
