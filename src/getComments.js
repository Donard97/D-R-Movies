
const getComments = async (button) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/azkOsPbkazhyvYbhmyjA/comments?item_id=${button}`);
  return response.json();
};

export default getComments;