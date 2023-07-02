const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

console.log(CATEGORIES.find((cat) => cat.name === "society").color);

async function loadFact() {
  const res = await fetch(
    "https://tmkwhewkqgsprwclcjia.supabase.co/rest/v1/fact?",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRta3doZXdrcWdzcHJ3Y2xjamlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY2NDMwNTMsImV4cCI6MjAwMjIxOTA1M30.M8psRcgt35_7U_M_sLFSl7hMwEXJHvOS7q3RTXqiJGQ",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRta3doZXdrcWdzcHJ3Y2xjamlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY2NDMwNTMsImV4cCI6MjAwMjIxOTA1M30.M8psRcgt35_7U_M_sLFSl7hMwEXJHvOS7q3RTXqiJGQ",
      },
    }
  );
  const data = await res.json();
  //   createFactElement(data);

  const filterData = data.filter((el) => el.category === "society");
  console.log(filterData);
}

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const btnOpen = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factList = document.querySelector(".fact-list");
factList.innerHTML = "";

const createFactElement = (initialFacts) => {
  const factHTML = initialFacts.map(
    (el) => `<li class="fact">
      <p>
        ${el.text}
      
        <a
          href="${el.source}"
          target="_blank"
          class="source"
          >(source)</a
        >
      </p>
      <span class="tag" style="background-color: ${
        CATEGORIES.find((cat) => cat.name === el.category).color
      }">
        ${el.category}</span
      >
      <div class="vote-buttons">
        <button>👍 ${el.votesInteresting}</button>
        <button>🤯 ${el.votesMindblowing}</button>
        <button>⛔️ ${el.votesFalse}</button>
      </div>
      </li>`
  );

  factList.insertAdjacentHTML("afterbegin", factHTML);
};

// createFactElement(initialFacts);

btnOpen.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btnOpen.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btnOpen.textContent = "Share A Fact";
  }
});

console.log([7, 64, 6, -23, 11].filter((el) => el > 10));
