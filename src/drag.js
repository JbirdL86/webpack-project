export default function dropSort(dragItem, currentItem) {
  const oldItem = currentItem;
  const oldContainer = currentItem.parentNode;
  const newItem = dragItem;
  const newContainer = dragItem.parentNode;
  newContainer.appendChild(oldItem);
  oldContainer.appendChild(newItem);
}
