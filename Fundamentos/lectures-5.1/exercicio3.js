const header = document.getElementById('header-container');
header.style.background = 'green';

const urgentDiv = document.getElementsByClassName("emergency-tasks")[0];
urgentDiv.style.background = 'orange';

const notUrgentDiv = document.getElementsByClassName("no-emergency-tasks")[0];
notUrgentDiv.style.background = 'darkgoldenrod';

const bgUrgentCategories1 = document.querySelectorAll(".emergency-tasks h3")[0];
bgUrgentCategories1.style.background = 'purple';

const bgUrgentCategories2 = document.querySelectorAll(".emergency-tasks h3")[1];
bgUrgentCategories2.style.background = 'purple';

const bgNotUrgentCategories1 = document.querySelectorAll(".no-emergency-tasks h3")[0];
bgNotUrgentCategories1.style.background = 'black';

const bgNotUrgentCategories2 = document.querySelectorAll(".no-emergency-tasks h3")[1];
bgNotUrgentCategories2.style.background = 'black';

const footer = document.getElementById('footer-container')
footer.style.background = 'green';
