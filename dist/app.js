// Progressive enhancement; all content, navigation and evidence work without JavaScript.
document.querySelectorAll('details').forEach(detail => {
  detail.addEventListener('toggle', () => {
    detail.dataset.state = detail.open ? 'open' : 'closed';
  });
});
