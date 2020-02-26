const jsExtract = (myObject) => {

  for (let entry of Object.entries(myObject)) {

    window[entry[0]] = entry[1];
  }
}
