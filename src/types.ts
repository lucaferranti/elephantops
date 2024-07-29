export const FILE_NAMES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'] as const;

export type FileName = (typeof FILE_NAMES)[number];

export const RANK_NAMES = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] as const;

export type RankName = (typeof RANK_NAMES)[number];

export type Square = number;

export type SquareName = `${FileName}${RankName}`;

/**
 * Indexable by square indices.
 */
export type BySquare<T> = T[];

export const COLORS = ['red', 'black'] as const;

export type Color = (typeof COLORS)[number];

/**
 * Indexable by `red` and `black`.
 */
export type ByColor<T> = {
  [color in Color]: T;
};

export const ROLES = ['pawn', 'cannon', 'chariot', 'horse', 'elephant', 'advisor', 'king'] as const;

export type Role = (typeof ROLES)[number];

/**
 * Indexable by `pawn`, `cannon`, `chariot`, `horse`, `elephant`, `advisor`, and `king`.
 */
export type ByRole<T> = {
  [role in Role]: T;
};

export interface Piece {
  role: Role;
  color: Color;
}

export interface Move {
  from: Square;
  to: Square;
}

export const RULES = [
  'xiangqi',
] as const;

export type Rules = (typeof RULES)[number];

export interface Outcome {
  winner: Color | undefined;
}
