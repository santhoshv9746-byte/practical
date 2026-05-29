async function findMostForked() {
    const username = document.getElementById('username').value;
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();
    let maxForks = 0;
    let mostForked = null;
    for (let repo of repos) {
        if (repo.forks_count > maxForks) {
            maxForks = repo.forks_count;
            mostForked = repo;
            console.log(repo);
        }
    }
    const result = document.getElementById('repoResult');
    if (mostForked) {
        result.textContent = `Most forked repo: ${mostForked.name} with ${mostForked.forks_count} forks`;
    } else {
        result.textContent = 'No repos found';
    }
}
