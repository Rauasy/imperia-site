fetch('data/nights.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('chapters');
    data.forEach(entry => {
      const details = document.createElement('details');
      details.className = 'night';
      const summary = document.createElement('summary');
      summary.textContent = entry.title;
      const content = document.createElement('div');
      content.className = 'night-content';
      content.textContent = entry.text;
      details.appendChild(summary);
      details.appendChild(content);
      container.appendChild(details);
    });
  });
