export default (htmlUrl, apiUrl) => {
  if (!apiUrl) return htmlUrl;
  const urlArray = apiUrl.split('/');
  const id = urlArray.pop();
  const typeAlert = urlArray.pop();
  const type = typeAlert === 'issues' ? 'issue' : 'pull';

  return `${htmlUrl}/${type}/${id}`;
};
