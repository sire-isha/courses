function enroll(courseName) {
  alert(🎉 Woohoo! You've enrolled in: ${courseName});
}

function filterCourses(category) {
  const cards = document.querySelectorAll('.course-card');
  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}