// nights.js
fetch('nights.json')
  .then(res => {
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      return res.json();
  })
  .then(data => {
      const container = document.getElementById('chapters');
      if (!container) throw new Error('Container #chapters not found');
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
  })
  .catch(error => console.error('Error loading JSON:', error));
