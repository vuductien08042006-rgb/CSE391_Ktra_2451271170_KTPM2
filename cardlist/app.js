const clubContainer =
document.getElementById("clubContainer");

function renderClubs()
{
    clubContainer.innerHTML = "";

    clubs.forEach(club =>
    {
        clubContainer.innerHTML += `
        
        <div class="col-md-4 mb-4">

            <div class="card shadow h-100">

                <div class="card-body">

                    <h5 class="fw-bold">
                        ${club.clubName}
                    </h5>

                    <p>
                        <strong>President:</strong>
                        ${club.president}
                    </p>

                    <p>
                        <strong>Email:</strong>
                        ${club.email}
                    </p>

                    <p>
                        <strong>Phone:</strong>
                        ${club.phone}
                    </p>

                    <p>
                        <strong>Founded Date:</strong>
                        ${club.foundedDate}
                    </p>

                </div>

            </div>

        </div>
        `;
    });
}

renderClubs();

function validateForm()
{
    let clubName =
    document.getElementById("clubName").value.trim();

    let president =
    document.getElementById("president").value.trim();

    let phone =
    document.getElementById("phone").value.trim();

    let foundedDate =
    document.getElementById("foundedDate").value;

    if(clubName === "")
    {
        alert("Club Name cannot be empty");
        return false;
    }

    if(president === "")
    {
        alert("President cannot be empty");
        return false;
    }

    if(!/^\d{10}$/.test(phone))
    {
        alert("Phone must contain exactly 10 digits");
        return false;
    }

    let today = new Date();
    let founded = new Date(foundedDate);

    if(founded > today)
    {
        alert("Founded Date cannot be greater than current date");
        return false;
    }

    return true;
}

document
.getElementById("saveBtn")
.addEventListener("click", function()
{
    if(!validateForm())
    {
        return;
    }

    let newClub =
    {
        id: clubs.length + 1,

        clubName:
        document.getElementById("clubName").value.trim(),

        president:
        document.getElementById("president").value.trim(),

        email:
        document.getElementById("email").value.trim(),

        phone:
        document.getElementById("phone").value.trim(),

        foundedDate:
        document.getElementById("foundedDate").value
    };

    clubs.push(newClub);

    renderClubs();

    alert("Add Club Successfully");

    document
    .getElementById("clubForm")
    .reset();

    let modal =
    bootstrap.Modal.getInstance(
        document.getElementById("clubModal")
    );

    modal.hide();
});