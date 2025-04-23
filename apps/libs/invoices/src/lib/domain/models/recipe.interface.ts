import { Ingredient } from './ingredient.interface';

export const FoodCategoryTypes = [
  'FOOD-CATEGORIES.ALL',
  'FOOD-CATEGORIES.WARM-DISHES',
  'FOOD-CATEGORIES.COLD-DISHES',
  'FOOD-CATEGORIES.SOAP',
  'FOOD-CATEGORIES.SNACK',
  'FOOD-CATEGORIES.OVEN',
  'FOOD-CATEGORIES.BREAKFAST',
] as const;
export type FoodCategory = (typeof FoodCategoryTypes)[number];

export interface RecipeIngredientDetail extends Ingredient {
  ico: string;
  qty: number;
}

export interface RecipeDetail {
  imgSrc: string;
  totalTime: string;
  ingredientDetails: RecipeIngredientDetail[];
  elaborationProccess: string;
}

export interface Recipe {
  id: string;
  name: string;
  imgSrc: string;
  category: FoodCategory[];
  detail: RecipeDetail;
}
