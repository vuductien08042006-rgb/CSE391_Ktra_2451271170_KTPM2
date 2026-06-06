document.addEventListener("DOMContentLoaded", () => {

    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");

    const errorFeedback =
        document.getElementById("taskErrorFeedback");

    const validFeedback =
        document.getElementById("taskValidFeedback");

    function validateTask() {

        const taskValue = taskInput.value.trim();
        const charCount = taskValue.length;

        taskInput.classList.remove(
            "is-valid",
            "is-invalid"
        );

        if (charCount === 0) {

            errorFeedback.textContent =
                "Tên Task không được để trống!";

            taskInput.classList.add("is-invalid");

            return false;
        }

        if (charCount > 100) {

            errorFeedback.textContent =
                `Tên Task vượt quá giới hạn (${charCount}/100 ký tự)!`;

            taskInput.classList.add("is-invalid");

            return false;
        }

        validFeedback.textContent =
            `Tên Task hợp lệ (${charCount}/100 ký tự).`;

        taskInput.classList.add("is-valid");

        return true;
    }

    taskInput.addEventListener(
        "input",
        validateTask
    );

    taskForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            if (!validateTask()) {
                return;
            }

            alert("Thêm Task thành công!");

            const modalElement =
                document.getElementById("taskModal");

            const modal =
                bootstrap.Modal.getInstance(
                    modalElement
                );

            if (modal) {
                modal.hide();
            }

            taskForm.reset();

            taskInput.classList.remove(
                "is-valid",
                "is-invalid"
            );

            errorFeedback.textContent = "";
            validFeedback.textContent = "";
        }
    );

});