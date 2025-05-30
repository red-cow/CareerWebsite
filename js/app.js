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
        divWorkCard.classList.add('work-card');
        
        const h3Jobtitle = document.createElement('h3')
        h3Jobtitle.classList.add("job-title")
        h3Jobtitle.textContent = job.title

        const pPosition = document.createElement('p')
        pPosition.classList.add("position")
        pPosition.textContent = job.position

        const pLocationTime = document.createElement('p')
        pLocationTime.classList.add("location-time")
        pLocationTime.textContent = `${job.location} • ${job.time}`

        const ulSkills = document.createElement('ul')
        ulSkills.classList.add("skills")
        console.log(job.skills)
        job.skills.forEach(element => {
          const liSkillTemp = document.createElement('li')
          liSkillTemp.textContent = element
          ulSkills.appendChild(liSkillTemp)
        });

        divWorkCard.appendChild(h3Jobtitle)
        divWorkCard.appendChild(pPosition)
        divWorkCard.appendChild(pLocationTime)
        divWorkCard.appendChild(ulSkills)


        const container = document.getElementById('experience-container')
        
        container.appendChild(divWorkCard);
      });
    })
    .catch(error => {
      console.error('Failed to fetch job history:', error);
    });
};
