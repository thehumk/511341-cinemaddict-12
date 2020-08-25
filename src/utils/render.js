import Abstract from "../view/abstract";

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

export const render = (container, component, place = `beforeend`) => {
  switch (place) {
    case `beforeend`:
      container.append(component.getElement());
      break;
    case `afterend`:
      container.after(component.getElement());
      break;
  }
};

export const remove = (component) => {
  if (!(component instanceof Abstract)) {
    throw new Error(`Can remove only components`);
  }

  component.getElement().remove();
  component.removeElement();
};
