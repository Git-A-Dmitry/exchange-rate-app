const dateElement = document.querySelector('.date');

const getDate = () => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const year = currentDate.getFullYear();
  const initialDate = day + '.' + month + '.' + year;

  dateElement.innerHTML = initialDate;
};

getDate();

export default getDate;
