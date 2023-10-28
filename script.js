function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // Made by Neeraj


/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: `menu-container ${props.showMenu}` }, /*#__PURE__*/
    React.createElement("div", { className: "overlay" }), /*#__PURE__*/
    React.createElement("div", { className: "menu-items" }, /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "HOME")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "ABOUT")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "PORTFOLIO")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "CONTACT"))), /*#__PURE__*/




    React.createElement(SocialLinks, null))));



};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("nav", { id: "navbar" }, /*#__PURE__*/
    React.createElement("div", { className: "nav-wrapper" }, /*#__PURE__*/
    React.createElement("em", { className: "brand" }, "Neeraj's ", /*#__PURE__*/
    // React.createElement("p", { className: "color" }, "BloodyCoder", /*#__PURE__*/
    React.createElement("strong", null, "Portfolio")), /*#__PURE__*/

    React.createElement("a", {
      onClick: props.toggleMenu,
      className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' }, /*#__PURE__*/

    React.createElement("span", null))))));





};



/***********************
  Header Component
 ***********************/

const Header = props => {
  return /*#__PURE__*/(
    React.createElement("header", { id: "welcome-section" }, /*#__PURE__*/
    React.createElement("div", { className: "forest" }), /*#__PURE__*/
    React.createElement("div", { className: "silhouette" }), /*#__PURE__*/
    React.createElement("div", { className: "moon" }), /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("h1", null, /*#__PURE__*/
    React.createElement("span", { className: "line" }, "A Passionate"), /*#__PURE__*/
    React.createElement("span", { className: "color" }, "Java"), " Developer", /*#__PURE__*/
    React.createElement("span", { className: "line" }, "& Problem", /*#__PURE__*/
    React.createElement("span", { className: "color" }, " Solver"), ".")), /*#__PURE__*/


    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: "#projects" }, "my portfolio"), /*#__PURE__*/
    React.createElement("a", { href: "#contact", className: "cta" }, "get in touch")))));






};


/***********************
  About Component
 ***********************/

const About = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "about" }, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("article", null, /*#__PURE__*/
    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "Who's me?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc full" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "My name is Neeraj."), /*#__PURE__*/
    React.createElement("p", null, "I did my B.tech in Computer Science from Bihar Engineering University Patna, holding a commendable CGPA of 8.39. I've a great passion towards Java technology and continously exploring this domain by enrolling myself in a Full Stack Java course at Naresh IT, Hyderabad. Currently I am focusing on Spring Framework and DevOops tools."), /*#__PURE__*/

    React.createElement("p", null, "Despite being a fresher, I possess a wealth of practical experience from diverse college projects showcased on GitHub. I have undertaken a valuable web internship at Accnee Technologies. My proactive nature, adaptability, attention to detail, rapid learning ability, and strong communication and problem-solving skills define my professional ethos. I am a self-motivated, confident, and dedicated person. Eager to contribute in a fast-paced environment. The goal is to achieve a good position by doing satisfying work in the IT field.")), /*#__PURE__*/






    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "What do I do?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "I'm a Full-Stack Developer."), /*#__PURE__*/
    React.createElement("p", null, "I design the user-interface using HTML, CSS, Ajax, jQuery, and JavaScript. I create visually appealing and responsive web designs by leveraging popular frameworks like ReactJS, AngularJS, and Bootstrap. My skills encompass a wide range of tools, enabling me to craft engaging and intuitive interfaces that captivate users and enhance online interactions."), /*#__PURE__*/

    React.createElement("p", null, "I am skilled in backend technologies like Servlets and JSP, proficiently managing databases using Oracle and MySQL. My expertise lies in creating seamless web applications, ensuring smooth interaction between users and databases. With a deep understanding of these systems, I transform complex technicalities into user-friendly experiences. My passion lies in bringing technology to life, creating functional and elegant solutions that bridge the gap between users and data management effortlessly.***")), /*#__PURE__*/




    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Also a Problem Solver."), /*#__PURE__*/
    React.createElement("p", null, "In the dynamic world of coding challenges, I've emerged as a skilled problem solver, navigating platforms like GeeksForGeeks, Leetcode, HackerRank, and Coding Ninja."), /*#__PURE__*/

    React.createElement("p", null, "Equipped with fundamental knowledge of data structures,  I relish dissecting complex problems, crafting elegant solutions that showcase my analytical abilities and programming finesse.  I find genuine delight in the fusion of logic and creativity, producing solutions that endure computational scrutiny. With a hunger for knowledge, I am not just a coder but an avid problem solver, driven by the excitement of each new challenge."), /*#__PURE__*/
    

    React.createElement("p", null, "In short, I am an enthusiastic problem solver, continuously pushing my boundaries in the quest for innovative solutions.***"))))));








};


/***********************
  Project Component
 ***********************/

const Project = props => {
  const tech = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    node: 'fab fa-node' };


  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return /*#__PURE__*/(
    React.createElement("div", { className: "project" }, /*#__PURE__*/
    React.createElement("a", { className: "project-link", href: link, target: "_blank", rel: "noopener noreferrer" }, /*#__PURE__*/
    React.createElement("img", { className: "project-image", src: props.img, alt: 'Screenshot of ' + props.title })), /*#__PURE__*/

    React.createElement("div", { className: "project-details" }, /*#__PURE__*/
    React.createElement("div", { className: "project-tile" }, /*#__PURE__*/
    // React.createElement("p", { className: "icons" },
    // props.tech.split(' ').map((t) => /*#__PURE__*/
    // React.createElement("i", { className: tech[t], key: t }))),


    props.title, ' '),

    props.children, /*#__PURE__*/
    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "View source ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" })), /*#__PURE__*/

    // React.createElement("a", { href: repo, target: "_blank", rel: "noopener noreferrer" }, "Try it Live ", /*#__PURE__*/
    //   React.createElement("i", { className: "fas fa-external-link-alt" }))
    ))));





};



