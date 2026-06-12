document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-edit-toggle]');
    if (!trigger) return;

    const id = trigger.getAttribute('data-edit-toggle');
    const form = document.getElementById(`edit-${id}`);
    if (form) {
        form.classList.toggle('hidden');
    }
});
