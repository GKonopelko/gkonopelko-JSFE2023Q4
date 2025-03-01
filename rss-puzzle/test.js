// const bodyElement = document.body;
// const title = "Welcome to our website!";
// const content = "This element comes with additional classes.";
// const headerElement = document.createElement("h1");
// headerElement.textContent = title;
// headerElement.classList.add("custom-header");

// class Component {
//   #children = [];
//   #node = null;
//   constructor({ tag = "div", className = "", text = "" }, ...children) {
//     const node = document.createElement(tag);
//     node.className = className;
//     node.textContent = text;
//     this.#node = node;
//     if (children) {
//       this.appendChildren(children);
//     }
//   }
//   append(child) {
//     this.#children.push(child);
//     this.#node.append(child.getNode());
//   }
//   appendChildren(children) {
//     children.forEach((el) => {
//       this.append(el);
//     });
//   }
//   getNode() {
//     return this.#node;
//   }
//   getChildren() {
//     return this.#children;
//   }
//   setTextContent(content) {
//     this.#node.textContent = content;
//   }
//   setAttribute(attribute, value) {
//     this.#node.setAttribute(attribute, value);
//   }
//   removeAttribute(attribute) {
//     this.#node.removeAttribute(attribute);
//   }
//   toggleClass(className) {
//     this.#node.classList.toggle(className);
//   }
//   addListener(event, listener, options = false) {
//     this.#node.addEventListener(event, listener, options);
//   }
//   removeListener(event, listener, options = false) {
//     this.#node.removeEventListener(event, listener, options);
//   }
//   destroyChildren() {
//     this.#children.forEach((child) => {
//       child.destroy();
//     });
//     this.#children.length = 0;
//   }
//   destroy() {
//     this.destroyChildren();
//     this.#node.remove();
//   }
// }
// /////////////

// // import { Component } from "./componentClass";

// class Menu extends Component {
//   constructor({ className, items }) {
//     super({ tag: "nav", className });
//     this.appendChildren(items);
//   }

//   toggleActiveItem(item) {
//     this.getChildren().forEach((child) => {
//       if (child === item && !child.isActive) {
//         child.addActiveClass();
//       } else if (child !== item && child.isActive) {
//         child.removeActiveClass();
//       }
//     });
//   }
// }

// class MenuItem extends Component {
//   activeClassName = "menu__item--active";

//   constructor({ className, text, href, onItemClicked = () => {} }) {
//     super({ tag: "li", className });
//     this.append(
//       new Link({
//         className: "menu__link",
//         text,
//         href,
//         onClick: (event) => {
//           onItemClicked(this);
//         },
//       }),
//     );
//   }

//   get isActive() {
//     return this.getNode().classList.contains(this.activeClassName);
//   }

//   addActiveClass() {
//     this.toggleClass(this.activeClassName);
//   }

//   removeActiveClass() {
//     this.toggleClass(this.activeClassName);
//   }
// }

// class Link extends Component {
//   constructor({ className, text, href, onClick }) {
//     super({ tag: "a", className, text });
//     this.onClick = onClick;
//     this.setAttribute("href", href);
//     if (onClick) {
//       this.onClick = onClick;
//       this.addListener("click", this.onClick);
//     }
//   }

//   setHref(href) {
//     this.setAttribute("href", href);
//   }

//   destroy() {
//     this.removeListener("click", this.onClick);
//     super.destroy();
//   }
// }
// //////////
// //  const menuItems = [
// //   { text: 'Home', href: '#' },
// //   { text: 'About', href: '#about' },
// //   { text: 'Contacts', href: '#contact' },
// //  ];

// //  class App {
// //   menu = null;

// //   constructor() {
// //    this.menu = new Menu({
// //     className: 'nav nav--main',
// //     items: menuItems.map(item => {
// //      return new MenuItem({
// //       className: 'menu__item',
// //       text: item.text,
// //       href: item.href,
// //       onItemClicked: item => {
// //        this.menu.toggleActiveItem(item);
// //       },
// //      });
// //     }),
// //    });
// //   }

// //   render(root) {
// //    root.append(this.menu.getNode());
// //   }
// //  }

// //////

// ///////////
// class Button extends Component {
//   constructor({ className, text, onClick }) {
//     super({ tag: "button", className, text });
//     if (onClick) {
//       this.onClick = onClick;
//       this.addListener("click", this.onClick);
//     }
//   }

//   destroy() {
//     this.removeListener("click", this.onClick);
//     super.destroy();
//   }
// }

// /////

// const paragraph = new Component({
//   tag: "p",
//   className: "content",
//   text: "Component",
// });

// const app = new Component(
//   {
//     className: "app",
//   },
//   new Component({
//     tag: "h1",
//     className: "title",
//     text: title,
//   }),
//   paragraph,
//   new Button({
//     className: "btn",
//     text: "Component button",
//     onClick: () => {
//       paragraph.toggleClass("content--hidden");
//     },
//   }),
// );

// document.body.append(app.getNode());

// //////
