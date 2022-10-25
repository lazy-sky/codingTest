/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const map = new Map();

  for (const str of strs) {
    const key = str.split('').sort().join('');
    const value = map.get(key) || [];
    value.push(str);

    map.set(key, value);
  }

  return Array.from(map.values());
};
