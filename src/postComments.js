const postComments = async (button, userName, comment) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/azkOsPbkazhyvYbhmyjA/comments', {
    method: 'POST',
    body: JSON.stringify({
      item_id: button,
      username: userName.value,
      comment: comment.value,
    }),
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
  });

  return response.text()
}

export default postComments;