import React from "react";

const Site = () => {
  const siteText = [
    {
      text: ["make", "portfolio site with", "vite"],
      title: "Vite를 이용한 사이트 제작",
      code: "https://github.com/SeoeunCho/port2023-vite",
      view: "https://port2023-vite.netlify.app",
      info: ["site coding", "period : one days", "use stack : Vite, html5/css3, CSS Variable, gsap, lenis, netlify"],
    },
    {
      text: ["make", "portfolio site with", "react"],
      title: "리액트를 이용한 사이트 제작",
      code: "https://github.com/SeoeunCho/port2023-react",
      view: "https://port2023-react.netlify.app",
      info: ["site coding", "production period : one days", "use stack : react.js, HTML5/SCSS, CSS Variable, gsap, lenis, netlify"],
    },
    {
      text: ["make", "portfolio site with", "vue.js"],
      title: "뷰를 이용한 사이트 제작",
      code: "https://github.com/SeoeunCho/port2023-vue",
      view: "https://port2023-vue.netlify.app",
      info: ["site coding", "production period : one days", "use stack : vue.js, HTML5/SCSS, CSS Variable, gsap, lenis, netlify"],
    },
    {
      text: ["make", "portfolio site with", "next.js"],
      title: "넥스트를 이용한 사이트 제작",
      code: "https://github.com/SeoeunCho/port2023-next",
      view: "https://port2023-next.netlify.app",
      info: ["site coding", "production period : one days", "use stack : next.js, HTML5/SCSS, CSS Variable, gsap, lenis, netlify"],
    },
  ];

  return (
    <section id="site">
      <div className="site__inner">
        <h2 className="site__title">
          Site coding <em>나의 작업물</em>
        </h2>
        <div className="site__wrap">
          {siteText.map((site, key) => (
            <article className={`site__item s${key + 1}`} key={key}>
              <span className="num">{key + 1}.</span>
              <div className="text">
                <div>{site.text[0]}</div>
                <div>{site.text[1]}</div>
                <div>{site.text[2]}</div>
              </div>
              <h3 className="title">{site.title}</h3>
              <div className="btn">
                <a href={site.code}>code</a>
                <a href={site.view}>view</a>
              </div>
              <div className="info">
                <span>{site.info[0]}</span>
                <span>{site.info[1]}</span>
                <span>{site.info[2]}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Site;
