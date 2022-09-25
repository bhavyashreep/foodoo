import { get } from "../common/remote/base_api";

export const getAllRecipes = () => {
  return get("api/v1/items");
};
