import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://demo-source.imgix.net/head_shot.jpg"
                alt=""
              />
              <span>Miller karmen</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://demo-source.imgix.net/model.jpg"
                alt=""
              />
              <span>Ramsay Claudine</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://demo-source.imgix.net/puppy.jpg"
                alt=""
              />
              <p>
                <span>Alleyne </span>changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://demo-source.imgix.net/canyon.jpg"
                alt=""
              />
              <p>
                <span>Chriss12</span> Posted a picture
              </p>
            </div>
            <span>5 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Jane Doe</span> liked your post
              </p>
            </div>
            <span>12 mins Ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://demo-source.imgix.net/scooter.jpg"
                alt=""
              />
              <p>
                <span>P24</span> Started following you
              </p>
            </div>
            <span>12 mins ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://demo-source.imgix.net/house.jpg"
                alt=""
              />
              <div className="online" />
              <span>Sarah Johnson</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://demo-source.imgix.net/mountains.jpg"
                alt=""
              />
              <div className="online" />
              <span>Emily Davis</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://demo-source.imgix.net/snowboard.jpg"
                alt=""
              />
              <div className="online" />
              <span>Michael Brown</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://demo-source.imgix.net/sneakers.jpg"
                alt=""
              />
              <div className="online" />
              <span>Jessica Wilson</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://demo-source.imgix.net/plant.jpg"
                alt=""
              />
              <div className="online" />
              <span>David Anderson</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://demo-source.imgix.net/scooter.jpg"
                alt=""
              />
              <div className="online" />
              <span>Olivia Martinez</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://demo-source.imgix.net/canyon.jpg"
                alt=""
              />
              <div className="online" />
              <span>James Thomas</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://demo-source.imgix.net/puppy.jpg"
                alt=""
              />
              <div className="online" />
              <span>Sophia Lewis</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://demo-source.imgix.net/house.jpg"
                alt=""
              />
              <div className="online" />
              <span>Daniel White</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://demo-source.imgix.net/mountains.jpg"
                alt=""
              />
              <div className="online" />
              <span>Ava Harris</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://demo-source.imgix.net/sneakers.jpg"
                alt=""
              />
              <div className="online" />
              <span>Smith Seed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
