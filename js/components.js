// Tabs: click or use the arrow keys to switch the selected tab.
document.querySelectorAll('[role="tablist"]').forEach((list) => {
  const tabs = [...list.querySelectorAll('[role="tab"]')];

  const select = (tab, focus = false) => {
    for (const t of tabs) {
      const selected = t === tab;
      t.setAttribute("aria-selected", String(selected));
      t.tabIndex = selected ? 0 : -1;
    }
    if (focus) tab.focus();
  };

  list.addEventListener("click", (event) => {
    const tab = event.target.closest('[role="tab"]');
    if (tab) select(tab);
  });

  list.addEventListener("keydown", (event) => {
    const index = tabs.indexOf(document.activeElement);
    if (index === -1) return;
    const keys = { ArrowRight: 1, ArrowLeft: -1, Home: -index, End: tabs.length - 1 - index };
    if (!(event.key in keys)) return;
    event.preventDefault();
    const next = (index + keys[event.key] + tabs.length) % tabs.length;
    select(tabs[next], true);
  });

  select(tabs.find((t) => t.getAttribute("aria-selected") === "true") || tabs[0]);
});
