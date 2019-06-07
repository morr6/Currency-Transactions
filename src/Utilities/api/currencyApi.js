const getPlnRate = () => {

  const fetchApi = () => {
    return fetch(`https://api.exchangeratesapi.io/latest/`)
    .then(res => res.json())
  };

  return {
    fetchApi
  }
};

export const plnRate = getPlnRate();