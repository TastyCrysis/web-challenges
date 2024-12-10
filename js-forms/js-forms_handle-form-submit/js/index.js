console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.target.elements;
  console.log(formElements);

  const formData = {
    firstname: form.firstName.value,
    lastname: form.lastName.value,
    age: form.age.value,
    email: form.email.value,
    yourComplaint: form.complaint.value,
    details: form.details.value,
    howBad: form.badness.value,
    orderdate: form.orderDate.value,
  };
  console.log(formData);

  const ageBadnessSum =
    Number(event.target.badness.value) + Number(event.target.age.value);
  console.log(
    "The age-badness-sum of " +
      event.target.firstName.value +
      " is " +
      ageBadnessSum
  );
});
