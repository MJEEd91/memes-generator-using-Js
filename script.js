function getMeme() {
    fetch("https://meme-api.com/gimme")
        .then(response => response.json())
        .then(data => {
            const memePic = data.preview ? data.preview[data.preview.length - 2] : "No preview available";
            const subreddit = data.subreddit || "Unknown subreddit";
            document.getElementById("meme-pic").src = memePic;
            document.getElementById("subreddit").textContent = subreddit;
        })
        .catch(error => console.error("Error fetching meme:", error));
}

getMeme();
setInterval(getMeme, 5000); // Refresh every 5 seconds
