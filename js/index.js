const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// NAV section
const nav = document.querySelector("header nav");
// Iterate over nav's children and assign value from the JSON
Array.from(nav.children).forEach((anchor, i) => {
  const key = `nav-item-${i + 1}`;
  anchor.textContent = siteContent.nav[key];
  anchor.style.color = "green";
});
prependAnchor = newAnchor("#", "Lorum");
appendAnchor = newAnchor("#", "Ipsum");

nav.prepend(prependAnchor);
nav.append(appendAnchor);

function newAnchor(link, text) {
  let anchor = document.createElement("a");
  anchor.href = link;
  anchor.textContent = text;
  anchor.style.color = "green";
  return anchor;
}

// CTA section
const cta = document.querySelector("section.cta");
const ctaText = cta.children[0].children; // also could use .querySelctor(".cta-text") but I wanted to try this way
ctaText[0].textContent = siteContent.cta.h1; // inserting h1 content
ctaText[1].textContent = siteContent.cta.button; // inserting button content
//cta.children[1].src = siteContent.cta["img-src"]; // Goal says to use ID :(
document.getElementById("cta-img").src = siteContent.cta["img-src"];

// SECTION .main-content
function div_h4_p_contentFill(div, section) {
  // main-content structure is repetitive so I'm looping over it
  const h4Key = `${section}-h4`;
  const pKey = `${section}-content`;

  const h4 = (div.children[0].textContent = siteContent["main-content"][h4Key]);
  const para = (div.children[1].textContent =
    siteContent["main-content"][pKey]);

  return div;
}
// Order to place the content for my loop
const contentOrder = ["features", "about", "", "services", "product", "vision"];
const mainContent = document.querySelector("section.main-content");

Array.from(mainContent.children).forEach(element => {
  if (element.className !== "middle-img") {
    // element = "top-content", "middle-img", "bottom-content"
    Array.from(element.children).forEach((nestedDIV, i) => {
      // nestedDIVs are text-content divs
      nestedDIV = div_h4_p_contentFill(nestedDIV, contentOrder[i]);
    });
  } else {
    //   element.src = siteContent["main-content"]["middle-img-src"]; // This worked really well but goals say use getElementById
    document.getElementById("middle-img").src =
      siteContent["main-content"]["middle-img-src"];
  }
});

// CONTACT section
// Objects aren't ordered so this conversion will helped the ordered array find the content
// in the object
const contactConversion = ["contact-h4", "address", "phone", "email"];
Array.from(document.getElementsByClassName("contact")[0].children).forEach(
  (element, i) => {
    const key = contactConversion[i];
    element.textContent = siteContent.contact[key];
  }
);

// FOOTER SECTION
document.querySelector("footer p").textContent = siteContent.footer.copyright;
