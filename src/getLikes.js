const getLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/JCBgN543iPS5iR49A5FE/likes');
  return response.json();
};

export default getLikes;
