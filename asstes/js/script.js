const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-bar");
const closeBtn = document.querySelector("aside .close");
const themeToggler = document.querySelector(".theme-toggler");
const pageTitle = document.querySelector("#page-title");
const sidebarLinks = document.querySelectorAll(".sidebar a");
const reportDate = document.querySelector("#report-date");
const addProductBtn = document.querySelector(".add-products");
const ordersTableBody = document.querySelector("#orders-table tbody");
const sortableHeaders = document.querySelectorAll("#orders-table th[data-sort]");

let sortDirection = {};

if (menuBtn && sideMenu) {
    menuBtn.addEventListener("click", () => {
        sideMenu.style.display = "block";
    });
}

if (closeBtn && sideMenu) {
    closeBtn.addEventListener("click", () => {
        sideMenu.style.display = "none";
    });
}

if (themeToggler) {
    const themeIcons = themeToggler.querySelectorAll("span");
    const savedTheme = localStorage.getItem("dashboard-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme-variables");
        themeIcons[0].classList.remove("active");
        themeIcons[1].classList.add("active");
    }

    themeToggler.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-theme-variables");

        themeIcons[0].classList.toggle("active", !isDark);
        themeIcons[1].classList.toggle("active", isDark);

        localStorage.setItem("dashboard-theme", isDark ? "dark" : "light");
    });
}

sidebarLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        sidebarLinks.forEach((item) => item.classList.remove("active"));
        link.classList.add("active");

        const sectionName = link.dataset.section || "Dashboard";
        if (pageTitle) {
            pageTitle.textContent = sectionName;
        }

        if (window.innerWidth <= 768 && sideMenu) {
            sideMenu.style.display = "none";
        }
    });
});

if (reportDate) {
    const today = new Date().toISOString().split("T")[0];
    reportDate.value = today;
}

function createOrderRow(productName, productNumber, payment, status) {
    const row = document.createElement("tr");
    const statusClass = status === "Delivered" ? "success" : "warning";

    row.innerHTML = `
        <td>${productName}</td>
        <td>${productNumber}</td>
        <td>${payment}</td>
        <td class="${statusClass}">${status}</td>
        <td class="primary">Details</td>
    `;

    addRowSelection(row);
    return row;
}

if (addProductBtn && ordersTableBody) {
    addProductBtn.addEventListener("click", () => {
        const productName = window.prompt("Enter product name:");
        if (!productName) {
            return;
        }

        const productNumber = window.prompt("Enter product number:");
        if (!productNumber) {
            return;
        }

        const newRow = createOrderRow(productName, productNumber, "Paid", "Delivered");
        ordersTableBody.prepend(newRow);
    });
}

function addRowSelection(row) {
    row.addEventListener("click", () => {
        const currentSelected = ordersTableBody.querySelector(".is-selected");

        if (currentSelected && currentSelected !== row) {
            currentSelected.classList.remove("is-selected");
        }

        row.classList.toggle("is-selected");
    });
}

if (ordersTableBody) {
    ordersTableBody.querySelectorAll("tr").forEach(addRowSelection);
}

sortableHeaders.forEach((header, index) => {
    header.addEventListener("click", () => {
        if (!ordersTableBody) {
            return;
        }

        const rows = Array.from(ordersTableBody.querySelectorAll("tr"));
        const sortType = header.dataset.sort;
        const direction = sortDirection[index] === "asc" ? "desc" : "asc";

        sortDirection[index] = direction;

        sortableHeaders.forEach((item) => item.classList.remove("is-sorted"));
        header.classList.add("is-sorted");

        rows.sort((firstRow, secondRow) => {
            const firstValue = firstRow.children[index].textContent.trim();
            const secondValue = secondRow.children[index].textContent.trim();

            if (sortType === "number") {
                return direction === "asc"
                    ? Number(firstValue) - Number(secondValue)
                    : Number(secondValue) - Number(firstValue);
            }

            return direction === "asc"
                ? firstValue.localeCompare(secondValue)
                : secondValue.localeCompare(firstValue);
        });

        ordersTableBody.innerHTML = "";
        rows.forEach((row) => ordersTableBody.appendChild(row));
    });
});
