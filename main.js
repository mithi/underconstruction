import "./style.css";
import mithiLogo from "/mithidotdevtemplogo.svg";

document.querySelector("#main-logo").innerHTML = `
    <a href="https://github.com/mithi/" target="_blank" alt="Go to Mithi's Github">
      <img src="${mithiLogo}" class="logo" alt="Mithi's logo" />
    </a>
`;
