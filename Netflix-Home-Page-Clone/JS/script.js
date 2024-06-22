const tabs = document.querySelectorAll(".tab");
const tabContentItems = document.querySelectorAll(".tab-item-content");
// Function to remove the "tab-border" class from all tabs
const removeBorder = () => {
  tabs.forEach((item) => {
    item.classList.remove("tab-border");
  });
};

// Function to remove the "show" class from all tab content items
const removeShow = () => {
  tabContentItems.forEach((item) => {
    item.classList.remove("show");
  });
};

// Function to handle the click event on a tab
const selectItem = (event) => {
  removeBorder();
  removeShow();
  event.currentTarget.classList.add("tab-border");
  const tabContentItem = document.querySelector(
    `.${event.currentTarget.id}-content`
  );
  tabContentItem.classList.add("show");
};

// Function to add click event listeners to all tabs
tabs.forEach((item) => {
  item.addEventListener("click", selectItem);
});
