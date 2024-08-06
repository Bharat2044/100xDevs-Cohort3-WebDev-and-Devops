function calculateReturns() {
  const capital = document.getElementById("capital").value;
  const years = document.getElementById("years").value;
  const interest = document.getElementById("interest").value;

  if (capital !== "" && years !== "" && interest !== "") {
    const totalAmount = capital * Math.pow(1 + interest / 100, years);

    document.getElementById("result").innerHTML = `${totalAmount.toFixed(2)}`;
  } else {
    alert("Please fill all the fields");
  }
}
