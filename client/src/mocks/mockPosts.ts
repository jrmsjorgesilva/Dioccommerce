import PostsType from "../@types/PostsType";
import generateRandomId from "../utils/generateRandomId";

const mockProducts: PostsType[] = [
  {
    _id: generateRandomId(),
    userId: generateRandomId(),
    postId: generateRandomId(),
    title: "A ida dos que não chegaram",
    body: "Rondonia tem gente feia. Era dia, mas já dava arrepios! It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    author: "Renato Souza",
    postLength:
      "Rondonia tem gente feia. Era dia, mas já dava arrepios! It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        .length,
  },
  {
    _id: generateRandomId(),
    userId: generateRandomId(),
    postId: generateRandomId(),
    title: "A ida dos que não chegaram",
    body: "Rondonia tem gente feia. Era dia, mas já dava arrepios! It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    author: "Renato Souza",
    postLength:
      "Rondonia tem gente feia. Era dia, mas já dava arrepios! It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        .length,
  },
];

export default mockProducts;
