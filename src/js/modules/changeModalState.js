import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll(".balcon_icons_img"),
        windowWidth = document.querySelectorAll("#width"),
        windowHeight = document.querySelectorAll("#height"),
        windowType = document.querySelectorAll("#view_type"),
        windowProfile = document.querySelectorAll(".checkbox");

    checkNumInputs("#height");
    checkNumInputs("#width");

    // Hangs a specific event handler on a specific element,
    // and writes to a specific property in the global state object
    function bindActionToElements(event, element, prop) {
        element.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case "SPAN":
                        state[prop] = i;
                        break;
                    case "INPUT":
                        if (item.getAttribute("type") === "checkbox") {
                            i === 0 ? (state[prop] = "Холодное") : (state[prop] = "Тёплое");
                            element.forEach((box, j) => {
                                box.checked = false;
                                if (i === j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case "SELECT":
                        state[prop] = item.value;
                        break;
                }

                console.log(state);
            });
        });
    }

    bindActionToElements("click", windowForm, "form");
    bindActionToElements("input", windowHeight, "height");
    bindActionToElements("input", windowWidth, "width");
    bindActionToElements("change", windowType, "type");
    bindActionToElements("change", windowProfile, "profile");
};

export default changeModalState;
