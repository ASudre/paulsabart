const listFilesUrl = 'http://zyriane.free.fr/list.php?folder_path=';

const listFiles = async (filepath) => {
  const response = await fetch(`${listFilesUrl}${filepath}`);
  return await response.json();
}

export default {
  listFiles,
}