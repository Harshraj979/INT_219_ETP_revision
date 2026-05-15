type Category = {
    name: string
};

const categories: Category[] = [
    { name: "Electronics" },
    { name: "Books" },
    { name: "Clothing" },
    { name: "Accessories" }
];
const container = document.getElementById("container");

if (container) {
    categories.forEach((category) => {
        const btn = document.createElement("button");
        btn.innerText = category.name;
        container.appendChild(btn);
    });
    // Event delegation
    container.addEventListener("click", (e) => {
        const target = e.target as HTMLButtonElement;
        if (target.tagName === 'BUTTON') {
            alert("Selected Category: " + target.innerText);
        }
    });
}

export {};
