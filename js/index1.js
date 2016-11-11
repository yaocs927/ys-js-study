function compare(val1, val2) {
  if (val1 < val2) {
    return -1;
  } else if (val1 > val2) {
    return 1;
  } else {
    return 0;
  }
}

var result = compare(5, 10);