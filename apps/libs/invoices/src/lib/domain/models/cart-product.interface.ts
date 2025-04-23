import { Recipe, RecipeIngredientDetail } from './recipe.interface';

export interface CartProduct extends Omit<Recipe, 'category' | 'detail'> {
  qty: number;
  ingredients: RecipeIngredientDetail[];
}
