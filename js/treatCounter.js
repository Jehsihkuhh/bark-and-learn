let treats = 0;

document.querySelector('#give-treat-btn')
  .addEventListener('click', (e) => {
    treats += 1;
    document.querySelector('#count').textContent = treats;
  });
