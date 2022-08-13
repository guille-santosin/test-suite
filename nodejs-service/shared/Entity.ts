

const isEntity = (v: any): v is Entity<any> => {
  return v instanceof Entity;
};
/**
 * Class representing an Entity
 */
export abstract class Entity<T> {
  protected readonly _id: string;
  public readonly props: T;

  /**
   * Constructs a new Entity
   * @param {T} props
   * @param {string} id
   */
  constructor(props: T, id?: string) {
    this.props = props;
    this._id = id ? id : '';
  }
  /**
   * Gets the id of the Entity
   */
  get id() {
    return this._id;
  }
  /**
   * Checks if two entities are equal
   * @param {Entity<T>} object
   * @return {boolean}
   */
  public equals(object?: Entity<T>): boolean {
    if (object === null || object === undefined) {
      return false;
    }
    if (this === object) {
      return true;
    }

    if (!isEntity(object)) {
      return false;
    }

    return this._id === object._id;
  }
}
