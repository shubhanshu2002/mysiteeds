export default function decorate(block) {
  // block = <div class="zoro block">

  [...block.children].forEach((row) => {
    row.classList.add('zoro-row');

    [...row.children].forEach((col) => {
      col.classList.add('zoro-col');
    });
  });
}