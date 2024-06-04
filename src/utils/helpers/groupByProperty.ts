/**
 * Group array of objects by property in objects
 * @param {Array} array - Array of objects
 * @param {string | number} property - Group by (property first level)
 * @param {string | number} secondProperty - group by (property second level) -Optional
 * @returns
 */

export const groupByProperty = (
  array: Array<any>,
  property: string | number,
  secondProperty?: string | number
) => {
  return array.reduce((result: any, el: any): any => {
    const index = secondProperty ? el[property][secondProperty] : el[property];
    if (result[index]) {
      return {
        ...result,
        [index]: [...result[index], el],
      };
    }
    return {
      ...result,
      [index]: [el],
    };
  }, {});
};
