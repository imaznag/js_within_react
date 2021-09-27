import React, { useEffect, useState } from "react";
import c1 from ".././assets/images/c1.png";
import c2 from ".././assets/images/c2.png";
import c3 from ".././assets/images/c3.png";
import tc from ".././assets/images/tc.png";
import cours from ".././assets/images/cours.svg";
import exercices from ".././assets/images/exercices.svg";
import videos from ".././assets/images/videos.svg";
import { csv } from "d3";

function Home() {
  const [posts, setPosts] = useState();
  useEffect(async () => {
    const data = await csv("./posts.csv");
    // const result = JSON.stringify(data);
    console.log(data);
    setPosts(data);
  }, []);

  return (
    <div className="wrapper">
      <div>
        {posts &&
          posts.map((post, index) => <div key={index}>{post.title}</div>)}
      </div>
      <section className="c1">
        <div className="level-wrapper">
          <div>1ère année Collège</div>
          <div>
            <img src={c1} alt="c1" width="119" height="96" />
          </div>
          <div className="arabic">السنة الأولى إعدادي</div>
        </div>
        <div className="courses-grid">
          <div className="card">
            <div className="image-wrapper">
              <img src={cours} alt="cours" width="200" height="40" />
            </div>
            <h3 className="card-header">Cours</h3>
          </div>
          <div className="card">
            <div className="image-wrapper">
              <img src={exercices} alt="exercices" width="200" height="40" />
            </div>

            <h3 className="card-header">Exercices</h3>
          </div>
          <div className="card">
            <div className="image-wrapper">
              <img src={videos} alt="videos" width="200" height="40" />
            </div>
            <h3 className="card-header">Videos</h3>
          </div>
        </div>
      </section>

      <section className="c2">
        <div className="level-wrapper">
          <div>2ème année Collège</div>
          <div>
            <img src={c2} alt="c2" width="122" height="96" />
          </div>
          <div className="arabic">السنة الثانية إعدادي</div>
        </div>
        <div className="courses-grid">
          <div className="card">
            <div className="image-wrapper">
              <img src={cours} alt="cours" width="200" height="40" />
            </div>
            <h3 className="card-header">Cours</h3>
          </div>
          <div className="card">
            <div className="image-wrapper">
              <img src={exercices} alt="exercices" width="200" height="40" />
            </div>

            <h3 className="card-header">Exercices</h3>
          </div>
          <div className="card">
            <div className="image-wrapper">
              <img src={videos} alt="videos" width="200" height="40" />
            </div>
            <h3 className="card-header">Videos</h3>
          </div>
        </div>
      </section>

      <section className="c3">
        <div className="level-wrapper">
          <div>3ème année Collège</div>
          <div>
            <img src={c3} alt="c3" width="124" height="96" />
          </div>
          <div className="arabic">السنة الثالثة إعدادي</div>
        </div>
        <div className="courses-grid">
          <div className="card">
            <div className="image-wrapper">
              <img src={cours} alt="cours" width="200" height="40" />
            </div>
            <h3 className="card-header">Cours</h3>
          </div>
          <div className="card">
            <div className="image-wrapper">
              <img src={exercices} alt="exercices" width="200" height="40" />
            </div>

            <h3 className="card-header">Exercices</h3>
          </div>
          <div className="card">
            <div className="image-wrapper">
              <img src={videos} alt="videos" width="200" height="40" />
            </div>
            <h3 className="card-header">Videos</h3>
          </div>
        </div>
      </section>
      <section className="tc">
        <div className="level-wrapper">
          <div>Tronc Commun</div>
          <div>
            <img src={tc} alt="tc" width="116" height="96" />
          </div>
          <div className="arabic">الجدع المشترك</div>
        </div>
        <div className="courses-grid">
          <div className="card">
            <div className="image-wrapper">
              <img src={cours} alt="cours" width="200" height="40" />
            </div>
            <h3 className="card-header">Cours</h3>
          </div>
          <div className="card">
            <div className="image-wrapper">
              <img src={exercices} alt="exercices" width="200" height="40" />
            </div>

            <h3 className="card-header">Exercices</h3>
          </div>
          <div className="card">
            <div className="image-wrapper">
              <img src={videos} alt="videos" width="200" height="40" />
            </div>
            <h3 className="card-header">Videos</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
