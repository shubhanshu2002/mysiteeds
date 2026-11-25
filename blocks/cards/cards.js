export default function decorate(block) {
  // `block` is the <div class="cards block"> element
  
  // Each direct child div = one card row
  [...block.children].forEach((row) => {
    row.classList.add('card');

    // Each child of a row = one column
    [...row.children].forEach((col) => {
      col.classList.add('card-body');
    });
  });
}