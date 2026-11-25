export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('testimonial-item');

    const [photoCol, quoteCol, nameCol] = row.children;
    photoCol.classList.add('testimonial-photo');
    quoteCol.classList.add('testimonial-quote');
    nameCol.classList.add('testimonial-name');
  });
}