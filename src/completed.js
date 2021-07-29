export default function checkCompleted(e) {
  e.target.completed = !e.target.completed;
  if (e.target.completed === true) {
    e.currentTarget.nextElementSibling.classList.add('marked');
  } else {
    e.currentTarget.nextElementSibling.classList.remove('marked');
  }
}
