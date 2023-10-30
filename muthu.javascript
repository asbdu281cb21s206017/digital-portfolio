/* Reset some default styles */
body, h1, h2, h3, p {
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}

header {
    background-color: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
}

header h1 {
    font-size: 32px;
}

nav ul {
    list-style: none;
}

nav ul li {
    display: inline;
    margin-right: 20px;
}

nav ul li a {
    text-decoration: none;
    color: #fff;
}

section {
    margin: 20px;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
}

.project {
    margin: 20px 0;
}

.project img {
    max-width: 100%;
    height: auto;
}

.project h3 {
    font-size: 20px;
    margin: 10px 0;
}

/* Add more styles as needed */

/* Media query for responsiveness */
@media (max-width: 768px) {
    header {
        text-align: left;
    }
}