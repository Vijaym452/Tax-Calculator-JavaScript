document.addEventListener('DOMContentLoaded', function() {
    var numberFields = document.querySelectorAll('input[type="number"]');

    numberFields.forEach(function(field) {
        field.addEventListener('input', function() {
            var value = this.value.trim();
            if (value !== '' && isNaN(value)) {
                var tooltipIcon = this.nextElementSibling;
                tooltipIcon.style.display = 'inline-block';
            } else {
                var tooltipIcon = this.nextElementSibling;
                tooltipIcon.style.display = 'none';
            }
        });
    });
});