/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "projects" }, /*#__PURE__*/
    React.createElement("div", { className: "projects-container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("h3", { className: "title" }, "My Works"), /*#__PURE__*/
    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Here's a list of ", /*#__PURE__*/
    React.createElement("u", null, "most"), " of the projects I've been working on lately. All of these were built during my coding camp adventure by",
    ' ', /*#__PURE__*/
    React.createElement("a", { href: "https:/nareshit.com/", target: "_blank", rel: "noopener noreferrer" }, "NareshIt"), ", where I've been coding for almost 7 months non-stop until I completed all the projects required to get my Full-Stack Developer certification.")), /*#__PURE__*/







    React.createElement(Project, {
      title: "Code-Blog",
      img: './codeblog.png',
      tech: "Java",
      link: "https://github.com/NeerajKumar805/Code-Blog",
      // repo: "https://github.com/NeerajKumar805/Code-Blog"
    }, /*#__PURE__*/

    React.createElement("small", null, "Built using Servlets, JSP, Bootstrap, Ajax, jQuery."), /*#__PURE__*/
    React.createElement("p", null, "A technical blog application with database connectivity, responsive and user-friendly interface.")), /*#__PURE__*/



    React.createElement(Project, {
      title: "Jobs-Hub",
      img: './job_portal.jpg',
      tech: "java",
      link: "https://github.com/NeerajKumar805/Jobs-Hub",
      // repo: "https://github.com/NeerajKumar805/Jobs-Hub"
    },/*#__PURE__*/

    React.createElement("small", null, "Built using Servlets, JSP, Bootstrap."), /*#__PURE__*/
    React.createElement("p", null, "Developed a user-friendly job portal with advanced search and match features.")), /*#__PURE__*/

    React.createElement(Project, {
      title: "Book-Store",
      img: './BokStore.png',
      tech: "java",
      link: "https://github.com/NeerajKumar805/Jobs-Hub",
      // repo: "https://github.com/NeerajKumar805/Book-Store"
    }, /*#__PURE__*/

    React.createElement("small", null, "Built using HTML, CSS, JSP, Bootstrap."), /*#__PURE__*/
    React.createElement("p", null, "Creating an online marketplace for third-party book vendors and enthusiasts.")), /*#__PURE__*/
    )));
};



/***********************
  Contact Component
 ***********************/

const Contact = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "contact" }, /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading-wrapper" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("p", { className: "title" }, "Want to ", /*#__PURE__*/
    React.createElement("br", null), "contact me?"), /*#__PURE__*/


    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Please, use the form below or send an email to ",
    '', /*#__PURE__*/
    React.createElement("span", { className: "mail" }, "neerajkumarroy805", /*#__PURE__*/

    React.createElement("i", { className: "fas fa-at at" }), "gmail", /*#__PURE__*/

    React.createElement("i", { className: "fas fa-circle dot" }), "com"), ":")), /*#__PURE__*/





    React.createElement(SocialLinks, null)), /*#__PURE__*/

    React.createElement("form", { id: "contact-form", action: "#" }, /*#__PURE__*/
    React.createElement("input", { placeholder: "Name", name: "name", type: "text", required: true,  autocomplete: "Full Name" }), /*#__PURE__*/
    React.createElement("input", { placeholder: "Email", name: "email", type: "email", required: true,  autocomplete: "Your Email" }), /*#__PURE__*/
    React.createElement("textarea", { placeholder: "Message", type: "text", name: "message" }), /*#__PURE__*/
    React.createElement("input", { className: "button", id: "submit", value: "Submit", type: "submit" })))));
};



/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return /*#__PURE__*/(
    React.createElement("footer", null, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("h3", null, "THANKS FOR VISITING"), /*#__PURE__*/
    React.createElement("p", null, "It's ", new Date().getFullYear(), " Neeraj"), /*#__PURE__*/
    React.createElement(SocialLinks, null))));
};




/***********************
  Social Links Component
 ***********************/

const SocialLinks = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "social" }, /*#__PURE__*/
    React.createElement("a", {
      href: "https://www.linkedin.com/in/neerajkumar805/",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Codepen Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-linkedin" })), /*#__PURE__*/

    React.createElement("a", {
      id: "profile-link",
      href: "https://github.com/NeerajKumar805",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's GitHub Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-github" })), /*#__PURE__*/

    React.createElement("a", {
      href: "https://codepen.io/NeerajKumarRoy805",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Codepen Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-codepen" }))));



};



/***********************
  Main Component
 ***********************/

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        'active' :
        state.menuState === 'deactive' ?
        'active' :
        'deactive' }));

    });}

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement(About, null), /*#__PURE__*/
      React.createElement(Projects, null), /*#__PURE__*/
      React.createElement(Contact, null), /*#__PURE__*/
      React.createElement(Footer, null)));


  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility = header.style.visibility === 'hidden' && 'visible';else
      header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');else
      navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth' });

          });
        }
      }
    })();
  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));