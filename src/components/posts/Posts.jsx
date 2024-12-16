import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Angelina August",
      userId: 1,
      profilePic:
        "https://demo-source.imgix.net/group_photo.jpg",
      desc: "The strong women in my family have always been my source of inspiration, resilience, and support.",
      img: "https://demo-source.imgix.net/group_photo.jpg",
    },
    {
      id: 2,
      name: "Jane Salmon",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "My trip to the mountains was an incredible escape from the hustle and bustle of everyday life. Surrounded by breathtaking landscapes, towering peaks, and serene valleys.The crisp mountain air, the sound of rustling leaves, and the sight of endless blue skies created a feeling of peace and connection with nature. Exploring the trails, soaking in the scenic views, and spending time away from the chaos allowed me to recharge, reflect, and create lasting memories of serenity and adventure.",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
