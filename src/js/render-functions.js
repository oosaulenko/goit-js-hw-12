export const renderTemplate = (data) => {
  return `
    <a href="${data.largeImageURL}" class="item">
      <img src="${data.webformatURL}" alt="" alt="${data.tags}"/>
      <div class="data">
        <p><b>Likes</b> <span>${data.likes}</span></p>
        <p><b>Views</b> <span>${data.views}</span></p>
        <p><b>Comments</b> <span>${data.comments}</span></p>
        <p><b>Downloads</b> <span>${data.downloads}</span></p>
      </div>
    </a>
  `;
};