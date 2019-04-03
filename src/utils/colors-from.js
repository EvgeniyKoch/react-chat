import {
  red,
  purple,
  blue,
  green,
  pink,
  indigo,
  lime,
  orange,
} from '@material-ui/core/colors';


const colors = [red, purple, blue, green, pink, indigo, lime, orange];

export default (string) => {
  try {
    const inx = string
      .toString()
      .split()
      .map(char => char.charCodeAt())
      .reduce((sum, num) => sum + num, 0);

    const colorInx = inx % colors.length;

    return colors[colorInx][500];
  } catch (e) {
    console.error();
    return red;
  }
};
