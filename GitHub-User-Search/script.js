
const searchForm = document.getElementById("searchForm");
const usernameInput = document.getElementById("username");
const profile = document.getElementById("profile");
const message = document.getElementById("message");

searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();

    if (!username) {
        message.textContent = "Please enter a GitHub username.";
        profile.innerHTML = "";
        return;
    }

    // Reset previous results
    profile.innerHTML = "";
    message.style.color = "#64748b";
    message.textContent = "Loading profile...";

    try {
        // Fetch data from the GitHub API
        const response = await fetch(
            `https://api.github.com/users/${encodeURIComponent(username)}`
        );

        // Handle invalid usernames and other HTTP errors
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("GitHub user not found. Try another username.");
            }

            if (response.status === 403) {
                throw new Error(
                    "API rate limit reached. Please try again later."
                );
            }

            throw new Error(`Request failed with status ${response.status}.`);
        }

        // Convert the response into JavaScript data
        const user = await response.json();

        // Display the profile
        profile.innerHTML = `
            <div class="profile-card">
                <img
                    src="${user.avatar_url}"
                    alt="GitHub avatar"
                    class="avatar"
                >

                <h2>${user.name || user.login}</h2>

                <p>@${user.login}</p>

                <p class="bio">
                    ${user.bio || "No bio available."}
                </p>

                <div class="stats">
                    <div>
                        <strong>${user.public_repos}</strong><br>
                        Repositories
                    </div>

                    <div>
                        <strong>${user.followers}</strong><br>
                        Followers
                    </div>

                    <div>
                        <strong>${user.following}</strong><br>
                        Following
                    </div>
                </div>

                <a
                    href="${user.html_url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="profile-link"
                >
                    View GitHub Profile
                </a>
            </div>
        `;

        message.textContent = "";
    } catch (error) {
        message.style.color = "#dc2626";
        message.textContent =
            error.message || "Something went wrong. Please try again.";

        profile.innerHTML = "";
    }
});
