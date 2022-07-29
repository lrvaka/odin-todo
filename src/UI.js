import todoList from "./todoList/todoList";
import initTodoListUI from "./initTodoListUI";
import genKey from "./utils/generate-key";
import storage from "./storage";

const listOfTodoLists = [
  { name: "Main", list: initTodoListUI(todoList()), key: genKey() },
  { name: "Secondary", list: initTodoListUI(todoList()), key: genKey() },
];

const UI = () => {
  storage();
  const body = document.body;

  const sideBarContainer = document.createElement("div");
  const sideBar = document.createElement("div");
  const sideBarList = document.createElement("div");

  sideBarContainer.classList.add("sidebar-container");
  sideBar.classList.add("sidebar");
  sideBarList.classList.add("sidebar__list");

  sideBar.textContent = "Viewtiful Todo";

  listOfTodoLists.forEach((e) => {
    const listItem = document.createElement("button");
    const listItemName = document.createElement("input");
    const changeListName = document.createElement("button");
    const deleteListItem = document.createElement("div");

    listItem.classList.add("sidebar__list-item");
    listItemName.classList.add("sidebar__list-item-name");
    changeListName.classList.add("sidebar__list-item-change");
    deleteListItem.classList.add("sidebar__list-item-delete");

    deleteListItem.innerHTML = `<?xml version="1.0" encoding="iso-8859-1"?>
    <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 354.319 354.319" style="enable-background:new 0 0 354.319 354.319;" xml:space="preserve">
    <path id="XMLID_2_" d="M293.765,125.461l-41.574-17.221l17.221-41.574c3.17-7.654-0.464-16.428-8.118-19.599L150.428,1.146
      C142.775-2.024,134,1.61,130.83,9.264l-17.221,41.574L72.035,33.617c-7.654-3.17-16.428,0.464-19.599,8.118
      c-3.17,7.654,0.464,16.428,8.118,19.599l55.433,22.961l96.628,40.024H87.16c-8.284,0-15,6.716-15,15v200c0,8.284,6.716,15,15,15h180
      c8.284,0,15-6.716,15-15V153.126l0.125,0.052c1.877,0.777,3.821,1.146,5.734,1.146c5.886,0,11.472-3.487,13.864-9.264
      C305.053,137.406,301.419,128.631,293.765,125.461z M141.326,62.318l11.48-27.716l83.148,34.441l-11.48,27.716L182.9,79.539
      L141.326,62.318z"/>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    </svg>
    `;
    changeListName.innerHTML = `<?xml version='1.0' encoding='utf-8'?>
    <!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512">
      <g>
        <path d="m468.1,43.9c-21.2-21.2-49.4-32.9-79.3-32.9-30,0-58.2,11.7-79.4,32.9l-261,261c-2.9,2.9-4.8,6.5-5.6,10.5l-31.4,161.3c-1.3,6.7 1.1,13.3 5.6,18.3 6.7,7.6 17,5.9 18.3,5.6l161.3-31.4c4-0.8 7.7-2.7 10.5-5.6l261-261c43.8-43.7 43.8-115 0-158.7zm-285.4,386.4l-125.4,24.5 24.4-125.4 207.1-207.1 101,101-207.1,207zm256.6-256.5l-20.6,20.6-101-101 20.6-20.6c45.6-40 85.8-15.2 101,0 27.8,27.8 27.8,73.1 0,101z"/>
      </g>
    </svg>
    `;
    listItemName.disabled = true;
    listItemName.value = e.name;
    listItem.setAttribute("key", e.key);
    listItem.appendChild(listItemName);
    listItem.appendChild(changeListName);
    if (sideBarList.firstChild) {
      listItem.appendChild(deleteListItem);
    }

    listItem.addEventListener("click", () => {
      const current = document.querySelector(".container");
      console.log(current);
      body.removeChild(current);
      body.appendChild(e.list);
    });

    changeListName.addEventListener("click", (e) => {
      e.stopPropagation();
      const target = e.target.closest(".sidebar__list-item-change");
      if (!target) return;
      console.log(target);
      if (listItemName.disabled) {
        listItemName.disabled = false;
        changeListName.innerHTML = `<?xml version="1.0" encoding="iso-8859-1"?>
        <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           width="405.272px" height="405.272px" viewBox="0 0 405.272 405.272" style="enable-background:new 0 0 405.272 405.272;"
           xml:space="preserve">
        <g>
          <path d="M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836
            c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064
            c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z"/>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        </svg>
        `;
      } else {
        listItemName.disabled = true;
        changeListName.innerHTML = `<?xml version='1.0' encoding='utf-8'?>
        <!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512">
          <g>
            <path d="m468.1,43.9c-21.2-21.2-49.4-32.9-79.3-32.9-30,0-58.2,11.7-79.4,32.9l-261,261c-2.9,2.9-4.8,6.5-5.6,10.5l-31.4,161.3c-1.3,6.7 1.1,13.3 5.6,18.3 6.7,7.6 17,5.9 18.3,5.6l161.3-31.4c4-0.8 7.7-2.7 10.5-5.6l261-261c43.8-43.7 43.8-115 0-158.7zm-285.4,386.4l-125.4,24.5 24.4-125.4 207.1-207.1 101,101-207.1,207zm256.6-256.5l-20.6,20.6-101-101 20.6-20.6c45.6-40 85.8-15.2 101,0 27.8,27.8 27.8,73.1 0,101z"/>
          </g>
        </svg>
        `;
      }
    });

    listItemName.addEventListener("input", (event) => {
      const key = listItem.getAttribute("key");
      listOfTodoLists.forEach((e, i) => {
        if (e.key == key) {
          e.name = event.target.value;
          console.log(listOfTodoLists);
        }
      });
    });

    deleteListItem.addEventListener("click", () => {
      const key = listItem.getAttribute("key");
      listOfTodoLists.forEach((e, i) => {
        if (e.key == key) {
          listOfTodoLists.splice(i, 1);
          listItem.remove();
          console.log(listOfTodoLists);
        }
      });
    });

    sideBarList.appendChild(listItem);
  });

  const sideBarListAddBtn = () => {
    const sideBarListAddBtn = document.createElement("button");
    sideBarListAddBtn.classList.add("sidebar__list-add-btn");
    sideBarListAddBtn.textContent = "+ Add List";

    sideBarListAddBtn.addEventListener("click", () => {
      const key = genKey();
      const name = "Enter name";
      const list = initTodoListUI(todoList());
      listOfTodoLists.push({
        name,
        list,
        key,
      });
      const listItem = document.createElement("button");
      const listItemName = document.createElement("input");
      const changeListName = document.createElement("button");
      const deleteListItem = document.createElement("div");

      listItem.classList.add("sidebar__list-item");
      listItemName.classList.add("sidebar__list-item-name");
      changeListName.classList.add("sidebar__list-item-change");
      deleteListItem.classList.add("sidebar__list-item-delete");

      deleteListItem.innerHTML = `<?xml version="1.0" encoding="iso-8859-1"?>
      <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 354.319 354.319" style="enable-background:new 0 0 354.319 354.319;" xml:space="preserve">
      <path id="XMLID_2_" d="M293.765,125.461l-41.574-17.221l17.221-41.574c3.17-7.654-0.464-16.428-8.118-19.599L150.428,1.146
        C142.775-2.024,134,1.61,130.83,9.264l-17.221,41.574L72.035,33.617c-7.654-3.17-16.428,0.464-19.599,8.118
        c-3.17,7.654,0.464,16.428,8.118,19.599l55.433,22.961l96.628,40.024H87.16c-8.284,0-15,6.716-15,15v200c0,8.284,6.716,15,15,15h180
        c8.284,0,15-6.716,15-15V153.126l0.125,0.052c1.877,0.777,3.821,1.146,5.734,1.146c5.886,0,11.472-3.487,13.864-9.264
        C305.053,137.406,301.419,128.631,293.765,125.461z M141.326,62.318l11.48-27.716l83.148,34.441l-11.48,27.716L182.9,79.539
        L141.326,62.318z"/>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      </svg>
      `;
      changeListName.innerHTML = `<?xml version="1.0" encoding="iso-8859-1"?>
      <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
      <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         width="405.272px" height="405.272px" viewBox="0 0 405.272 405.272" style="enable-background:new 0 0 405.272 405.272;"
         xml:space="preserve">
      <g>
        <path d="M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836
          c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064
          c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z"/>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      </svg>
      `;

      listItemName.placeholder = name;
      listItem.setAttribute("key", key);
      listItem.appendChild(listItemName);
      listItem.appendChild(changeListName);
      listItem.appendChild(deleteListItem);
      listItem.addEventListener("click", () => {
        const current = document.querySelector(".container");
        console.log(current);
        body.removeChild(current);
        body.appendChild(list);
      });

      changeListName.addEventListener("click", (e) => {
        e.stopPropagation();
        const target = e.target.closest(".sidebar__list-item-change");
        if (!target) return;
        console.log(target);
        if (listItemName.disabled) {
          listItemName.disabled = false;
          changeListName.innerHTML = `<?xml version="1.0" encoding="iso-8859-1"?>
          <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
          <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width="405.272px" height="405.272px" viewBox="0 0 405.272 405.272" style="enable-background:new 0 0 405.272 405.272;"
             xml:space="preserve">
          <g>
            <path d="M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836
              c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064
              c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z"/>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          </svg>
          `;
        } else {
          listItemName.disabled = true;
          changeListName.innerHTML = `<?xml version='1.0' encoding='utf-8'?>
          <!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512">
            <g>
              <path d="m468.1,43.9c-21.2-21.2-49.4-32.9-79.3-32.9-30,0-58.2,11.7-79.4,32.9l-261,261c-2.9,2.9-4.8,6.5-5.6,10.5l-31.4,161.3c-1.3,6.7 1.1,13.3 5.6,18.3 6.7,7.6 17,5.9 18.3,5.6l161.3-31.4c4-0.8 7.7-2.7 10.5-5.6l261-261c43.8-43.7 43.8-115 0-158.7zm-285.4,386.4l-125.4,24.5 24.4-125.4 207.1-207.1 101,101-207.1,207zm256.6-256.5l-20.6,20.6-101-101 20.6-20.6c45.6-40 85.8-15.2 101,0 27.8,27.8 27.8,73.1 0,101z"/>
            </g>
          </svg>
          `;
        }
      });

      listItemName.addEventListener("input", (event) => {
        const key = listItem.getAttribute("key");
        listOfTodoLists.forEach((e, i) => {
          if (e.key == key) {
            e.name = event.target.value;
            console.log(listOfTodoLists);
          }
        });
      });

      deleteListItem.addEventListener("click", () => {
        const key = listItem.getAttribute("key");
        listOfTodoLists.forEach((e, i) => {
          if (e.key == key) {
            listOfTodoLists.splice(i, 1);
            listItem.remove();
            console.log(listOfTodoLists);
          }
        });
      });

      sideBarList.appendChild(listItem);
    });

    return sideBarListAddBtn;
  };

  sideBarContainer.appendChild(sideBar);
  sideBar.appendChild(sideBarList);
  sideBar.appendChild(sideBarListAddBtn());

  body.appendChild(sideBarContainer);
  body.appendChild(listOfTodoLists[0].list);
};

export default UI;
