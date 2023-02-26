const formatSelect = () => {
  const select = document.querySelector("#status");
  if (select === null) {
    return 1;
  }
  console.log(select, select.value);
  switch (select.value) {
    case "On Track":
      select.style.color = "#76B041";
      break;
    case "Delayed":
      select.style.color = "#FFBA49";
      break;
    case "On Hold":
      select.style.color = "#E01A4F";
      break;
    case "Closed":
      select.style.color = "#5998C5";
      break;
    default:
      break;
  }
};

export default formatSelect;
