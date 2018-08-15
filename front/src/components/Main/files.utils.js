function buildMenuContent(files) {
  return files.reduce((acc, file) => (
    {
      ...acc,
      [file.theme]: {
        ...(acc[file.theme] || {}),
        [file.category]: [
          ...(acc[file.theme] && acc[file.theme][file.category] ? acc[file.theme][file.category] : []),
          file,
        ]
      }
    }), { });
}

export default {
  buildMenuContent,
}