import {
  uniqueNamesGenerator,
  colors,
  countries,
} from "unique-names-generator";
const useUniqueName = () => {
  const randomName: string = uniqueNamesGenerator({
    dictionaries: [colors, countries],
  }); // big_red_donkey

  return { name: camelCaseAnndRmUnderscore(randomName) };
};

const camelCaseAnndRmUnderscore = (name: string) => {
  const camelCase = name.replace(/_([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
  return camelCase;
};

export default useUniqueName;
