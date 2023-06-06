document.addEventListener("DOMContentLoaded", function () {
  const deleteButtons = document.querySelectorAll(".delete-btn");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", async (e) => {
      e.preventDefault();
      console.log("Delete button clicked");
      const targetButton = e.target.closest(".delete-btn");
      targetButton.disabled = true;
      const id = targetButton.getAttribute("data-id");

      if (!id) {
        alert("Error: User ID is not set.");
        targetButton.disabled = false;
        return;
      }

      try {
        const response = await fetch(`/removeUser/delete/${id}`, {
          method: "DELETE",
        });

        if (response.status === 200) {
          targetButton.closest("tr").remove();
          alert("User deleted successfully");
        } else {
          throw new Error("Failed to delete user.");
        }
      } catch (error) {
        alert(error.message);
        targetButton.disabled = false;
      }
    });
  });
});
