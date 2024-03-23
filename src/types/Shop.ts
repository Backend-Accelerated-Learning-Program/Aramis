import IEntity from "./Entity";
import IItem from "./Item";

interface IShop<T> extends IEntity {
  catalog: Array<T>
}

export default IShop;