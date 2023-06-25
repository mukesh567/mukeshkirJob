
function showContent(component) {
    var content = document.getElementById('content');
    var links = document.getElementsByTagName('a');

    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
    }

    switch (component) {
        case 'home':
            content.innerHTML = '<h2>Home</h2><p>This is the Home section.</p>';
            break;

        case 'contact':
            content.innerHTML = `
            <h2>Contact</h2>
            <form>
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Enter your email" required>
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" placeholder="Please type a message" required></textarea>
              </div>
              <div class="form-group">
                <input type="submit" value="Submit">
              </div>
            </form>
          `;
            break;

        case 'information':
            content.innerHTML = '<h2>Information</h2><p> I am mukesh kir. A Front-end web Developer,software developer and freelancer. I am enjoyed to learned new skills for a Developer.Currently i am pursuing B.tech in computer science and engineering from government engineering college , bikaner. </p>'
            break;

        case 'guide':
            content.innerHTML = '<h2>Guide</h2><p>This is the Guide section.</p>';
            break;
    }

    event.target.classList.add('active');
}
