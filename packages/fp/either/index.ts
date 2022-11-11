/**
 * Either represents a value of one of two possible types (a disjoint union).
 * Instances of Either are either an instance of Left or Right.
 * The Either type is sometimes used to represent a value which is either
 * correct or an error; by convention, the Left constructor is used to hold an error value and
 * the Right constructor is used to hold a correct value (mnemonic: "right" also means "correct").
 * @data
 * @constructor Left
 * @constructor Right
 * @class
 * @param {L} left - The left side of the disjunction
 * @param {R} right - The right side of the disjunction
 * @example
 * import { Left, Right } from '@nanlabs/fp';
 *
 * const left: Either<string, number> = Left('error');
 * const right: Either<string, number> = Right(1);
 */
export type Either<L, R> = Left<L> | Right<R>;

/**
 * Left represents the left side of the Either type constructor, as opposed to the Right side.
 * @data
 * @constructor Left
 * @class
 * @param {L} left - The left side of the disjunction
 * @example
 * import { Left } from '@nanlabs/fp';
 *
 * const left: Left<string> = Left('error');
 */
export declare class Left<L> {
  readonly value: L;
  constructor(value: L);
  isLeft(): this is Left<L>;
  isRight(): this is Right<unknown>;
}

/**
 * Right represents the right side of the Either type constructor, as opposed to the Left side.
 * @data
 * @constructor Right
 * @class
 * @param {R} right - The right side of the disjunction
 * @example
 * import { Right } from '@nanlabs/fp';
 *
 * const right: Right<number> = Right(1);
 */
export declare class Right<R> {
  readonly value: R;
  constructor(value: R);
  isLeft(): this is Left<unknown>;
  isRight(): this is Right<R>;
}
