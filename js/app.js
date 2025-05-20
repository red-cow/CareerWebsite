window.onload = () => {
  fetch('../src/jobhistory.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      data.forEach(job => {
        const divWorkCard = document.createElement('div');
        divWorkCard.classList.add('Work-card');
        
        const h3Jobtitle = document.createElement('h3')
        h3Jobtitle.classList.add("job-title")
        h3Jobtitle.textContent = job.title
        console.log(job.title)

        divWorkCard.appendChild(h3Jobtitle)
        document.getElementById('experience-container').appendChild(divWorkCard);
      });
    })
    .catch(error => {
      console.error('Failed to fetch job history:', error);
    });
};
