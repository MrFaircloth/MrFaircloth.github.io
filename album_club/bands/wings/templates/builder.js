// Function to load template
async function loadTemplate(file_path) {
    const response = await fetch(file_path);
    const templateHTML = await response.text();
    return templateHTML;
}

// Function to create and append templated elements to the container
async function createTemplateElements(element_id, template, data, dataMapper) {
    const container = document.getElementById(element_id); // element that sub elements are appended to
    const templateHTML = await loadTemplate(template); // template used to create sub elements

    data.forEach(itemData => {
        // Clone the template content
        const templateClone = document.createElement('div');
        templateClone.innerHTML = templateHTML;

        // Use the dataMapper function to update the template
        dataMapper(templateClone, itemData);

        // Append the cloned template to the container
        container.appendChild(templateClone);
    });
}

export { loadTemplate, createTemplateElements }
