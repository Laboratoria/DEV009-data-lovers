// estas funciones son de ejemplo

import { defaults } from "gh-pages";

const sortNameasc = (data) => {
  data.sort((a, b) => {
    if (a < b ) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });

  return data;
};

export default sortNameasc

