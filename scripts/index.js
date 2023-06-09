import CreateCards from './CreateCards.js';
import HandleFilterClick from './HandleFilterClick.js';
import HandleSearch from './HandleSearch.js';
import StorageData from './StorageData.js';

const url = 'https://restcountries.com/v3.1/all';

const fetchData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {}
};

fetchData().then((data) => {
  StorageData(data);
  CreateCards('Americas');
  HandleFilterClick();
  HandleSearch();
});
