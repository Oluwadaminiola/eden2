function openModal() {
    this.classList.add('expand')
}

function closeModal() {
    document.querySelector('.meals').classList.remove('expand'); event.stopPropagation();
}