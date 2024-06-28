function downloadDoc() {
    const form = document.getElementById('personal-details-form');
    const formData = new FormData(form);
    let content = '';

    let allFieldsFilled = true;

    // Check if any field is empty
    formData.forEach((value, key) => {
        if (value.trim() === '') {
            allFieldsFilled = false;
            alert(`"${key}" is mandatory for your VISA Application.`);
        }
        content += `${key}: ${value}\n\n`; // Add spacing between each input
    });

    // If any field is empty, don't proceed to download
    if (!allFieldsFilled) {
        return;
    }

    const blob = new Blob([content], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'VISA_Form.doc';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
