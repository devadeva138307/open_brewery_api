const button = document.querySelector('#polandButton');
const table = document.querySelector('#breweriesTable tbody');

button.addEventListener('click', () => {
  const url = 'https://api.openbrewerydb.org/breweries?by_country=poland';
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Build the table rows
      let rows = '';
      data.forEach(brewery => {
        rows += `<tr>
                    <td>${brewery.name}</td>
                    <td>${brewery.brewery_type}</td>
                    <td>${brewery.street}, ${brewery.city}, ${brewery.state}, ${brewery.postal_code}</td>
                    <td><a href="${brewery.website_url}" target="_blank">${brewery.website_url}</a></td>
                    <td>${brewery.phone}</td>
                 </tr>`;
      });
      // Add the rows to the table body
      table.innerHTML = rows;
    })
    .catch(error => console.error(error));
});
